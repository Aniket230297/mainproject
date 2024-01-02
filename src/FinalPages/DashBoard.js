import { useEffect, useState } from 'react';
import Header from '../Components/Common/Header/index.js'
import DashPage from '../Pages/DashBoard/Tab/DashPage.js'
import axios from "axios";
import Search from '../Pages/DashBoard/Tab/Search/index.js';
// import PaginationControlled from '../Pages/DashBoard/Tab/Pagination/Pagination.js';
import CircularIndeterminate from '../Components/Common/Loader/index.js';
import { get100Coins } from '../Components/Functions/get100Coins.js';


const DashBoard = ()=>{
    const [coins, setCoins]=useState([]);
    const [search, setSearch]=useState('');
    const [isLoading, setIsLoading]=useState(true);

    const onChangeSearch=(value)=>{
      setSearch(value);
    }

    const filteredval= coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(()=>{
      // axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      // .then((res)=>setCoins(res.data))
      // .catch((err)=>console.log(err))
      // setIsLoading(false)
        getData();
    },[])

    const getData= async ()=>{
         const coindata= await get100Coins();
         if(coindata){
         setCoins(coindata);
         setIsLoading(false); 
         }
    }

      return(
        <>{isLoading ?(<CircularIndeterminate />):(
        <div>
          <Header />
          <Search search={search} onChangeSearch={onChangeSearch} />
          <DashPage coins={filteredval}/>
          {/* <PaginationControlled /> */}
        </div>)
}
      </>
      )
}

export default DashBoard;