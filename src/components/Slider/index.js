import PropTypes from 'prop-types';

import { useState } from 'react';

import { leftArrow, rightArrow } from 'assets/images';

import './style.scss';

function Slider({ imgList, imgToShow, shiftImg }) {
  // desktop  4, tablet 3, mobile 1
  const [currentIndex, setCurrentIndex] = useState(0);
  let res = [];

  const handleLeft = () => {
    setCurrentIndex(
      currentIndex === 0 ? imgList.length - shiftImg : currentIndex - shiftImg
    );
  };

  const handleRight = () => {
    setCurrentIndex(
      currentIndex === imgList.length - shiftImg ? 0 : currentIndex + shiftImg
    );
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

  return (
    <div className='slider'>
      <img
        className='slider__arrow'
        onClick={handleLeft}
        src={leftArrow}
        alt='left arrow'
      />
      <div className='slider__img'>
        {result.slice(0, imgToShow).map((item, index) => (
          <div key={index}>
            <img src={item} alt={`${item} image`} />
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
  imgToShow: 4,
  shiftImg : 1,
};

Slider.propTypes = {
  imgList  : PropTypes.array.isRequired,
  imgToShow: PropTypes.number,
  shiftImg : PropTypes.number,
};

export default Slider;
