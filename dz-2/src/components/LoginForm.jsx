import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <label>
        Логін:
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <br />
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button
        onClick={() => onLogin(login, password)}
        disabled={login.trim() === '' || password.trim() === '' || login.length < 3 || password.length < 7}
      >
        Увійти
      </button>
    </div>
  );
};

export default LoginForm;

