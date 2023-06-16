import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Authorization.module.scss';

function Authorization() {
  const [isLogin, setIsLogin] = useState(true);
  const [client_name, setFullName] = useState('');
  const [client_email, setEmail] = useState('');
  const [client_password, setPassword] = useState('');
  const [client_address, setAddress] = useState('');
  const [client_birthday, setDob] = useState('');
  const [error, setError] = useState('');

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!isLogin) {
        // Создаем нового пользователя
        const newUser = {
          client_name,
          client_email,
          client_password,
          client_address,
          client_birthday
        };
  
        // Проверяем, что пользователя с таким email нет в базе данных
        const checkUserResponse = await axios.get('https://localhost:7256/Clients');
        const existingUser = checkUserResponse.data.find((user) => user.client_email === client_email);
  
        if (existingUser) {
          setError('User with this email already exists');
          return;
        }
  
        // Регистрируем нового пользователя
        const registrationResponse = await axios.post('https://localhost:7256/Clients', newUser);
  
        // Проверяем, что регистрация выполнена успешно
        if (registrationResponse.status === 200) {
          // Регистрация успешно выполнена, выполните необходимые действия, например, перенаправление на страницу профиля
          window.location.href = '/profile';
        } else {
          setError('Registration failed');
        }
      } else {
        // Логин
        const response = await axios.get('https://localhost:7256/Clients');
  
        // Ищем пользователя с указанным email и паролем
        const user = response.data.find((user) => user.client_email === client_email && user.client_password === client_password);
  
        if (user) {
          // Пользователь существует и пароль верен, выполните необходимые действия, например, перенаправление на страницу профиля
          window.location.href = '/profile';
        } else {
          setError('Invalid email or password');
        }
      }
    } catch (error) {
      console.log(error); // Выводим ошибку в консоль для отладки
      setError('An error occurred');
    }
  };

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
