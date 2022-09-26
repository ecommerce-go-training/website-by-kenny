import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { plus, leftArrow, rightArrow } from 'assets/images';

import './style.scss';

function Slider2({ imgList }) {
  const sliderItem = useRef(null);

  const handleClick = () => {
    let view = sliderItem.current.scrollLeft;
    sliderItem.current.scrollLeft = sliderItem.current.offsetWidth * 10;
    if (sliderItem.current.scrollLeft === view && view > 0) {
      sliderItem.current.scrollLeft = 0;
    }
  };

  return (
    <div className='slider-container'>
      <div className='slider-button'>
        <img onClick={handleClick} src={leftArrow} alt='left arrow img' />
      </div>
      <div className='slider' ref={sliderItem}>
        {imgList.map((item, index) => (
          <div key={index} className='slider__item'>
            <div className='slider__item-img'>
              <img src={item} alt='item img' />
              <div>
                <img src={plus} alt='icon img' />
                <p>more info</p>
              </div>
            </div>
            <div className='slider__item-description'>
              <p>Add later</p>
            </div>
          </div>
        ))}
      </div>
      <div className='slider-button'>
        <img onClick={handleClick} src={rightArrow} alt='right arrow img' />
      </div>
    </div>
  );
}

Slider2.propTypes = {
  imgList: PropTypes.array.isRequired,
};

export default Slider2;
