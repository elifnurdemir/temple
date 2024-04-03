import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Login from './components/pages/login';
import Landing from './components/pages/landing';
import Template from './components/pages/template';
import AnimatedCursor from "react-animated-cursor";
import Dashboard from './components/pages/dashboard';
import Createtemplate from './components/pages/createTemplate'; // Düzeltildi

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#7d8dff'
        }}
        outerStyle={{
          border: '3px solid #ea60d5'
        }}
      />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/template" element={<Template />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/createTemplate" element={<Createtemplate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
