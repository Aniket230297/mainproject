import React from 'react'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loader from '../Components/Common/Loader/index'
import  {CoinObject}  from '../Components/Functions/ConvertCoinObject.js';
import List from '../Pages/DashBoard/Tab/List/List.js'
import Header from "../Components/Common/Header/index";
import CoinInfo from '../Pages/Coin/CoinnInfo/Index.js';
import { getCoinData } from '../Components/Functions/getCoinData.js';
import { getCoinPrices } from '../Components/Functions/getCoinPrices.js';

function CoinPage() {
    const [isLoading, setIsLoading]= useState(true);
    const [coinData, setCoinData]=useState();
    const [day , setDay]=useState(7);
    const {id}= useParams();

    useEffect(()=>{
        if(id){
            getData();  
        }
    },[id]);

    async function getData(){
        const data= await getCoinData(id);
        if(data){
            CoinObject(setCoinData,data);

            const prices= await getCoinPrices(id, day);
            if(prices.length>0){
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

export default CoinPage