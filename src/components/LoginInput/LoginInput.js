import React from 'react';
import useInput from '../../hooks/useInput';

export default function LoginInput() {
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
      <button type="submit">Masuk</button>
    </form>
  );
}
