import React from 'react'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loader from '../Components/Common/Loader/index'
import { CoinObject } from '../Components/Functions/ConvertCoinObject.js';
import List from '../Pages/DashBoard/Tab/List/List';
import Header from "../Components/Common/Header/index";
import CoinInfo from '../Pages/Coin/CoinnInfo/Coininfo.js';

function CoinPage() {
    const [isLoading, setIsLoading]= useState(true);
    const [coinData, setCoinData]=useState();
    const {id}= useParams();

    useEffect(()=>{
        if(id){
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((response)=>{console.log(response.data);
                CoinObject(setCoinData, response.data);
                    setIsLoading(false);
        })
            .catch((err)=>{console.log(err.response.data);
                setIsLoading(true);
        })
        }
    },[id]);
    
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