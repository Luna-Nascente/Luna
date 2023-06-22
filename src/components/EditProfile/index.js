import React, { useState } from 'react';
import axios from 'axios';
import styles from './EditProfile.module.scss';

const EditProfile = ({ client_id, client_name, client_password, client_birthday, client_address, client_email, fetchProfileData, setEditMode }) => {
  const [name, setName] = useState(client_name);
  const [birthday, setBirthday] = useState(client_birthday);
  const [address, setAddress] = useState(client_address);
  //const [email, setEmail] = useState(client_email);

  const handleSubmitClick = async () => {
    const newData = {
      client_id: client_id,
      client_name: name,
      client_birthday: isNaN(new Date(birthday)) ? '-' : new Date(birthday).toISOString().slice(0, 10),
      client_address: address,
      client_email,
      client_password: client_password
    };
    try {
      console.log(client_id);
      console.log(name);
      console.log(isNaN(new Date(birthday)) ? '-' : new Date(birthday).toISOString().slice(0, 10));
      console.log(address);
      await axios.put(`https://localhost:7256/Clients/${client_id}`, newData); // отправка запроса на сервер
      alert('Профиль успешно обновлен');
      fetchProfileData();
      setEditMode(false);
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
      {/* <div className={styles.field}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div> */}
      <button type='submit' className={styles.button} onClick={handleSubmitClick}>Save Changes</button>
    </div>
  );
};

export default EditProfile;

