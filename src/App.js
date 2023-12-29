
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage.js';
import Dashboard from './Pages/DashBoard.js';
import CoinPage from './Pages/CoinPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/coin/:id" element={<CoinPage />} />
            </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
