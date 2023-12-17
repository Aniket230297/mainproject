 import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme} from '@mui/material';


export default function Dashboard({coins}) {
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
          <div>{
            coins.map((item, i)=>{
                return(
                    <p key={i}>{i+1}. {item.name}</p>
                )
            })
        }
          </div>
          </TabPanel>
        <TabPanel value="list">
          <div>
            mapping for Lists
          </div>
        </TabPanel>
       
      </TabContext>
    </div>
    </ThemeProvider>
  );
}