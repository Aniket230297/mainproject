
import { useState, useEffect } from 'react'
import { get100Coins } from '../../../Components/Functions/get100Coins.js';
import { MenuItem } from '@mui/material';
import {Select} from '@mui/material';
import './style.css';

<<<<<<< HEAD
function SelectCoins() {
    const [compare1 , setCompare1]=useState('bitcoin');
    const [coin , setCoin]=useState([]);
    console.log(coin);
=======

function SelectCoins({Crypto1, Crypto2, setCrypto1, setCrypto2}) {
    
    const [allcoins , setAllCoins]=useState([]);
>>>>>>> 3ba1a90518ad803319dde4bde8c13eeae0e8f462

    const style={
        height:"2.5rem",
            color:"var(--white)",
            "& .MuiOutlinedInput-notchedOutline":{
              borderColor:"var(--white)",
            },
            "& .MuiSvgIcon-root":{
              color:"var(--white)",
            },
            "&:hover":{
            "&& fieldset":{
              borderColor:"#3a80e9"
            }
          }
    }
    
    useEffect(()=>{
        getdata();
    },[])

    const getdata= async ()=>{
<<<<<<< HEAD
        const coindata = await get100Coins();
        console.log(coindata);
        setCoin(coindata);
    }

    const handledaysChange=(event)=>{
            setCompare1(event.target.value)
=======
        const mycoins = await get100Coins();
        setAllCoins(mycoins);
        }
    
    const handledaysChange=(event, isCoin2)=>{
           if(isCoin2){
            setCrypto2(event.target.value)
            console.log(event.target.value);
           }else
           { setCrypto1(event.target.value)
              console.log(event.target.value);
          }
>>>>>>> 3ba1a90518ad803319dde4bde8c13eeae0e8f462
    }

  return (
    <div className='selectcoinsContainer'>
        <p>Crypto 1</p>
        <Select className='select'
           sx={style}
          id="demo-simple-select"
          value={Crypto1}
          onChange={(event)=>handledaysChange(event, false)}
        >
            {allcoins.map((coin)=>(<MenuItem value={coin.id} sx={{color:"var(--black)"}}>{coin.name}</MenuItem>))}
        </Select> 

        <p>Crypto 2</p>
        <Select className='select'
           sx={style}
          id="demo-simple-select"
          value={Crypto2}
          onChange={(event)=>handledaysChange(event, true)}
        >
            {allcoins.map((coin)=>(<MenuItem value={coin.id} sx={{color:"var(--black)"}}>{coin.name}</MenuItem>))}
        </Select> 
    </div>
  )
  }


export default SelectCoins