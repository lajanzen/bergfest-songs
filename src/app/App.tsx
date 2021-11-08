import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState('');

  console.log(selectedUserName);

  useEffect(() => {
    document.title = selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest';
  });

  let content;

  if (selectedUserName) {
    content = <p>Please add some songs</p>;
  } else {
    content = <Form value={selectedUserName} onChange={setSelectedUserName} />;
  }

  return (
    <main className={styles.container}>
      <div className={styles.login}>
        <Title
          text={selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest'}
        />
        {content}
      </div>
    </main>
  );
}

export default App;
