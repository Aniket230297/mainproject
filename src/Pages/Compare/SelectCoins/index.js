
import { useState, useEffect } from 'react'
import { get100Coins } from '../../../Components/Functions/get100Coins.js';
import { MenuItem } from '@mui/material';
import {Select} from '@mui/material';

function SelectCoins() {
    const [compare1 , setCompare1]=useState("bitcoin");
    const [coin , setCoin]=useState([])
    console.log(coin);

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
        const coindata = await get100Coins();
        setCoin(coindata);
    }

    const handledaysChange=(event)=>{
            setCompare1(event.target.value)
    }

  return (
    <div>
        <Select className='select'
           sx={style}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={compare1}
          onChange={handledaysChange}
        >
            {coin.map((coin)=>(<MenuItem value={coin.id} key={coin.id}>{coin.name}</MenuItem>))}
        </Select> 
    </div>
  )
}

export default SelectCoins