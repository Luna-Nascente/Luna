import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';
import axios from 'axios';

function Order() {
    const [orderItems, setOrderItems] = useState([]);
    const [deliveryMethod, setDeliveryMethod] = useState('courier');
    const [pointsOfDelivery, setPointsOfDelivery] = useState([]);
    const [selectedPointOfDelivery, setSelectedPointOfDelivery] = useState(3);

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

        const fetchPointsOfDelivery = async () => {
            try {
              const response = await axios.get('https://localhost:7256/Points_of_delivery');
              setPointsOfDelivery(response.data);
            } catch (error) {
              console.log(error);
            }
          };
          fetchPointsOfDelivery();
    }, []);

    function handleDeliveryMethodChange(event) {
        setDeliveryMethod(event.target.value);
    }
    
      function handlePointOfDeliveryChange(event) {
        setSelectedPointOfDelivery(event.target.value);
    }
    
        const total = orderItems.reduce((acc, item) => acc + item.product_price * item.product_count, 0);
        const deliveryPrice = deliveryMethod === 'courier' ? 400 : 0;
    
    function handleSubmit(event) {
        event.preventDefault();
    
        const data = {
          order_date: new Date().toISOString().slice(0, 10),
          client_id: 1,
          total_price: total + deliveryPrice,
          point_of_delivery_address: selectedPointOfDelivery,
          order_status: 'new'
        };
    
        axios.post('https://localhost:7256/Orders', data)
          .then(response => {
            console.log(response.data);
            // очистить корзину или перенаправить пользователя на страницу подтверждения заказа
          })
          .catch(error => {
            console.log(error);
          });
    }

    return(
        <div className={styles.order}>
            <h1>Ordering</h1>

            <form onSubmit={handleSubmit}> 
                <div class={styles.left_col}>
                    <label for="name">Your name:</label>
                    <input type="text" name="name" id="name" required/>

                    <label for="phone">Contact phone number:</label>
                    <input type="tel" name="phone" id="phone" required/>

                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" required/>
                    
                    <label>Select your delivery method:</label>
                    <div className={styles.delivery}>
                        <div className='d-flex'>
                        <input className='delivery' type="radio" name="delivery" id="courier" value="courier" checked={deliveryMethod === "courier"} onChange={handleDeliveryMethodChange} />
                        <label className="delivery" htmlFor="courier"><p>By courier ({deliveryPrice} rub.)</p></label>
                        </div>
                        <div className='d-flex'>
                        <input type="radio" name="delivery" id="sdek" value="sdek" checked={deliveryMethod === "sdek"} onChange={handleDeliveryMethodChange} />
                        <label htmlFor="sdek"><p>To the pickup point</p></label>
                        </div>
                    </div>

                    {deliveryMethod === 'courier' ? (
                        <div className={styles.delivery_address}>
                        <label htmlFor="delivery_address">Delivery address:</label>
                        <input type="text" name="delivery_address" id="delivery_address" required />
                        </div>
                    ) : (
                        <div className={styles.point_of_delivery}>
                        <label htmlFor="point_of_delivery">Select a pickup point:</label>
                        <select name="point_of_delivery" id="point_of_delivery" value={selectedPointOfDelivery} onChange={handlePointOfDeliveryChange} required>
                            <option value="">-- Select a pickup point --</option>
                            {pointsOfDelivery.map(point => (
                                <option key={point.point_of_delivery_id} 
                                value={point.point_of_delivery_address}>
                                    {point.point_of_delivery_address}</option>
                            ))}
                        </select>
                        </div>
                    )}
                    
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