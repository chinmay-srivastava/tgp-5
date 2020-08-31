import React from 'react'
import { IconArrowDown } from './Icon';

const Mark = () => (<div className="mark" />)

const ShowDetailsButton = ({ onClick, startGame, showButton }) => (
  <div>
    {
      showButton?
      <button onClick={startGame} className="playButtStyle">
        <span className="triangle-right"></span>
      </button>
      :<div />
    }
    <button onClick={onClick} className="show-details-button">
      <span>
        <IconArrowDown />
      </span>
    </button>
  </div>
);
  
export  {ShowDetailsButton, Mark};

