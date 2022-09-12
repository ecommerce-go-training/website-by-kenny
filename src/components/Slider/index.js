import PropTypes from 'prop-types';

import { useState, memo } from 'react';

import { leftArrow, rightArrow } from 'assets/images';

import './style.scss';

function Slider({ imgList }) {
  // desktop  4, tablet 3, mobile 1
  const imgToShow = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  let res = [];

  const handleLeft = () => {
    setCurrentIndex(
      currentIndex === 0 ? imgList.length - imgToShow : currentIndex - imgToShow
    );
  };

  const handleRight = () => {
    setCurrentIndex(
      currentIndex === imgList.length - imgToShow ? 0 : currentIndex + imgToShow
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
      <img onClick={handleLeft} src={leftArrow} alt='left arrow' />
      <div className='slider__img'>
        {result.slice(0, imgToShow).map((item, index) => (
          <img src={item} alt={`${item} image`} key={index} />
        ))}
      </div>
      <img onClick={handleRight} src={rightArrow} alt='right arrow' />
    </div>
  );
}

Slider.propTypes = {
  imgList: PropTypes.array.isRequired,
};

export default memo(Slider);
