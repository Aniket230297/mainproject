import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css';

export default function SelectDays() {
  const [day, setDay] = React.useState(7);

  const handleChange = (event) => {
    setDay(event.target.value);
    console.log(event.target.value)
  };

  let style={
    color:"var(--black)",
  }

  return (
    <div className='selectdiv'>
      <p>Price Change in</p>

        {/* <InputLabel id="demo-simple-select-label">Day</InputLabel> */}
        <Select className='select'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          onChange={handleChange}
        >
          <MenuItem value={7} sx={{...style}}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
      
    </div>
  );
}