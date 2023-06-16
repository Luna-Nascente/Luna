import axios from 'axios';
import styles from './CardCart.module.scss'

function CardCart({key, product_id, product_name, product_image, product_size, product_price, product_count, total, cartItems, favorite, onItemDelete}){

    const handleDeleteClick = () => {
        axios.delete(`https://647b1df4d2e5b6101db0e241.mockapi.io/cart/${product_id}`)
          .then(response => {
            console.log('Item successfully deleted', response.data);
            onItemDelete(product_id); // вызываем функцию onItemDelete, передавая ей id удаленного элемента
          })
          .catch(error => {
            console.error('Error deleting item', error);
          });
    };

    return (
        <div className={styles.cartItem}>
            <img alt={product_id} width={137} height={154} src={product_image}/>
            <div className={styles.itemName}>
                <p>{product_name}</p>
            </div>
            <div class={styles.vl}/>
            <p className={styles.size}>size: {product_size}</p>
            <div class={styles.vl}/>
            <p className={styles.priceCount}>{new Intl.NumberFormat('ru-RU').format(product_price)} ₽ x {product_count}</p>
            <div class={styles.vl}/>
            <p className={styles.totalPrice}>{new Intl.NumberFormat('ru-RU').format(total)} ₽</p>
            <div class={styles.vl}/>
            <img alt='delete' className={styles.deleteItem} src="/img/delete_item.svg" onClick={handleDeleteClick}/>
        </div>
    );
}

export default CardCart;