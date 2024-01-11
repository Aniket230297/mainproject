import React, { useState } from 'react'
import './style.css';

<<<<<<< HEAD:src/Pages/Coin/CoinnInfo/index.js
function CoinnInfo({heading, desc}) {
=======
function Coininfo({heading, desc}) {
>>>>>>> f7ae463853dfa20d4fbdaabe82b3f929be1382fa:src/Pages/Coin/CoinnInfo/Coininfo.js
  const shortdesc = desc.slice(0, 350) + "<p style='color:Var(--grey)'> Read more...</p>"
  const longdesc= desc + "<p style='color:Var(--grey)'> Read Less...</p>"

  const [flag, setFlag]=useState(false);
  return (
    <div className='wrapper-div'>
      <h2>{heading}</h2>
      <p className="coin-desc" onClick={()=>setFlag(!flag)}
        dangerouslySetInnerHTML={{ __html: flag ? longdesc : shortdesc }}
      />
    </div>
  )
}

<<<<<<< HEAD:src/Pages/Coin/CoinnInfo/index.js
export default CoinnInfo;
=======
export default Coininfo;
>>>>>>> f7ae463853dfa20d4fbdaabe82b3f929be1382fa:src/Pages/Coin/CoinnInfo/Coininfo.js
