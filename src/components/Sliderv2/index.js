import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

import { formatCurrency } from 'utils/helpers';

import { plus, leftArrow, rightArrow } from 'assets/images';

import './style.scss';

const Slider2 = ({ data, handleClick }) => {
  const navigate = useNavigate();
  const sliderItem = useRef(null);

  const handleClickNav = () => {
    let view = sliderItem.current.scrollLeft;
    sliderItem.current.scrollLeft = sliderItem.current.offsetWidth * 10;
    if (sliderItem.current.scrollLeft === view && view > 0) {
      sliderItem.current.scrollLeft = 0;
    }
  };

  return (
    <div className='slider-container'>
      <div className='slider-button'>
        <img onClick={handleClickNav} src={leftArrow} alt='left arrow img' />
      </div>
      <div className='slider' ref={sliderItem}>
        {data?.map((item, index) => (
          <div key={index} className='slider__item'>
            <div className='slider__item-img'>
              <img
                onClick={() => handleClick(item)}
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
              <p>{formatCurrency('VND', item.totalPrice)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='slider-button'>
        <img onClick={handleClickNav} src={rightArrow} alt='right arrow img' />
      </div>
    </div>
  );
};

Slider2.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Slider2;
