import React from 'react'
import { IconArrowDown } from './Icon';

const SliderWrapper = ({ children }) => (
  <div className="slider-wrapper">
    {children}
  </div>
);

const SlideButton = ( {onClick, type} ) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export { SlideButton, SliderWrapper };
