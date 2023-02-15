import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

export default function Registernput({ register }) {
  const [name, setName] = useInput();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  return (
    <form>
      <label htmlFor="name">
        Name
        <input type="name" value={name} onChange={setName} required />
      </label>
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
      <button type="button" onClick={() => register({ name, email, password })}>
        Masuk
      </button>
    </form>
  );
}

Registernput.propTypes = {
  register: PropTypes.func.isRequired,
};
