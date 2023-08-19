import './App.css';
import Main from '../src/main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Camera from './Components/Camera';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main></Main>} />
          <Route path="/Camera" element={<Camera/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
