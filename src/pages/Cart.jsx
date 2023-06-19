import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardCart from '../components/CardCart';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('https://localhost:7256/Shopping_cart');
        const items = response.data;
        const productRequests = items.map(item =>
          axios.get(`https://localhost:7256/Products?product_id=${item.product_idf}`)
        );
        const productResponses = await Promise.all(productRequests);
        const updatedItems = items.map((item, index) => ({
          ...item,
          product_name: productResponses[index].data[item.product_idf-1].product_name,
          product_price: productResponses[index].data[item.product_idf-1].product_price,
          product_image: productResponses[index].data[item.product_idf-1].product_image,
          shopping_cart_id: item.shopping_cart_id,
          product_idf: item.product_idf,
          product_size: item.product_size
        }));
        
        setCartItems(updatedItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartItems();
  }, []);

  const handleItemDelete = (product_id) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = prevCartItems.map(item =>
        item.shopping_cart_id === product_id
          ? { ...item, product_count: item.product_count - item.product_count }
          : item
      ).filter(item => item.product_count > 0);
      return updatedCartItems;
    });
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
              key={item.shopping_cart_id}
              shopping_cart_id={item.shopping_cart_id}
              product_idf={item.product_idf}
              product_count={item.product_count}
              onItemDelete={handleItemDelete}
              product_name={item.product_name}
              product_size={item.product_size}
              product_price={item.product_price}
              product_image={item.product_image}
              total={item.product_price * item.product_count}
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
