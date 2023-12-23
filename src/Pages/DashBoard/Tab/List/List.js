import React from 'react';
import '../List/style.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function List({ coin }) {
  const isPricePositive = coin.price_change_percentage_24h > 0;

  return (
    <tr className='list-row'>
      <td className='info-flex'>
        <img src={coin.image} className='coin-logo' alt='img' />
        <div className='coin-info'>
          <p className='coinSymbol'>{coin.symbol}</p>
          <p className='coinName'>{coin.name}</p>
        </div>
      </td>

      <td className='chip-flex'>
        <td className={`coin-percentage ${isPricePositive ? 'coin-percentage-hovering-green' : 'coin-red coin-percentage-hovering-red'}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </td>
        {isPricePositive ? (
          <TrendingUpRoundedIcon className='trending-icon coin-percentage-hovering-green' />
        ) : (
          <TrendingDownRoundedIcon className='trending-icon down-icon coin-percentage-hovering-red' />
        )}
      </td>

      <td className='info-list-container'>
        <td>
          <h3 className={`coin-price ${isPricePositive ? '' : 'coin-price-red'}`}>
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
        <td className='total-volume'>
          <p className='vol'> {coin.total_volume.toLocaleString()}</p>
        </td>
        <td className='total-volume'>
          <p className='vol'> {coin.market_cap.toLocaleString()}</p>
        </td>
      </td>
    </tr>
  );
}

export default List;
