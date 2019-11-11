import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter } from '../actionCreator';
function Increaser({countValue, increase}) {
  return(
    <>
    <h2>The Increaser</h2>
    <p>{countValue}</p>
    <button onClick={increase}>Increase</button>
    </>
  )
}

function mapStateToProps(state) {
  return {
    countValue: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase:() => {dispatch(increaseCounter())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);