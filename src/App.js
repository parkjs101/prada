import './App.css';
import Main from '../src/main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Camera from './Components/camera/Camera';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/Camera" element={<Camera />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
