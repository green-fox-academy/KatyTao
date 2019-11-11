import React from 'react';
import { connect } from 'react-redux';

const INCREASE = 'increase';
const DECREASE = 'decrease';

export default function Counter() {
  return (
    <>
    <button>-</button>
    <span>0</span>
    <button>+</button>
    </>    
  )
}

