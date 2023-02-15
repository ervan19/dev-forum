import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function LoginInput({ login }) {
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();
  return (
    <form>
      <label htmlFor="email">
        Email
        <input type="email" value={email} onChange={setEmail} required />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          value={password}
          onChange={setPassword}
          required
        />
      </label>
      <button
        type="button"
        className="btn"
        onClick={() => login({ email, password })}
      >
        Masuk
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
