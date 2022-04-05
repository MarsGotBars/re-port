import React from 'react';
import './footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/marcin-magdziak-664847223/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/MarsGotBars" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://discordapp.com/users/958084070305304676" target="_blank" rel="noreferrer"><FaDiscord/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Marcin</small>
      </div>
    </footer>
  )
}
