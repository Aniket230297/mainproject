 import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme} from '@mui/material';
import Gridpage from './Grid/Gridpage';
import dashpage from './dashpage.css';
import List from './List/List';

export default function Dashboard({coins, i}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style={
            color:"var(--white)",
            fontWeight:"600"
  }

  const theme = createTheme({
    palette:{
      primary:{
        main:"#3a80e9"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <div>
      <TabContext value={value}>
        
          <TabList onChange={handleChange} variant="fullWidth" >
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
       
         <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin, i)=>{
              return <Gridpage coin={coin} key={i}/>
            })}
          </div>


          </TabPanel>
        <TabPanel value="list">
          <table className='list-table'>
            {coins.map((item, i)=>{
              return <List coin={item} key={i} />
            })}
          </table>
        </TabPanel>
       
      </TabContext>
    </div>
    </ThemeProvider>
  );
}