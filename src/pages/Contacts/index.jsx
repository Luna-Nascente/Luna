import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => (
  <div className={styles.contact}>
    <div className={styles.contact_page}>
      <div className={styles.contact_info}>
        <h2>Contact Information</h2>
        <p><strong>Owner:</strong> Plaksin Artem</p>
        <p><strong>Email:</strong> mr.2003.artem@gmail.com</p>
        <p><strong>Phone:</strong> +7 (977) 735-84-00</p>
        <br/>
        <p>Open stores and pickup points for couriers:</p>
        <br/>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Москва
          </a>
          <a
            href="https://yandex.ru/maps/213/moscow/?ll=37.625991%2C55.737745&mode=usermaps&source=constructorLink&um=constructor%3A356c8912742b5c79e431ac84e051c04f425dab95fb0d2843cab7a960b0a8a81c&utm_medium=mapframe&utm_source=maps&z=11"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Яндекс Карты — транспорт, навигация, поиск мест
          </a>
          <iframe
            title='Ymap'
            src="https://yandex.ru/map-widget/v1/?ll=37.625991%2C55.737745&mode=usermaps&source=constructorLink&um=constructor%3A356c8912742b5c79e431ac84e051c04f425dab95fb0d2843cab7a960b0a8a81c&z=11"
            width="560"
            height="560"
            frameBorder="0"
            allowFullScreen={true}
            style={{ position: 'relative' }}>
          </iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;