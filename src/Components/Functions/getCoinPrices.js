import axios from "axios";

export const getCoinPrices=(id, day, priceType)=>{
    const prices= axios.get
    (`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}&interval=daily`)
    .then((response)=>{
<<<<<<< HEAD
    console.log("prices>>>", response.data.prices);
     return response.data[priceType]}
    )
    .catch((err)=>console.log(err));
     return prices;
}



=======
    console.log("response>>>", response.data.prices)
     return response.data.prices;}
    )
    .catch((err)=>console.log(err));
     return prices;
}  
>>>>>>> f7ae463853dfa20d4fbdaabe82b3f929be1382fa
