import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { TIME } from 'utils/constants';

import './style.scss';

const Slider3Item = ({ children }) => {
  return <div className='slider3-item'>{children}</div>;
};

function Slider3({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkImg, setCheckImg] = useState(false);

  /* eslint-disable */
	const updateIndex = (index) => {
		if (index < 0) {
			index = React.Children.count(children) - 1;
		} else if (index >= React.Children.count(children)) {
			index = 0;
		}
		setCurrentIndex(index);
	};
	/* eslint-enable */

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      if (!checkImg) updateIndex(currentIndex + 1);
    }, TIME.ONE_SECOND * 5);

    return () => {
      if (imageChangeInterval) clearInterval(imageChangeInterval);
    };
  });

  return (
    <div className='slider3'>
      <div
        className='inner'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={() => setCheckImg(true)}
        onMouseLeave={() => setCheckImg(false)}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className='slider3-button'>
        <button onClick={() => updateIndex(currentIndex - 1)}>Prev</button>
        {React.Children.map(children, (item, index) => {
          return (
            <button
              className={classNames({ active: index === currentIndex })}
              onClick={() => updateIndex(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button onClick={() => updateIndex(currentIndex + 1)}>Next</button>
      </div>
    </div>
  );
}

export { Slider3Item };
export default Slider3;
