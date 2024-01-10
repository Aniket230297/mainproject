
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './FinalPages/Homepage.js'
import Dashboard from './FinalPages/DashBoard.js';
import CoinPage from './FinalPages/CoinPage.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
                <Route path="/coin/:id" element={<CoinPage />} />
              
=======
                <Route path="/coin/:id" element={<CoinPage />} /> 
>>>>>>> af26d3799f17df861b4faadd7f797b5359d30a49
            </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
