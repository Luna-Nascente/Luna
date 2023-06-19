import axios from 'axios';
import styles from './CardCart.module.scss';

function CardCart({ shopping_cart_id, product_name, product_image, product_size, product_price, product_count, total, onItemDelete }) {
  
  const handleDeleteClick = () => {
    axios.delete(`https://localhost:7256/Shopping_cart/${shopping_cart_id}`)
      .then(response => {
        window.dispatchEvent(new Event('cartUpdate'));
        console.log('Item successfully deleted', response.data);
        onItemDelete(shopping_cart_id);
      })
      .catch(error => {
        console.error('Error deleting item', error);
      });
  };

  return (
    <div className={styles.cartItem}>
      <img alt={shopping_cart_id} width={137} height={154} src={product_image} />
      <div className={styles.itemName}>
        <p>{product_name}</p>
      </div>
      <div className={styles.vl} />
      <p className={styles.size}>size: {product_size}</p>
      <div className={styles.vl} />
      <p className={styles.priceCount}>{new Intl.NumberFormat('ru-RU').format(product_price)} ₽ x {product_count}</p>
      <div className={styles.vl} />
      <p className={styles.totalPrice}>{new Intl.NumberFormat('ru-RU').format(total)} ₽</p>
      <div className={styles.vl} />
      <img alt='delete' className={styles.deleteItem} src="/img/delete_item.svg" onClick={handleDeleteClick} />
    </div>
  );
}

export default CardCart;
