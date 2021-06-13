import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/massie_icon.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Massie Wu</strong>, an Engineer&nbsp;
        <br />
        and a Math/Mandarin teacher on&nbsp;
        <br />
        <a href="https://en.amazingtalker.com/teachers-and-tutors/massie?language=math">
          AmazingTalker
        </a>
        .
      </h1>
    </div>
  </header>
)

export default Header
