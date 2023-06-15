import axios from 'axios';
import styles from './CardCart.module.scss'

function CardCart({id, title, imgURL, size, price, count, total, cartItems, favorite, onItemDelete}){

    const handleDeleteClick = () => {
        axios.delete(`https://647b1df4d2e5b6101db0e241.mockapi.io/cart/${id}`)
          .then(response => {
            console.log('Item successfully deleted', response.data);
            onItemDelete(id); // вызываем функцию onItemDelete, передавая ей id удаленного элемента
          })
          .catch(error => {
            console.error('Error deleting item', error);
          });
    };

    return (
        <div className={styles.cartItem}>
            <img alt={title} width={137} height={154} src={imgURL}/>
            <div className={styles.itemName}>
                <p>{title}</p>
            </div>
            <div class={styles.vl}/>
            <p className={styles.size}>size: {size}</p>
            <div class={styles.vl}/>
            <p className={styles.priceCount}>{new Intl.NumberFormat('ru-RU').format(price)} ₽ x {count}</p>
            <div class={styles.vl}/>
            <p className={styles.totalPrice}>{new Intl.NumberFormat('ru-RU').format(total)} ₽</p>
            <div class={styles.vl}/>
            <img alt='delete' className={styles.deleteItem} src="/img/delete_item.svg" onClick={handleDeleteClick}/>
        </div>
    );
}

export default CardCart;