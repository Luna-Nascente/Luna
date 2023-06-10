import { Link } from 'react-router-dom';
import CardCart from '../components/CardCart';

// Массив товаров взять из БД (когда же она уже появится...)
const items = [
    { title: "turtleneck (BLACK)", size: "L", price: 2700, count: 1, imgURL: "/img/turtleneck_(BLACK).png"},
    { title: "bomber jacket (SPRING)", size: "S", price: 4900, count: 2, imgURL: "/img/bomber_jacket_(SPRING).png"},
];

function Cart() {

    const total = items.reduce((acc, item) => acc + item.price * item.count, 0);
    return (
        <div className="cart">
            <Link to="/products">
                <div className="backToShop d-flex align-center">
                    <img alt="arrowLeft" src="/img/ArrowLeft.svg"/>
                    <p>Back to shopping</p>
                </div>
            </Link>
            <h1>CART</h1>
            {items.length > 0 ? (
                <div>
                    {items.map((obj) => (
                    <CardCart 
                        title={obj.title} 
                        size={obj.size}
                        count={obj.count}
                        price={new Intl.NumberFormat('ru-RU').format(obj.price)} 
                        total={new Intl.NumberFormat('ru-RU').format(obj.price * obj.count)}
                        imgURL={obj.imgURL}
                    /> 
                    ))}
                
                    <div className='totalPriceCount d-flex'>
                        <p>Total:</p>
                        <p>{new Intl.NumberFormat('ru-RU').format(total)} ₽</p>
                    </div>

                    <Link to="/order">
                        <button className="contact cu-p">
                            Place an order
                        </button>
                    </Link>
                </div>
                ) : (

                <div className="cartIsEmpty">
                    <img alt="cartIsEmpty" src="/img/cartIsEmpty.png"/>
                    <p>Your shopping cart is empty</p>
                </div>
                )
            }
        </div>
    );
}

export default Cart;