import React from 'react';
function Decreaser({countValue,decrease}) {
  return(
    <>
    <h2>The Decreaser</h2>
    <p>{countValue}</p>
    <button onClick={decrease}>Decrease</button>
    </>
  )
}

function name(params) {
  
}