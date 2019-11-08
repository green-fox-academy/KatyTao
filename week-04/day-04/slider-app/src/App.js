import React, { useState, useEffect } from 'react';
import './App.css';
import SliderDisplay from './components/SliderDisplay';
import SliderBtn from './components/SliderBtn';
import ThumbDisplay from './components/ThumbDisplay';
import imgSet from './data/data';

function App() {
  const [DisplayImg, setDisplayImg] = useState(imgSet[0]);
  const [ActivateIdx, setActivateIdx] = useState(0);

  function LeftSlide() {
    if(ActivateIdx === 0){
      setDisplayImg(imgSet[imgSet.length - 1]);
      setActivateIdx(imgSet.length - 1);
    }else {
      setDisplayImg(imgSet[ActivateIdx - 1]);
      setActivateIdx(ActivateIdx - 1);
      console.log(DisplayImg.description);
    }
  }

  function RightSlide() {
      if(ActivateIdx === (imgSet.length - 1)) {
        setDisplayImg(imgSet[0]);
        setActivateIdx(0);
      } else {
        setDisplayImg(imgSet[ActivateIdx + 1]);
        setActivateIdx(ActivateIdx + 1);
      }
  }

  useEffect(()=>{
    console.log(ActivateIdx);
    }
  ); 

  function thumbClick(index) {
    console.log(index); 
    setDisplayImg(imgSet[index]);
    setActivateIdx(index);
  }

  return (
    <main>    
      <section className="slider-wrapper">
        <SliderBtn clickFunc={LeftSlide} className="left-arrow" />
        <SliderDisplay img={DisplayImg} />
        <SliderBtn clickFunc={RightSlide} className="right-arrow" />
      </section>
      <section className="thumb-wrapper">
        <ThumbDisplay clickFunc={thumbClick} activeIdx={ActivateIdx} imgSet={imgSet}/>
      </section>
    </main>
  );
}

export default App;
