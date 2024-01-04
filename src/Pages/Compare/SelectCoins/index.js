
import { useState, useEffect } from 'react'
import { get100Coins } from '../../../Components/Functions/get100Coins.js';
import { MenuItem } from '@mui/material';
import {Select} from '@mui/material';
import './style.css';



function SelectCoins({Crypto1, Crypto2, handleCoinChange}) {
    
    const [allcoins , setAllCoins]=useState([]);

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
        const mycoins = await get100Coins();
        setAllCoins(mycoins);
        }
    
    

  return (
    <div className='selectcoinsContainer'>
        <p>Crypto 1</p>
        <Select className='select'
           sx={style}
          id="demo-simple-select"
          value={Crypto1}
          onChange={(event)=>handleCoinChange(event, false)}
        >
            {allcoins.map((coin)=>(<MenuItem value={coin.id} sx={{color:"var(--black)"}}>{coin.name}</MenuItem>))}
        </Select> 

        <p>Crypto 2</p>
        <Select className='select'
           sx={style}
          id="demo-simple-select"
          value={Crypto2}
          onChange={(event)=>handleCoinChange(event, true)}
        >
            {allcoins.map((coin)=>(<MenuItem value={coin.id} sx={{color:"var(--black)"}}>{coin.name}</MenuItem>))}
        </Select>

        
    </div>
  )
  }


export default SelectCoins