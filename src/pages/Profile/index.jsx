import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import EditProfile from '../../components/EditProfile';
import styles from './Profile.module.scss';

const UserProfile = ({ userData, handleLogout, handleProfileUpdate }) => {
  //const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(userData);

  useEffect(() => {
    setProfileData(userData); // обновляем состояние profileData при изменении userData
  }, [userData]);

  //Возможное редактирование профиля. На сервере отсутствует функция PUT => оставлю до лучших времён
  // const handleEditClick = () => {
  //   setEditMode(true);
  // };

  // const handleSubmit = newData => {
  //   setProfileData(newData);
  //   handleProfileUpdate(newData);
  //   setEditMode(false);
  // };

  return (
    <div className={styles.user}>
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          <h1>User Profile</h1>
          <Link to="/authorization">
            <button className={styles.edit_button} onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
        <div className={styles.profile_body}>
          {/* <div className={styles.profile_image}>
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div> */ // Тут должна быть аватарка, но с нынешней базой данных реализовать невозможно
          } 
          <div className={styles.profile_details}>
            <h2>{profileData.client_name}</h2>
            <p className={styles.detail}>Email: {profileData.client_email}</p>
            <p className={styles.detail}>Address: {profileData.client_address}</p>
            <p className={styles.detail}>Birthday: {new Date(profileData.client_birthday).toISOString().slice(0, 10)}</p>

            {/* {editMode ? (
              <EditProfile
                client_id={profileData.client_id}
                client_name={profileData.client_name}
                client_birthday={new Date(profileData.client_birthday).toISOString().slice(0, 10)}
                client_address={profileData.client_address}
                client_email={profileData.client_email}
                handleSubmit={handleSubmit}
              />
            ) : (
              <button className={styles.edit_button} onClick={handleEditClick}>
                Edit Profile
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
