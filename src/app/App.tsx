import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';

function App(): JSX.Element {
  const [selectedUserName, setSelectedUserName] = useState(
    localStorage.getItem('selectedUserName')
  );

  useEffect(() => {
    if (selectedUserName) {
      localStorage.setItem('selectedUserName', selectedUserName);
    }
  }, [selectedUserName]);

  useEffect(() => {
    document.title = selectedUserName ? `Hi ${selectedUserName}` : 'Bergfest';
  });

  let content;

  if (selectedUserName) {
    content = (
      <div>
        <p>Please add some songs</p>
        <button
          onClick={() => {
            localStorage.removeItem('selectedUserName');
            window.location.reload();
          }}
        >
          LogOut
        </button>
      </div>
    );
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
