import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import PatientInfo from './pages/PatientInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/patient-info" exact element={<PatientInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
