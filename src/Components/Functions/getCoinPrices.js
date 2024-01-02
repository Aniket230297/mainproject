import axios from "axios";

export const getCoinPrices=(id, day, priceType)=>{
    const prices= axios.get
    (`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}&interval=daily`)
    .then((response)=>{
    console.log("prices>>>", response.data.prices);
     return response.data[priceType]}
    )
    .catch((err)=>console.log(err));
     return prices;
}



