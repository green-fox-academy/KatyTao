import React from 'react';
import { connect } from 'react-redux';

function Counter({increase,decrease,state=0}) {
  return(
    <>
    <button onClick={increase}>-</button>
    <span>{state}</span>
    <button onClick={decrease}>+</button>
    </>
  )
}


function mapFuncToProps(state) {
  return {
    increase: () => {return state+1},
    decrease: () => {return state-1},
  }
}

export default connect(mapFuncToProps)(Counter);

