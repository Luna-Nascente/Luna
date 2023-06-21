//Данная функция прописана, однако нет возможности её реализовать.
//TODO: Необходимо добавить функцию PUT на сервер

import React, { useState } from 'react';
import axios from 'axios';
import styles from './EditProfile.module.scss';

const EditProfile = ({ client_id, client_name, client_birthday, client_address, client_email, handleSubmit }) => {
  const [name, setName] = useState(client_name);
  const [birthday, setBirthday] = useState(client_birthday);
  const [address, setAddress] = useState(client_address);
  const [email, setEmail] = useState(client_email);

  const handleSubmitClick = async () => {
    const newData = {
      client_id: client_id,
      client_name: client_name,
      client_birthday: new Date(client_birthday).toISOString().slice(0, 10),
      client_address: client_address,
      client_email: client_email,
    };
    try {
      console.log(client_id);
      console.log(name);
      console.log(new Date(birthday).toISOString().slice(0, 10));
      console.log(address);
      console.log(email);
      await axios.put(`https://localhost:7256/Clients/${client_id}`, newData); // отправка запроса на сервер
      alert('Профиль успешно обновлен');
    } catch (error) {
      console.error(error);
      alert('Ошибка при обновлении профиля');
    }
  };

  return (
    <div className={styles.edit}>
      <h3>Edit Profile</h3>
      <div className={styles.field}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <button type='submit' className={styles.button} onClick={handleSubmitClick}>Save Changes</button>
    </div>
  );
};

export default EditProfile;

