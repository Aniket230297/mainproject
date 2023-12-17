import { useEffect, useState } from 'react';
import Header from '../../Components/Common/Header/index'
import DashPage from '../DashBoard/DashPage.js'
import axios from "axios";


const DashBoard = ()=>{
    const [coins, setCoins]=useState([]);

    useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((res)=>setCoins(res.data))
      .catch((err)=>console.log(err))
    },[])

      return(
        <div>
          <Header />
          <DashPage coins={coins}/>

        </div>

      )
}

export default DashBoard;