import React from 'react';
import styles from './QuantityButton.module.scss';

function QuantityButton({ quantity, setQuantity, onQuantityChange }) {

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  return (
    <div className={styles.quantityButton}>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default QuantityButton;