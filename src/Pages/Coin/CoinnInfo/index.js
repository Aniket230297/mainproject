import React, { useState } from 'react'
import './style.css';

function index({heading, desc}) {
  const shortdesc = desc.slice(0, 350) + "<p style='color:Var(--grey)'> Read more...</p>"
  const longdesc= desc + "<p style='color:Var(--grey)'> Read more...</p>"

  const [flag, setFlag]=useState(false);
  return (
    <div className='wrapper-div'>
      <h2>{heading}</h2>
      <p className="coin-desc" onClick={} dangerouslySetInnerHTML={{__html: shortdesc}} />
    </div>
  )
}

export default index