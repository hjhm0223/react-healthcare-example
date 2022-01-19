import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Main from './components/layout/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/main" exact element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
