import React, { useState, useEffect } from 'react';
import './App.css';
import SliderDisplay from './components/SliderDisplay';
import SliderBtn from './components/SliderBtn';
import ThumbDisplay from './components/ThumbDisplay';

function App() {
  const imgSet = [
    {
      id:1,
      url:"https://www.desktopbackground.org/download/1280x720/2015/10/13/1025508_james-reviews-marvels-the-avengers_1920x1080_h.jpg",
      alt:"Marvel's The Avengers",
    },
    {
      id:2,
      url: "https://www.desktopbackground.org/download/1280x720/2010/08/28/71233_the-hobbit-the-desolation-of-smaug-legolas-greenleaf-wallpapers_1920x1200_h.jpg",
      alt: "The lord of the rings",
    },
    {
      id:3,
      url: "https://www.desktopbackground.org/download/1280x720/2013/12/06/681041_final-fantasy-final-fantasy-versus-xiii-noctis-final-fantasy-xv_3137x1335_h.jpg",
      alt:"Final Fantasy 15",
    },
    {
      id:4,
      url: "https://www.desktopbackground.org/download/1280x720/2012/02/20/346701_final-fantasy-vii-tifa-lockhart-wallpapers-game-wallpapers_1680x1050_h.jpg",
      alt:"Tifa Lockhart",
    },
    {
      id:5,
      url:"https://www.desktopbackground.org/download/1280x720/2015/09/05/1006181_final-fantasy-vii-free-wallpapers-40-photos-for-your-desktop_1440x900_h.jpg",
      alt:"Cloud",
    },
    {
      id:6,
      url:"https://www.desktopbackground.org/download/1280x720/2014/12/14/871240_final-fantasy-7-hd-desktop-wallpapers-high-definition_2400x1350_h.jpg",
      alt:"Zacks"
    },
    {
      id:7,
      url:"https://www.desktopbackground.org/download/1280x720/2012/07/04/415539_kingdom-hearts-hd-wallpapers_1280x800_h.jpg",
      alt:"Kingdom Hearts"
    }
  ]
  const [DisplayImg, setDisplayImg] = useState(imgSet[0]);
  const [ActivateIdx, setActivateIdx] = useState(0);

  function LeftSlide() {
      if(parseInt(DisplayImg.id) === 1) {
        setDisplayImg(imgSet[imgSet.length - 1]);
        setActivateIdx(imgSet.length - 1);
      } else {
        setDisplayImg(imgSet[(parseInt(DisplayImg.id) - 2)]);
        setActivateIdx(ActivateIdx - 1);
      }
  }

  useEffect(()=>{
    console.log(ActivateIdx)
  }
  ); 
    
  function RightSlide() {
      if(parseInt(DisplayImg.id) === imgSet.length) {
        setDisplayImg(imgSet[0]);
        setActivateIdx(0);
      } else {
        setDisplayImg(imgSet[(parseInt(DisplayImg.id))]);
        setActivateIdx(ActivateIdx + 1);
      }
  }

  return (
    <main>    
      <section className="slider-wrapper">
        <SliderBtn clickFunc={LeftSlide} className="left-arrow" />
        <SliderDisplay img={DisplayImg} />
        <SliderBtn clickFunc={RightSlide} className="right-arrow" />
      </section>
      <section className="thumb-wrapper">
        <ThumbDisplay activeIdx={ActivateIdx} imgSet={imgSet}/>
      </section>
    </main>
  );
}

export default App;
