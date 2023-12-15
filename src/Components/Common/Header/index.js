import './style.css';
import TemporaryDrawer from './drawer';
import Button from '../Buttons/Button';

function index() {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span style={{color:"blue"}}>.</span></h1>

        <div className='links'>
          <a href='#'><p className='link'>Home</p></a>
          <a href='#'><p className='link'>Watchlist</p></a>
          <a href='#'><p className='link'>Compare</p></a>
<<<<<<< HEAD
          <a href='#'><Button text={"Dashboard"} /></a>
=======
          <a href='#'>
            <Button text={"Dashboard"}
            // outlined={true}
             onClick={()=>console.log("hello")}
             /></a>
         
>>>>>>> 5cc5ddb2084636bd851def6b07fc531b66ecbc69
          
        </div>

        <div className='mobile-drawer'>
            <TemporaryDrawer />
        </div>
    </div>
    
  )
}

export default index