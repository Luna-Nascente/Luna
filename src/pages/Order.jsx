import React, { useState } from 'react';

// Массив товаров взять из БД (когда же она уже появится...)
const items = [
    { title: "turtleneck (BLACK)", size: "L", price: 2700, count: 1},
    { title: "bomber jacket (SPRING)", size: "S", price: 4900, count: 2},
];

function Order() {
    const [delivery, setDelivery] = useState('');

    function handleDeliveryChange(event) {
        setDelivery(event.target.value);
    }

    // function showCdekWidget() {
    //     var widget = document.getElementById('cdek-widget');
    //     if (widget) {
    //         widget.style.display = 'block';
    //     }
    // }

    return(
        <div className="order">
            <h1>Оформление заказа</h1>

            {/* method: post */}
            <form action=""> 
                <div class="left-col">
                    <label for="name">Ваше имя:</label>
                    <input type="text" name="name" id="name" required/>

                    <label for="phone">Контактный телефон:</label>
                    <input type="tel" name="phone" id="phone" required/>

                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" required/>

                    <label for="country">Страна:</label>
                    <input type="text" name="country" id="country" required/>

                    <label for="city">Населённый пункт:</label>
                    <input type="text" name="city" id="city" required/>
                    
                    <label>Выберите способ доставки:</label>
                    <div className='d-flex'>
                        <input type="radio" name="delivery" id="courier" value="courier" checked={delivery === "courier"} onChange={handleDeliveryChange} />
                        <label htmlFor="courier">Курьером</label>
                    </div>
                    <div className='d-flex'>
                        <input type="radio" name="delivery" id="sdek" value="sdek" checked={delivery === "sdek"} onChange={handleDeliveryChange} />
                        <label htmlFor="sdek">В пункт выдачи СДЭК</label>
                        {/* <label htmlFor="sdek"><a href="#" onClick={showCdekWidget}>В пункт выдачи СДЭК</a></label>
                        <div id="cdek-widget" data-type="PVZ" data-inpost-id="id_вашего_виджета" style={{ display: 'none' }}/>
                        <script type="text/javascript" src="//widget.cdek.ru/widget/widjet.js"></script> */}
                    </div>  
                    
                    <label for="birthdate">Введите дату рождения:</label>
                    <input type="date" name="birthdate" id="birthdate"/>

                    <label for="payment">Выберите способ оплаты:</label>
                    <select name="payment" id="payment" required>
                        <option value="">-- Выберите способ оплаты --</option>
                        <option value="card">Оплата картой</option>
                        <option value="cash">Оплата наличными</option>
                    </select>

                    <label for="consent"><input type="checkbox" name="consent" id="consent" required/> Я согласен на обработку персональных данных</label>
                </div>
                <div class="right-col">
			        <table>
				        <thead>
					        <tr>
                                <th>Название товара</th>
                                <th>Количество</th>
                                <th>Стоимость</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((obj) => (
                                <tr>
                                    <td>{obj.title} ({obj.size})</td>
                                    <td>{obj.count}</td>
                                    <td>{new Intl.NumberFormat('ru-RU').format(obj.price)} руб.</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div class="order-summary">
                        <p>Сумма по товарам: <strong>3500 руб.</strong></p>
                        <p>Стоимость доставки: <strong>300 руб.</strong></p>
                        <p>Итого: <strong>3800 руб.</strong></p>
                    </div>
                </div>

                <div class="clearfix"></div>

                <button type="submit" className="submit">Оформить заказ</button>
            </form>
        </div>
    );
}

export default Order;