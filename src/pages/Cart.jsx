import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardCart from '../components/CardCart';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('https://647b1df4d2e5b6101db0e241.mockapi.io/cart')
      .then((response) => setCartItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleItemDelete = (product_id) => {
    const updatedCartItems = cartItems.map(item =>
      item.product_id === product_id
        ? { ...item, product_count: item.product_count - item.product_count }
        : item
    ).filter(item => item.product_count > 0);
    setCartItems(updatedCartItems);
  };

  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.product_price * item.product_count, 0);

  return (
    <div className="cart">
      <Link to="/products">
        <div className="backToShop d-flex align-center">
          <img alt="arrowLeft" src="/img/ArrowLeft.svg" />
          <p>Back to shopping</p>
        </div>
      </Link>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CardCart
              key={item.product_id}
              product_id={item.product_id}
              product_name={item.product_name} 
              product_size={item.product_size}
              product_count={item.product_count}
              product_price={item.product_price} 
              total={(item.product_price * item.product_count)}
              product_image={item.product_image}
              cartItems={cartItems} 
              onItemDelete={handleItemDelete}
              favorite={item.favorite}
            />
          ))}

          <div className="totalPriceCount d-flex">
            <p>Total:</p>
            <p>{new Intl.NumberFormat('ru-RU').format(total)} ₽</p>
          </div>

          <Link to="/order">
            <button className="contact cu-p">Place an order</button>
          </Link>
        </div>
      ) : (
        <div className="cartIsEmpty">
          <img alt="cartIsEmpty" src="/img/cartIsEmpty.png" />
          <p>Your shopping cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;