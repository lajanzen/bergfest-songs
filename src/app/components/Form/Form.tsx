import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select className={styles.dropdown}>
        <option disabled>Select a fish</option>
        <option>Leon Machens</option>
        <option>Lara Janzen</option>
      </select>
      <span>- or create a new user -</span>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <button className={styles.button} type="submit">
        Log-In
      </button>
    </form>
  );
}
