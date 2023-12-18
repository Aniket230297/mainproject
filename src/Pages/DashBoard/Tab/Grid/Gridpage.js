import React from 'react'
import './style.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function Gridpage({coin , i}) {
  return (
    <div className='gridContainer'>
        <div className='info-flex'>
          <img src={coin.image} className='coin-logo' alt='img' />
          <div className='coin-info'>
            <p className='coinSymbol'>{coin.symbol}</p>
            <p className='coinName'>{coin.name}</p>
          </div>

        </div>

        {coin.price_change_percentage_24h > 0 ? ( <div className='chip-flex'>
              <div className='coin-percentage'>{coin.price_change_percentage_24h.toFixed(2)}% </div>
              <TrendingUpRoundedIcon className='trending-icon' />
              </div> ):(  <div className='chip-flex '>
              <div className='coin-percentage coin-red'>{coin.price_change_percentage_24h.toFixed(2)}% </div>
              <TrendingDownRoundedIcon className='trending-icon down-icon'/>
              </div>
          )}  
                  
              <div className='info-container'>
                    <h3 className='coin-price'>{coin.Current_price.toLocaleString()}</h3>
                    <p className='total-volume'>Total Volume: {coin.total_volume.toLocaleString()}</p>
                    <p className='total-volume'>Total Cap: {coin.market_cap.toLocaleString()}</p>
              </div>
                  
</div>
    
  );
}

export default Gridpage;