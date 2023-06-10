import React from 'react'
import styles from './CardFavorites.module.scss'
import QuantityButton from '../QuantityButton';

function CardFavorites({title, price, size, imgURL, onFavorite, onClickBuy, favorite, onRemove}){
    const [quantity, setQuantity] = React.useState(1); // здесь храним количество выбранных товаров
    const [isFavorite, setIsFavorite] = React.useState(true);

    const onClickFavorite = () => {
        if(isFavorite === false){
            onFavorite({title, price, size, imgURL, favorite: false});
            setIsFavorite(!isFavorite);
        } else {
            onRemove();
        }
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
      };
  
      const handleAddToCart = () => {
        if(quantity > 0) {
          // добавить товар в корзину
        }
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
                            <p className={styles.price}>{price} ₽</p>
                                <select className={styles.size}>
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

export default CardFavorites;