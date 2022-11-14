import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

import { plus, leftArrow, rightArrow } from 'assets/images';

import './style.scss';

const Slider2 = ({ data }) => {
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
        {data?.map((item, index) => (
          <div key={index} className='slider__item'>
            <div className='slider__item-img'>
              <img
                onClick={() =>
                  navigate(`/details/${item.id}`, {
                    state: {
                      img: item?.image?.detailImages,
                    },
                  })
                }
                src={item?.image?.mainImage}
                alt='item img'
              />
              <div
                onClick={() =>
                  navigate(`/details/${item.id}`, {
                    state: {
                      img: item?.image?.detailImages,
                    },
                  })
                }
              >
                <img src={plus} alt='icon img' />
                <p>more info</p>
              </div>
            </div>
            <div className='slider__item-description'>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='slider-button'>
        <img onClick={handleClick} src={rightArrow} alt='right arrow img' />
      </div>
    </div>
  );
};

Slider2.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Slider2;
