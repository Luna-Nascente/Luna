import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Authorization.module.scss';
import Profile from '../../pages/Profile';

function Authorization() {
  const [isLogin, setIsLogin] = useState(true);
  const [client_name, setFullName] = useState('');
  const [client_email, setEmail] = useState('');
  const [client_password, setPassword] = useState('');
  const [client_address, setAddress] = useState('');
  const [client_birthday, setDob] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`https://localhost:7256/Clients?id=${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
      setError('Failed to fetch user data');
    }
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isLogin) {
        const newUser = {
          client_name,
          client_email,
          client_password,
          client_address,
          client_birthday
        };
        const registrationResponse = await axios.post('https://localhost:7256/Clients', newUser);

        if (registrationResponse.status === 200) {
          setUserData(newUser);
          const userId = registrationResponse.data.client_id;
          localStorage.setItem('userData', JSON.stringify(newUser));
          fetchUserData(userId);
        } else {
          setError('Registration failed');
        }
      } else {
        const response = await axios.get('https://localhost:7256/Clients');

        const user = response.data.find(
          (user) => user.client_email === client_email && user.client_password === client_password
        );
        
        if (user) {
          setUserData(user);
          const userId = user.client_id;
          localStorage.setItem('userData', JSON.stringify(user));
          fetchUserData(userId);
        } else {
          setError('Invalid email or password');
        }
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred');
    }
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('userData');
    window.location.reload();
  };

  if (userData !== null && userData !== undefined) {
    return <Profile userData={userData} handleLogout={handleLogout} />;
  }

  return (
    <div className={styles.authorization_page}>
      <div className={styles.auth_form_container}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {error && <p className={styles.error_message}>{error}</p>}
        <form onSubmit={handleAuthSubmit}>
          {!isLogin && (
            <div className={styles.input_container}>
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                value={client_name}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          )}
          <div className={styles.input_container}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={client_email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={client_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className={styles.input_container}>
              <label htmlFor="address">Residential Address</label>
              <input
                type="text"
                id="address"
                value={client_address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          )}
          {!isLogin && (
            <div className={styles.input_container}>
              <label htmlFor="dob">Date of Birth (Optional)</label>
              <input
                type="date"
                id="dob"
                value={client_birthday}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          )}
          <button type="submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register now' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Authorization;