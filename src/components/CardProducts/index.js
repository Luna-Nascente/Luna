import React from 'react'
import axios from 'axios';
import styles from './CardProducts.module.scss'
import QuantityButton from '../QuantityButton';

function CardProducts({key, id, title, price, size, imgURL, onFavorite, onClickBuy, favorite, onRemove}){
    const [quantity, setQuantity] = React.useState(1);  //кол-во взять из бд, и перенести в родительский файл
    const [isFavorite, setIsFavorite] = React.useState(favorite);
    const [selectedSize, setSelectedSize] = React.useState('S(44)');

    const onClickFavorite = () => {
        const updatedFavorite = !isFavorite;
        setIsFavorite(updatedFavorite);
        if (updatedFavorite) {
            onFavorite({
                key,
                id: id, 
                title, 
                price, 
                size, 
                imgURL, 
                favorite: true});
        } else {
            onRemove(key);
        }
        axios.put(`https://647b1df4d2e5b6101db0e241.mockapi.io/products/${id}`, {favorite: updatedFavorite})
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };
  
    const onAddToCart = () => {
        if (quantity > 0) {
          const newItem = {
            key,
            id: id,
            title: title,
            size: selectedSize,
            price: price,
            count: quantity,
            imgURL: imgURL
          };
          
          axios.get('https://647b1df4d2e5b6101db0e241.mockapi.io/cart')
            .then(response => {
                const cartItems = response.data;
                const existingItem = cartItems.find(item => Number(item.id) === Number(id) && item.size === newItem.size);

                if (existingItem) {
                // If item already exists in cart with the same size, increase the quantity of the existing item
                const updatedItem = {
                    ...existingItem,
                    count: existingItem.count + quantity
                };

                axios.put(`https://647b1df4d2e5b6101db0e241.mockapi.io/cart/${existingItem.id}`, updatedItem);
                } else {
                // If item is not in cart or has a different size, add new item to cart
                axios.post('https://647b1df4d2e5b6101db0e241.mockapi.io/cart', newItem);
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
            alt={title}
            src={imgURL}
            />
            <div className={styles.MiniDecription}>
                <p className={styles.viewThis}>view this &gt;</p>
                <div className="justify-between">
                    <p className={styles.name}>{title}</p>
                    <div className={styles.info}>
                        <div className="d-flex justify-between">
                            <p className={styles.price}> {new Intl.NumberFormat('ru-RU').format(price)} ₽</p>
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
                                <QuantityButton onQuantityChange={handleQuantityChange} />
                                <button className={styles.buyButton} onClick={handleAddToCart}>
                                    {quantity > 1 ? <span className={styles.quantity}>add to cart: {quantity}</span> : <p className={styles.addToCart}>add to cart</p>}
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