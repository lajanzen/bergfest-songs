import React from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div className={styles.login}>
        <Title text="Bergfest" />
        <Form />
      </div>
    </main>
  );
}

export default App;
