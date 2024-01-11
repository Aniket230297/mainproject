import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Components/Common/Loader/index'
import { CoinObject } from '../Components/Functions/ConvertCoinObject.js';
import List from '../Pages/DashBoard/Tab/List/List';
import Header from "../Components/Common/Header/index";
import CoinInfo from '../Pages/Coin/CoinnInfo/Coininfo.js';
import { getCoinData } from '../Components/Functions/getCoinData.js';
import { getCoinPrices } from '../Components/Functions/getCoinPrices.js';
import Linechart from '../Pages/Coin/LineChart/Linechart.js';
// import { ConvertDate } from '../Components/Functions/ConvertDate.js';
import SelectDays from '../Pages/Coin/SelectDays/index.js';
import { SettingChartData } from '../Components/Functions/SettingChartData.js';
import TogglePriceType from '../Pages/Coin/PriceType/index.js';

function CoinPage() {
    const [isLoading, setIsLoading]= useState(true);
    const [coinData, setCoinData]=useState();
    const [day, setDay]=useState(7);
    const {id}= useParams();

    useEffect(()=>{
        if(id){
           getData();

        // dummy for prices
        }
    }, [id]);

  async function getData(){
        
     const data = await getCoinData(id);
      if(data){
       CoinObject(setCoinData, data);
        const prices= await getCoinPrices(id, day);
           if(prices.length > 0){
           
            console.log("anik");
            setIsLoading(false);
        }
     }   
   }
    
  return (
    <div>{isLoading? (<><Loader /></>): (
    <>  
        <Header />
        <List coin={coinData}/>
        <CoinInfo heading={coinData.name} desc={coinData.desc}/>
    </>)}
    </div>
  )
}

export default CoinPage;