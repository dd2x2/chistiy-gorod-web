import React from 'react';

function HomePage() {
  const styles = {
    main: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        color: '#FFFFFF',
        backgroundImage: 'url("https://img.freepik.com/free-photo/selective-closeup-shot-green-swiss-cheese-monstera-leaf_181624-18021.jpg?t=st=1712950854~exp=1712954454~hmac=915b24d2120e450cf734f20e7a7b6a2637f38e8224bfb9d64f4aec1e118b398c&w=1380")',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      },
      glassmorphismStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      },
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

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <div style={styles.glassmorphismStyle}>
            <h2>Давайте делать наш город чище вместе!</h2>
            <p>Присоединяйтесь к инициативе по улучшению экологии нашего города.</p>
        </div>
        <div>
          <button style={styles.button}>Стать волонтером</button>
          <button style={styles.button}>Пожертвовать</button>
          <button style={styles.button}>Сообщить о проблеме</button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;