import React from "react";
export default function AboutList(props) {
  return (
    <section className='about-list'>
      <section className='about-header'>
        <h2>ABOUT</h2>
        <a href='#'>r/space</a>
      </section>
      <section className='about-content'>
        <p>Share & discuss informative content on:</p>
        <ul>
          <li>Astrophysics</li>
          <li>Cosmology</li>
          <li>Space Exploration</li>
          <li>Planetary Science</li>
          <li>Astrobiology</li>
        </ul>
      </section>
    </section>
  );
}
