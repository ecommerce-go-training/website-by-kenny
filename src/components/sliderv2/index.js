import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

import { plus, leftArrow, rightArrow } from 'assets/images';

import './style.scss';

function Slider2({ images }) {
  const navigate = useNavigate();
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
        {images.map((item, index) => (
          <div key={index} className='slider__item'>
            <div className='slider__item-img'>
              <img
                onClick={() =>
                  navigate('/details:id', {
                    state: {
                      img        : item,
                      name       : item.name || 'add name',
                      price      : item.price || 'add price',
                      catalouge  : item.catalouge || 'add catalouge',
                      description: item.description || 'add des',
                      care       : item.care || 'add garment care',
                      details    : item.details || 'add item details',
                    },
                  })
                }
                src={item}
                alt='item img'
              />
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
