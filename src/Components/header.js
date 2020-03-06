import React from 'react';
import Game from './header-game.js';
import FortnitePic from '../images/fortnite-cover.jpg';
import LeaguePic from '../images/lol-cover.jpg';
import WoWPic from '../images/wow-cover.jpg';
import gtaPic from '../images/gta-cover.jpg';
import hsPic from '../images/hs-cover.jpg';

function Header() {
  return (
    <section id="header">
      <img className="pg-title" src={require('../images/title.svg')} />
      <div className="games container-fluid d-flex justify-content-center align-items-center  flex-wrap">
          <Game image={FortnitePic} id={'fortnite'} />
          <Game image={LeaguePic} id={'lol'} />
          <Game image={WoWPic} id={'wow'} />
          <Game image={gtaPic} id={'gta'} />
          <Game image={hsPic} id={'hs'} />
      </div>
    </section>
  );
}

export default Header;
