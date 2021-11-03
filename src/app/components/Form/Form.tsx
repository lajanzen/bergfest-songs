import React from 'react';
import styles from './Form.module.css';

export default function Form(): JSX.Element {
  return (
    <form className={styles.form}>
      <select className={styles.dropdown}>
        <option disabled>Select a fish</option>
        <option>Leon Machens</option>
        <option>Lara Janzen</option>
      </select>
      <span>- or create a new user -</span>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button className={styles.button} type="submit">
        Log-In
      </button>
    </form>
  );
}
