import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';
import axios from 'axios';

function Order() {
    const [orderItems, setOrderItems] = useState([]);
    const [delivery, setDelivery] = useState(''); //выбор доставки пока не реализован

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
            
            setOrderItems(updatedItems);
          } catch (error) {
            console.log(error);
          }
        };
        fetchCartItems();
    }, []);

    function handleDeliveryChange(event) {
        setDelivery(event.target.value);
    }

    const total = orderItems.reduce((acc, item) => acc + item.product_price * item.product_count, 0);
    const deliveryPrice = 400;

    // function showCdekWidget() {
    //     var widget = document.getElementById('cdek-widget');
    //     if (widget) {
    //         widget.style.display = 'block';
    //     }
    // }

    return(
        <div className={styles.order}>
            <h1>Ordering</h1>

            {/* method: post */}
            <form action=""> 
                <div class={styles.left_col}>
                    <label for="name">Your name:</label>
                    <input type="text" name="name" id="name" required/>

                    <label for="phone">Contact phone number:</label>
                    <input type="tel" name="phone" id="phone" required/>

                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" required/>

                    <label for="country">Country:</label>
                    <input type="text" name="country" id="country" required/>

                    <label for="city">Settlement:</label>
                    <input type="text" name="city" id="city" required/>
                    
                    <label>Select your delivery method:</label>
                    <div className={styles.delivery}>
                        <div className='d-flex'>
                            <input className='delivery' type="radio" name="delivery" id="courier" value="courier" checked={delivery === "courier"} onChange={handleDeliveryChange} />
                            <label className="delivery" htmlFor="courier"><p>By courier ({deliveryPrice} rub.)</p></label>
                        </div>
                        <div className='d-flex'>
                            <input type="radio" name="delivery" id="sdek" value="sdek" checked={delivery === "sdek"} onChange={handleDeliveryChange} />
                            <label htmlFor="sdek"><p>To the SDEK pickup point</p></label>
                            {/* <label htmlFor="sdek"><a href="#" onClick={showCdekWidget}>В пункт выдачи СДЭК</a></label>
                            <div id="cdek-widget" data-type="PVZ" data-inpost-id="id_вашего_виджета" style={{ display: 'none' }}/>
                            <script type="text/javascript" src="//widget.cdek.ru/widget/widjet.js"></script> */}
                        </div>  
                    </div>
                    
                    <label for="birthdate">Enter your date of birth:</label>
                    <input type="date" name="birthdate" id="birthdate"/>

                    <label for="payment">Select a payment method:</label>
                    <select name="payment" id="payment" required>
                        <option value="">-- Select payment method --</option>
                        <option value="card">Pay by card</option>
                        <option value="cash">Cash</option>
                    </select>

                    <label for="consent"><input type="checkbox" name="consent" id="consent" required/> I agree to the processing of personal data</label>
                </div>
                <div class={styles.right_col}>
			        <table>
				        <thead>
					        <tr>
                                <th>Product name</th>
                                <th>Quantity</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item) => (
                                <tr>
                                    <td>{item.product_name} ({item.product_size})</td>
                                    <td>{item.product_count}</td>
                                    <td>{Intl.NumberFormat('ru-RU').format(item.product_price * item.product_count)} rub.</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className={styles.order_summary}>
                        <p>The amount by goods: <strong>{new Intl.NumberFormat('ru-RU').format(total)} rub.</strong></p>
                        <p>Delivery cost: <strong>{deliveryPrice} rub.</strong></p>
                        <p>Total: <strong>{new Intl.NumberFormat('ru-RU').format(total + deliveryPrice)} rub.</strong></p>
                    </div>
                </div>

                <div class={styles.clearfix}></div>

                <button type="submit" className={styles.submit}>Place an order</button>
            </form>
        </div>
    );
}

export default Order;