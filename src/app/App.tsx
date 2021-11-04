import React, { useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState('');

  console.log(selectedUserName);

  return (
    <main className={styles.container}>
      <div className={styles.login}>
        <Title text="Bergfest" />
        <Form value={selectedUserName} onChange={setSelectedUserName} />
      </div>
    </main>
  );
}

export default App;
