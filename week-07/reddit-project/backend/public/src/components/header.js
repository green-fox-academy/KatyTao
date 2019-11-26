import React from "react";
import headerImg from "../assets/img/headerImg.png";

export default function Header() {
  return (
    <header>
      <div className='img-wrapper'>
        <img src={headerImg} alt='headerImg' />
      </div>
      <h1>SPACE</h1>
    </header>
  );
}
