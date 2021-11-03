import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Form(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  console.log(firstName);
  console.log(lastName);

  return (
    <form className={styles.form}>
      <select className={styles.dropdown}>
        <option disabled>Select a fish</option>
        <option>Leon Machens</option>
        <option>Lara Janzen</option>
      </select>
      <span>- or create a new user -</span>
      <input
        type="text"
        placeholder="Username"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <button className={styles.button} type="submit">
        Log-In
      </button>
    </form>
  );
}
