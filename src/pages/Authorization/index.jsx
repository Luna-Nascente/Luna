import React, { useState } from 'react';
import styles from './Authorization.module.scss';

function Authorization() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Добавляем новое состояние "password"
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // submit login or registration form
  };

  return (
    <div className={styles.authorization_page}>
      <div className={styles.auth_form_container}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleAuthSubmit}>
          {!isLogin && (
            <div className={styles.input_container}>
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                value={fullName}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Добавляем поле для пароля */}
          <div className={styles.input_container}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
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
                value={address}
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
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p>
          {isLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register now' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Authorization;