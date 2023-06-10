import React, { useState } from 'react';
import EditProfile from '../../components/EditProfile';
import styles from './Profile.module.scss';

// // Массив товаров взять из БД 
// // Пока понятия не имею, как подключить
// const items = [
//   { id: "123", fullName: "А.Д.Плаксин", birthday: "09.03.2003", address: "str.Pushkino, Kolotushkino (10)", email: "valera@gmail.com" }
// ];

const UserProfile = ({ id, fullName, birthday, address, email }) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  return (
    <div className={styles.user}>
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          <h1>User Profile</h1>
          <p>ID: {id}</p>
        </div>
        <div className={styles.profile_body}>
          <div className={styles.profile_image}>
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className={styles.profile_details}>
            <h2>{fullName}</h2>
            <p className={styles.detail}>Email: {email}</p>
            <p className={styles.detail}>Address: {address}</p>
            <p className={styles.detail}>Birthday: {birthday}</p>

            {editMode ? (
              <EditProfile fullName={fullName} birthday={birthday} address={address} email={email} />
            ) : (
              <button className={styles.edit_button} onClick={handleEditClick}>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;