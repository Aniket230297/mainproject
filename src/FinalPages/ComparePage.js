import React, {useEffect, useState} from 'react'
import Header from '../Components/Common/Header/index'
import SelectCoins from '../Pages/Compare/SelectCoins'
import SelectDays from '../Pages/Coin/SelectDays';
import { getCoinData } from '../Components/Functions/getCoinData';
import { CoinObject } from '../Components/Functions/ConvertCoinObject';
import { getCoinPrices } from '../Components/Functions/getCoinPrices';
import CircularIndeterminate from '../Components/Common/Loader';


function ComparePage() {
  const [Crypto1, setCrypto1]=useState("bitcoin");
  const [Crypto2, setCrypto2]=useState("ethereum");
  const [Crypto1Data, setCrypto1Data]=useState({});
  const [Crypto2Data, setCrypto2Data]=useState({});
  const [isLoading,setIsLoading]=useState('');
  const [day , setDay]=useState(30);
  const [priceType , setPriceType]=useState('');

  useEffect(()=>{
    getData();
  },[])

async function getData(){
  setIsLoading(true);
  const data1 = await getCoinData(Crypto1);
  const data2 = await getCoinData(Crypto2);
  if (data1) {
    CoinObject(setCrypto1Data, data1);
    if (data2) {
      CoinObject(setCrypto1Data, data2); 
      setIsLoading(false); 
    }
    if(data1 && data2){
      const prices1 = await getCoinPrices(Crypto1, day, priceType);
      const prices2 = await getCoinPrices(Crypto2, day, priceType);
      if(prices1.length > 0 && prices2.length>0){
        setIsLoading(false);
        console.log("both prices", prices1, prices2)
      }
    }
}
}

  const handledaysChange=(event)=>{
    setDay(event.target.value);
  }

  const handleCoinChange= async (event, isCoin2)=>{
    setIsLoading(true);
    if(isCoin2){ 
     setCrypto2(event.target.value)
     const data = await getCoinData(event.target.value);
     CoinObject(setCrypto2Data, data);
    }else
    { setCrypto1(event.target.value)
      const data = await getCoinData(event.target.value);
          CoinObject(setCrypto1Data, data);
          
      }
      const prices1 = await getCoinPrices(event.target.value, day, "priceType");
      const prices2 = await getCoinPrices(event.target.value, day, "priceType");
       setIsLoading(false);
   }
  



  return(
    <>{isLoading ?(<CircularIndeterminate />):(
      <div>
      <Header />
      <div className='compare-page-container'>
      <SelectCoins  Crypto1={Crypto1} Crypto2={Crypto2} handleCoinChange={handleCoinChange}/>
      <SelectDays day={day} handledaysChange={handledaysChange} PTag />
      </div>
      
        </div>
    )
    }
    </>
  )

  }

export default ComparePage;