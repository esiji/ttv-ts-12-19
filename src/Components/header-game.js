import React from 'react';
import hsPic from '../images/hs-cover.jpg';

function Game(props) {
  return (
      <div className={`game ${props.image === hsPic ? '' : "mr-1" }`}>
        <a href={`#${props.id}Toggle`}>
          <img className="game-img shadow rounded" src={props.image} />
        </a>
      </div>
  );
}

export default Game;
