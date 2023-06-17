import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProfile from '../../components/EditProfile';
import styles from './Profile.module.scss';

//client_name, client_birthday, client_address, client_email
const UserProfile = ({ userData, handleLogout  }) => {
  const [editMode, setEditMode] = useState(false);
  
  const handleEditClick = () => {
    setEditMode(true);
  };

  return (
    <div className={styles.user}>
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          <h1>User Profile</h1>
          <Link to="/authorization">
            <button className={styles.logout_button} onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
        <div className={styles.profile_body}>
          <div className={styles.profile_image}>
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className={styles.profile_details}>
            <h2>{userData.client_name}</h2>
            <p className={styles.detail}>Email: {userData.client_email}</p>
            <p className={styles.detail}>Address: {userData.client_address}</p>
            <p className={styles.detail}>Birthday: {userData.client_birthday}</p>

            {editMode ? (
              <EditProfile client_name={userData.client_name} client_birthday={userData.client_birthday} client_address={userData.client_address} client_email={userData.client_email} />
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