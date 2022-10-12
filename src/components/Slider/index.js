import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { useState, useEffect, useRef, memo } from 'react';

import { leftArrow, rightArrow } from 'assets/images';

import './style.scss';

const Slider = ({ images, shiftImg }) => {
  // desktop  4, tablet 3, mobile 1
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(true);
  const [imgToShow, setImgToShow] = useState(4);
  const slide = classNames({
    slider__img  : true,
    'slide-left' : direction,
    'slide-right': !direction,
  });
  let res = [];

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 900) setImgToShow(3);
      if (window.innerWidth < 738) setImgToShow(1);
      if (window.innerWidth > 900) setImgToShow(4);
    });
  });

  const handleLeft = () => {
    sliderRef.current.style.animation = '0.8s left-slide';
    setCurrentIndex(
      currentIndex === 0 ? images.length - shiftImg : currentIndex - shiftImg
    );
    setDirection(true);
    console.log(sliderRef.current.style);
  };

  const handleRight = () => {
    setCurrentIndex(
      currentIndex === images.length - shiftImg ? 0 : currentIndex + shiftImg
    );
    setDirection(false);
  };

  if (currentIndex + imgToShow > images.length) {
    res = [...images];
    const difference = currentIndex + imgToShow - images.length;
    for (let i = 0; i < difference; i++) {
      res.push(res.shift());
    }
  }

  const result = images
    .slice(currentIndex, currentIndex + imgToShow)
    .concat(res.slice(images.length - (currentIndex + imgToShow)));

  return (
  //mathrandom to trigger css animation each time compoent rerender
    <div key={Math.random()} className='slider'>
      <div className='slider__arrow'>
        <img onClick={handleLeft} src={leftArrow} alt='left arrow' />
      </div>
      <div className={slide} ref={sliderRef}>
        {result.slice(0, imgToShow).map((item, index) => (
          <div key={index}>
            <div className='img-container'>
              <img src={item} alt={`${item} image`} />
            </div>
            <p className='description'>new in dresses</p>
            <p className='description'>999.000VND</p>
          </div>
        ))}
      </div>
      <div className='slider__arrow'>
        <img onClick={handleRight} src={rightArrow} alt='right arrow' />
      </div>
    </div>
  );
};

Slider.defaultProps = {
  shiftImg: 1,
};

Slider.propTypes = {
  images  : PropTypes.array.isRequired,
  shiftImg: PropTypes.number,
};

export default memo(Slider);
