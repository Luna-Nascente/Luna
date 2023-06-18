import React from 'react'
import axios from 'axios';
import styles from './CardProducts.module.scss'
import QuantityButton from '../QuantityButton';

function CardProducts({product_id, product_name, product_count, product_price, product_size, product_image, onFavorite, onClickBuy, favorite, onRemove}){
    const [quantity, setQuantity] = React.useState(1);  //кол-во взять из бд, и перенести в родительский файл
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [selectedSize, setSelectedSize] = React.useState('S(44)');

    const onClickFavorite = () => {
        const updatedFavorite = !isFavorite;
        setIsFavorite(updatedFavorite);
        if (updatedFavorite) {
            onFavorite({
                product_id: product_id, 
                product_name, 
                product_price, 
                product_size, 
                product_image
            });
        } else {
            onRemove(product_id);
        }
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };
  
    const onAddToCart = () => {
        if (quantity > 0) {
          const newItem = {
            product_id: product_id,
            product_name: product_name,
            product_size: selectedSize,
            product_price: product_price,
            product_count: quantity,
            product_image: product_image
          };
          
          axios.get('https://647b1df4d2e5b6101db0e241.mockapi.io/cart')
            .then(response => {
                const cartItems = response.data;
                const existingItem = cartItems.find(item => Number(item.product_id) === Number(product_id) && item.product_size === newItem.product_size);

                if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    product_count: existingItem.product_count + quantity
                };

                axios.put(`https://647b1df4d2e5b6101db0e241.mockapi.io/cart/${existingItem.product_id}`, updatedItem);
                } else {
                    axios.post("https://647b1df4d2e5b6101db0e241.mockapi.io/cart", newItem)
                    .then((response) => {
                      window.dispatchEvent(new Event('cartUpdate'));
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
            });
          
          setQuantity(1);
        }
    };

    const handleAddToCart = () => {
        if(quantity > 0) {
          onAddToCart();
        }
        setQuantity(1);
    };

    return (
        <div className={styles.card}>
            <img
            width={320}
            height={360}
            alt={product_name}
            src={product_image}
            />
            <div className={styles.MiniDecription}>
                <p className={styles.viewThis}>view this &gt;</p>
                <div className="justify-between">
                    <p className={styles.name}>{product_name}</p>
                    <div className={styles.info}>
                        <div className="d-flex justify-between">
                            <p className={styles.price}> {new Intl.NumberFormat('ru-RU').format(product_price)} ₽</p>
                                <select className={styles.size} onChange={(event) => setSelectedSize(event.target.value)}>
                                    <option>S(44)</option>
                                    <option>M(46)</option>
                                    <option>L(48)</option>
                                    <option>XL(50)</option>
                                    <option>XXL(52)</option>
                                </select>
                        </div>
                        <div className={styles.flexWrapper}>
                            <div>
                                <QuantityButton quantity={quantity} setQuantity={setQuantity} onQuantityChange={handleQuantityChange} />
                                <button className={styles.buyButton} onClick={handleAddToCart}>
                                    {quantity > 0 ? <span className={styles.quantity}>add to cart: {quantity}</span> : <p className={styles.addToCart}>add to cart</p>}
                                </button>
                            </div>
                            <img 
                                alt="like" 
                                src={isFavorite ? "/img/Like(clicked).svg" : "/img/Like.svg"} 
                                onClick={onClickFavorite}
                                className={styles.like}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProducts;