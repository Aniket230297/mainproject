import { useEffect, useState } from 'react';
import Header from '../Components/Common/Header/index.js'
import DashPage from '../Pages/DashBoard/Tab/DashPage.js'
import Search from '../Pages/DashBoard/Tab/Search/index.js';
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