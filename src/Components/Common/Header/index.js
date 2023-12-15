import './style.css';
import TemporaryDrawer from './drawer';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span style={{color:"blue"}}>.</span></h1>

        <div className='links'>
          <Link to="/"><p className='link'>Home</p></Link>
          <Link to="/watchlist "><p className='link'>Watchlist</p></Link>
          <Link to="/"><p className='link'>Compare</p></Link>
          <Link to="/dashboard"><Button text={"Dashboard"} /></Link>
          
        </div>

        <div className='mobile-drawer'>
            <TemporaryDrawer />
        </div>
    </div>
    
  )
}

export default index