import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { useState, useEffect, useRef, memo } from 'react';

import { leftArrow, rightArrow } from 'assets/images';

import './style.scss';

function Slider({ imgList, shiftImg }) {
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
      if (window.innerWidth < 1300) setImgToShow(3);
      if (window.innerWidth < 738) setImgToShow(1);
      else setImgToShow(4);
    });
  });

  const handleLeft = () => {
    sliderRef.current.style.animation = '0.8s left-slide';
    setCurrentIndex(
      currentIndex === 0 ? imgList.length - shiftImg : currentIndex - shiftImg
    );
    setDirection(true);
    console.log(sliderRef.current.style);
  };

  const handleRight = () => {
    setCurrentIndex(
      currentIndex === imgList.length - shiftImg ? 0 : currentIndex + shiftImg
    );
    setDirection(false);
  };

  if (currentIndex + imgToShow > imgList.length) {
    res = [...imgList];
    const difference = currentIndex + imgToShow - imgList.length;
    for (let i = 0; i < difference; i++) {
      res.push(res.shift());
    }
  }

  const result = imgList
    .slice(currentIndex, currentIndex + imgToShow)
    .concat(res.slice(imgList.length - (currentIndex + imgToShow)));

  console.log('direction', direction);

  return (
  //mathrandom to trigger css animation each time compoent rerender
    <div key={Math.random()} className='slider'>
      <img
        className='slider__arrow'
        onClick={handleLeft}
        src={leftArrow}
        alt='left arrow'
      />
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
      <img
        className='slider__arrow'
        onClick={handleRight}
        src={rightArrow}
        alt='right arrow'
      />
    </div>
  );
}

Slider.defaultProps = {
  shiftImg: 1,
};

Slider.propTypes = {
  imgList : PropTypes.array.isRequired,
  shiftImg: PropTypes.number,
};

export default memo(Slider);
