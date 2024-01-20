import React, { useState } from 'react';

const PasswordConfirm = ({ min }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, confirmPassword);
  };

  const handleChangeConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePassword(password, newConfirmPassword);
  };

  const validatePassword = (newPassword, newConfirmPassword) => {
    const isPasswordValid = /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) && /\d/.test(newPassword);
    const isConfirmPasswordValid = /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) && /\d/.test(newPassword);

    if (newPassword.length < min && newConfirmPassword.length < min) {
      setError(`Мінімальна довжина пароля повинна бути не менше ${min} символів`);
    } else if (!isPasswordValid) {
      setError('Пароль повинен містити малі та великі літери та цифри');
    } else if (!isConfirmPasswordValid) {
      setError('Пароль повинен містити малі та великі літери та цифри');
    }
    else {
      setError('')
    }
  }

  return (
    <div>
      <label>
        Пароль:
        <input type="password" value={password} onChange={handleChangePassword} />
      </label>
      <br />
      <label>
        Підтвердити пароль:
        <input type="confirmPassword" value={confirmPassword} onChange={handleChangeConfirmPassword} />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PasswordConfirm;