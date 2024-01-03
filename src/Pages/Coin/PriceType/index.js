
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css";

export default function TogglePriceType({handleToggleChange, priceType}) {


  return ( 
    <div className="togglecontainer" >
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handleToggleChange}
      aria-label="text alignment"
      sx={{
        ".MuiToggleButton-root":{
            color: "var(--blue)",
            borderColor: "var(--blue)",
        },
        color:"var(--blue) !important",
       
      }}
    >
      <ToggleButton value="prices">PRICE</ToggleButton>

      <ToggleButton value="market_caps">MARKET CAP</ToggleButton>

      <ToggleButton value="total_volumes" >TOTAL VOLUME</ToggleButton>

      
    </ToggleButtonGroup>
    </div>
  );
}