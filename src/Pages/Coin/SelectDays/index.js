import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import './style.css';

export default function SelectDays({day, handledaysChange, PTag}) {
 

  return (
    <div className='selectdiv'>
     {!PTag && <p>Price Change in</p>}

        {/* <InputLabel id="demo-simple-select-label">Day</InputLabel> */}
        <Select className='select'
           sx={{
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
           }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          onChange={handledaysChange}
        >
          <MenuItem value={7} sx={{color:"var(--black)"}}>7 Days</MenuItem>
          <MenuItem value={30} sx={{color:"var(--black)"}}>30 Days</MenuItem>
          <MenuItem value={60} sx={{color:"var(--black)"}}>60 Days</MenuItem>
          <MenuItem value={120} sx={{color:"var(--black)"}}>120 Days</MenuItem>
          <MenuItem value={365} sx={{color:"var(--black)"}}>1 Year</MenuItem>
        </Select>
        
    </div>
  );
}