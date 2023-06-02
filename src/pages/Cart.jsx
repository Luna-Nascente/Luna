import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div className="cart">
            <Link to="/products">
                <div className="backToShop d-flex align-center">
                    <img alt="arrowLeft" src="/img/ArrowLeft.svg"/>
                    <p>Back to shopping</p>
                </div>
            </Link>
            <h1>CART</h1>
            <div className='cartItem'>
                <img width={137} height={154} src="/img/turtleneck(BLACK).png"/>
                <div className='itemName'>
                    <p>turtleneck</p>
                    <p>(BLACK)</p>
                </div>
                <div class="vl"/>
                <div className='d-flex size'> 
                    <p>size:</p>
                    <p className='ml-5'>L</p>
                </div>
                <div class="vl"/>
                <p className='priceCount'>2 700 ₽ x 1</p>
                <div class="vl"/>
                <p className='totalPrice'>2 700 ₽</p>
                <div class="vl"/>
                <img className='deleteItem cu-p' src="/img/delete_item.svg"/>
            </div>
            <div className='cartItem'>
                <img width={137} height={154} src="/img/turtleneck(BLACK).png"/>
                <div className='itemName'>
                    <p>turtleneck</p>
                    <p>(BLACK)</p>
                </div>
                <div class="vl"/>
                <div className='d-flex size'> 
                    <p>size:</p>
                    <p className='ml-5'>L</p>
                </div>
                <div class="vl"/>
                <p className='priceCount'>2 700 ₽ x 1</p>
                <div class="vl"/>
                <p className='totalPrice'>2 700 ₽</p>
                <div class="vl"/>
                <img className='deleteItem cu-p' src="/img/delete_item.svg"/>
            </div>
            
            <div className='totalPriceCount d-flex'>
                <p>Total:</p>
                <p>5400 ₽</p>
            </div>

            <Link>
                <button className="contact cu-p">
                    Place an order
                </button>
            </Link>

            {/* <div className="cartIsEmpty">
                <img src="/img/cartIsEmpty.png"/>
                <p>Your shopping cart is empty</p>
            </div> */}
        </div>
    );
}

export default Cart;