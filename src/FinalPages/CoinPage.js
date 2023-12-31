import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loader from '../Components/Common/Loader/index'
import { CoinObject } from '../Components/Functions/ConvertCoinObject.js';
import List from '../Pages/DashBoard/Tab/List/List.js'
import Header from "../Components/Common/Header/index";
import CoinInfo from '../Pages/Coin/CoinnInfo/Index.js';
import { getCoinData } from '../Components/Functions/getCoinData.js';
import { getCoinPrices } from '../Components/Functions/getCoinPrices.js';
import Linechart from '../Pages/Coin/LineChart/Linechart.js';
import { ConvertDate } from '../Components/Functions/ConvertDate.js';
import SelectDays from '../Pages/Coin/SelectDays/index.js';

function CoinPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [day, setDay] = useState(30);
    const [chartData, setChartData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    async function getData() {
        const data = await getCoinData(id);
        if (data) {
            CoinObject(setCoinData, data);
            const prices = await getCoinPrices(id, day);
            if (prices.length > 0) {
                console.log("anik");
                
                setChartData({
                    labels: prices.map((price)=>ConvertDate(price[0])),
                    datasets: [{
                        type: 'line',
                        data: prices.map((price)=>price[1]),
                        borderColor: '#3a80e9',
                        borderWidth:2,
                        fill:true,
                        tension : 0.25,
                        backgroundColor: "rgba(58, 128, 233, 0.1)",
                        pointRadius:0
                    }]
                })
               
                setIsLoading(false);
            }
        }
    }

    return (
        <div>{isLoading ? (<><Loader /></>) : (
            <>
                <Header />
                <List coin={coinData} />
                <div className='wrapper-div'>
                    <SelectDays />
                    <Linechart chartData={chartData} />
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </>)}
        </div>



    )
}

export default CoinPage