import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Login from './components/pages/login';
import Landing from './components/pages/landing';
import Template from './components/pages/template';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
