// Layout.js
import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#76b852',
    color: '#FFFFFF',
    padding: '20px',
  },
  logo: {
    marginLeft: '20px',
    fontSize: '24px',
  },
  nav: {
    display: 'flex',
    marginRight: '20px',
  },
  button: {
    margin: '0 10px',
    backgroundColor: '#34495e',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#76b852',
    color: '#FFFFFF',
    padding: '20px 0',
    textAlign: 'center',
  },
};

function Layout({ children }) {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>Чистый город</div>
        <nav style={styles.nav}>
          <button style={styles.button}>О проекте</button>
          <button style={styles.button}>Как это работает?</button>
          <button style={styles.button}>Контакты</button>
          <button style={{...styles.button, marginRight: '0'}}>Войти</button>
        </nav>
      </header>
      <main style={{ flex: '1' }}>{children}</main>
      <footer style={styles.footer}>
        <p>Краткая информация о проекте. Ссылки на соцсети.</p>
      </footer>
    </div>
  );
}

export default Layout;