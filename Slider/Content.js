import React from 'react';
import { IconCross } from './Icon';
import Player from './videoPlayer';

const Content = ({ movie, onClose, startGame }) => (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div className="content__background__image"> <Player url={movie.videoBg}/> </div>
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">
          <p>{movie.desc}</p>
          {
            movie.playable?
            <button className="playButton" onClick={() => startGame(movie.playable, movie.appid)}>Play</button>
            :movie.free?
            <p>AVAILABLE WITH ALL PLANS</p>
            :<p>AVAILABLE WITH PRO AND MASTER PLANS</p>
          }
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;