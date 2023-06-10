import React from 'react';
import styles from './EditProfile.module.scss';

const EditProfile = ({fullName, birthday, address, email}) => {
  return (
    <div className={styles.edit}>
      <form>
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full-name" defaultValue={fullName} />

        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" defaultValue={birthday} />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" defaultValue={address} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" defaultValue={email} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;