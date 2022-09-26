import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { nextArrow } from 'assets/images';

import './style.scss';

function DoubleBg({
  desLeft,
  imgLeft,
  imgLeftLink,
  desRight,
  imgRight,
  imgRightLink,
  leftBot,
  rightBot,
  upperCase,
}) {
  const upper = classNames({
    upper: upperCase,
  });

  return (
    <div className='season__doubleBg'>
      <div className='imgLeft'>
        {desLeft && !leftBot && <p className={upper}>{desLeft}</p>}
        <div>
          <img src={imgLeft} alt='' />
          <Link to='/'>
            {imgLeftLink}
            <img src={nextArrow} alt='' />
          </Link>
        </div>
        {leftBot && desLeft && <p>{desLeft}</p>}
      </div>
      <div className='imgRight'>
        {desRight && !rightBot && <p>{desRight}</p>}
        <div>
          <img src={imgRight} alt='' />
          <Link to='/'>
            {imgRightLink}
            <img src={nextArrow} alt='' />
          </Link>
        </div>
        {rightBot && desRight && <p>{desRight}</p>}
      </div>
    </div>
  );
}

DoubleBg.defaultProps = {
  desLeft     : null,
  desRight    : null,
  imgLeftLink : 'Image link',
  imgRightLink: 'Image link',
  hideDes     : false,
  leftBot     : false,
  rightBot    : false,
  upperCase   : false,
};

DoubleBg.propTypes = {
  imgLeftLink : PropTypes.string,
  imgRightLink: PropTypes.string,
  desLeft     : PropTypes.string,
  desRight    : PropTypes.string,
  leftBot     : PropTypes.bool,
  rightBot    : PropTypes.bool,
  hideDes     : PropTypes.bool,
  upperCase   : PropTypes.bool,
};

export default DoubleBg;
