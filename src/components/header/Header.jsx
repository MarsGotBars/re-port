import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/port2.png';
import HeaderSocials from './HeaderSocials';
export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Marcin Magdziak</h1>
        <h5 className="text-light">Junior developer</h5>
        <CTA/>
        <HeaderSocials/>

        <figure className="me">
          <img src={ME} alt="Marcin Magdziak" />
        </figure>

        <a href="#contact" className="scroll__down">Scroll down</a>
      </div>
    </header>
  )
}
