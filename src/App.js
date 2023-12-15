
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage.js';
import Dashboard from './Pages/DashBoard/Dashboard.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
