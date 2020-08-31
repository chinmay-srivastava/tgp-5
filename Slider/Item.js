import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import {ShowDetailsButton,Mark} from './Mark'

const Item = ({ game, startGame }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === game.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <img src= {game.image} onClick={() => onSelectSlide(game)} style={game.overlay?{opacity:'100%'}:{opacity:'50%'}} />
          <ShowDetailsButton onClick={() => onSelectSlide(game)} startGame={() => startGame(game.playable, game.appid)} showButton={game.playable} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
