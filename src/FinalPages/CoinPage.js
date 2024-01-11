import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Components/Common/Loader/index'
import { CoinObject } from '../Components/Functions/ConvertCoinObject.js';
<<<<<<< HEAD
import List from '../Pages/DashBoard/Tab/List/List.js'
import Header from "../Components/Common/Header/index";
import CoinInfo from '../Pages/Coin/CoinnInfo/index.js';
=======
import List from '../Pages/DashBoard/Tab/List/List';
import Header from "../Components/Common/Header/index";
import CoinInfo from '../Pages/Coin/CoinnInfo/Coininfo.js';
>>>>>>> f7ae463853dfa20d4fbdaabe82b3f929be1382fa
import { getCoinData } from '../Components/Functions/getCoinData.js';
import { getCoinPrices } from '../Components/Functions/getCoinPrices.js';
import Linechart from '../Pages/Coin/LineChart/Linechart.js';
// import { ConvertDate } from '../Components/Functions/ConvertDate.js';
import SelectDays from '../Pages/Coin/SelectDays/index.js';
import { SettingChartData } from '../Components/Functions/SettingChartData.js';
import TogglePriceType from '../Pages/Coin/PriceType/index.js';

function CoinPage() {
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [day, setDay] = useState(30);
    const [chartData, setChartData] = useState({});
    const { id } = useParams();
    const [priceType, setPriceType] = useState("prices"); 

    

    useEffect(() => {
        if (id) {
            getData();
=======
    const [isLoading, setIsLoading]= useState(true);
    const [coinData, setCoinData]=useState();
    const [day, setDay]=useState(7);
    const {id}= useParams();

    useEffect(()=>{
        if(id){
           getData();

        // dummy for prices
>>>>>>> f7ae463853dfa20d4fbdaabe82b3f929be1382fa
        }
    }, [id]);

<<<<<<< HEAD
    async function getData() {
        const data = await getCoinData(id);
        if (data) {
            CoinObject(setCoinData, data);
            const prices = await getCoinPrices(id, day, priceType);
            if (prices.length > 0) {
                console.log("anik");
                SettingChartData(setChartData, prices);
                setIsLoading(false);
            }
        }
    }

    const handledaysChange = async (event, newType) => {
        setIsLoading(true);
        setDay(event.target.value);
       
        const prices = await getCoinPrices(id, event.target.value, priceType);
        console.log(prices);
        if (prices.length > 0) {
            SettingChartData(setChartData, prices);
            setIsLoading(false);
        }
      };

  

    const  handleToggleChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices = await getCoinPrices(id, day, newType);
        if ( prices.length > 0) {
            SettingChartData(setChartData, prices);
            setIsLoading(false);
        }
      };

  
    

    return (
        <div>{isLoading ? (<><Loader /></>) : (
            <>
                <Header />
                <List coin={coinData} />
                <div className='wrapper-div'>
                    <SelectDays day={day} handledaysChange={handledaysChange} />
                    <TogglePriceType handleToggleChange={handleToggleChange} priceType={priceType} />
                    <Linechart chartData={chartData} />
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </>)}
        </div>



    )
=======
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
>>>>>>> f7ae463853dfa20d4fbdaabe82b3f929be1382fa
}

export default CoinPage;