import React, { useEffect, useState } from 'react';

function ContainerList() {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/containers')
      .then(response => response.json())
      .then(data => setContainers(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#FFFFFF',
      backgroundColor: '#76b852',
      padding: '20px',
      borderRadius: '10px',
      margin: '20px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#34495e',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    }
  };

  return (
    <div style={styles.container}>
      <h2>Список контейнеров</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Тип мусора</th>
            <th style={styles.th}>Объём</th>
            <th style={styles.th}>Местоположение</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container, index) => (
            <tr key={index}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{container.type}</td>
              <td style={styles.td}>{container.volume}</td>
              <td style={styles.td}>{container.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContainerList;