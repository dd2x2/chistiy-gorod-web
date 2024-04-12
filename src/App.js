// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContainerList from './ContainerList';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/list" element={<Layout><ContainerList /></Layout>} />
        {}
      </Routes>
    </Router>
  );
}

export default App;