import { useEffect, useState } from 'react';
import Header from '../Components/Common/Header/index.js'
import DashPage from './DashBoard/Tab/DashPage.js'
import axios from "axios";
import Search from './DashBoard/Tab/Search/index.js';


const DashBoard = ()=>{
    const [coins, setCoins]=useState([]);
    const [search, setSearch]=useState(null);

    const onChangeSearch=(value)=>{
      setSearch(value);
    }

    useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((res)=>setCoins(res.data))
      .catch((err)=>console.log(err))
    },[])

      return(
        <div>
          <Header />
          <Search search={search} onChangeSearch={onChangeSearch} />
          <DashPage coins={coins}/>

        </div>

      )
}

export default DashBoard;