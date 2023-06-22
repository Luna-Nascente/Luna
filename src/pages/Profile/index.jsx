import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditProfile from '../../components/EditProfile';
import styles from './Profile.module.scss';
import axios from 'axios';

const UserProfile = ({ userData, handleLogout }) => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(userData);

  useEffect(() => {
    setProfileData(userData); // обновляем состояние profileData при изменении userData
  }, [userData]);

  // Получение актуальных данных профиля с сервера
  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`https://localhost:7256/Clients/${userData.client_id}`);
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Возможное редактирование профиля
  const handleEditClick = () => {
    setEditMode(true);
  };

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
            <p className={styles.detail}>Birthday: {isNaN(new Date(profileData.client_birthday)) ? '-' : new Date(profileData.client_birthday).toISOString().slice(0, 10)}</p>

            {editMode ? (
              <EditProfile
                client_id={profileData.client_id}
                client_name={profileData.client_name}
                client_birthday={new Date(profileData.client_birthday).toISOString().slice(0, 10)}
                client_address={profileData.client_address}
                client_email={profileData.client_email}
                client_password={profileData.client_password}
                fetchProfileData={fetchProfileData}
                setEditMode={setEditMode}
              />
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
