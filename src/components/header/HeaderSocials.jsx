import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


export default function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/marcin-magdziak-664847223/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/MarsGotBars" target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}
