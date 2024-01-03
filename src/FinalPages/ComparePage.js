import React, {useState} from 'react'
import Header from '../Components/Common/Header/index'
import SelectCoins from '../Pages/Compare/SelectCoins'

function ComparePage() {
  const [Crypto1, setCrypto1]=useState("bitcoin");
  const [Crypto2, setCrypto2]=useState("ethereum");

  return (
    <div>
      <Header />
      <SelectCoins  Crypto1={Crypto1} Crypto2={Crypto2} setCrypto1={setCrypto1} setCrypto2={setCrypto2}/>
    </div>
  )
}

export default ComparePage