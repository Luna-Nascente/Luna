import styles from './CardCart.module.scss'

function CardCart(props){
    return (
        <div className={styles.cartItem}>
            <img alt={props.title} width={137} height={154} src={props.imgURL}/>
            <div className={styles.itemName}>
                <p>{props.title}</p>
            </div>
            <div class={styles.vl}/>
            <p className={styles.size}>size: {props.size}</p>
            <div class={styles.vl}/>
            <p className={styles.priceCount}>{props.price} ₽ x {props.count}</p>
            <div class={styles.vl}/>
            <p className={styles.totalPrice}>{props.total} ₽</p>
            <div class={styles.vl}/>
            <img alt='delete' className={styles.deleteItem} src="/img/delete_item.svg"/>
        </div>
    );
}

export default CardCart;