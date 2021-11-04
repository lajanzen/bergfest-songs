import React, { useState } from 'react';
import styles from './Form.module.css';

type FormProps = {
  value: string;
  onChange: (value: string) => void;
};

type User = {
  firstName: string;
  lastName: string;
};

export default function Form({ onChange }: FormProps): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  // const [selectedUser, setSelectedUser] = useState('');

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

  async function handleSelectClick() {
    const response = await fetch('https://json-server.machens.dev/users');
    const newUsers = await response.json();
    setUsers(newUsers);
  }

  const userOptions = users.map((user) => (
    <option>
      {user.firstName} {user.lastName}
    </option>
  ));

  // function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   setSelectedUser(event.target.value);
  // }

  // console.log(selectedUser);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select
        className={styles.dropdown}
        onClick={handleSelectClick}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled>Select a fish</option>
        {userOptions}
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
