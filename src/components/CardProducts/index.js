import styles from './CardProducts.module.scss'

function CardProducts(props){
    return (
        <div className={styles.card}>
            <img
            width={320}
            height={360}
            alt={props.title}
            src={props.imgURL}
            />
            <div className={styles.MiniDecription}>
                <p className={styles.viewThis}>view this &gt;</p>
                <div className="justify-between">
                    <div>
                        <p className={styles.name}>{props.title}</p>
                    </div>
                    <div className="d-flex justify-between">
                        <p className={styles.price}>{props.price} ₽</p>
                            <select className={styles.size}>
                                <option>S(44)</option>
                                <option>M(46)</option>
                                <option>L(48)</option>
                                <option>XL(50)</option>
                                <option>XXL(52)</option>
                            </select>
                    </div>
                    <div className={styles.flexWrapper}>
                        <button className={styles.buyButton}>
                            <p className={styles.addToCart}>add to cart</p>
                        </button>
                        <img 
                            alt="like" 
                            src={"/img/Like.svg"} 
                            onClick={props.onClick} 
                            className={styles.like}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProducts;