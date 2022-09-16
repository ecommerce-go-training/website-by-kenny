import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { useState, memo } from 'react';

import { closeEye, openEye } from 'assets/images';

import './style.scss';

function Input({ register, error, centerError, name, label, type }) {
  const [togglePsw, setTogglePsw] = useState(true);
  const [inputType, setInputType] = useState(type);
  const [inputCheck, setInputCheck] = useState(false);
  const capFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

  const showPsw = classNames({
    'show-icon': true,
    hide       : type !== 'password',
  });

  const up = classNames({
    label    : true,
    'move-up': inputCheck,
  });

  const errorClass = classNames({
    error         : true,
    'center-error': centerError,
  });

  const handleBlur = (e) => {
    const input = e.target.value;
    if (input) setInputCheck(true);
    else setInputCheck(false);
  };

  return (
    <div className='input-row'>
      <div className='input-row-item'>
        <label className={up} htmlFor={label}>
          {capFirstLetter(label)}
        </label>
        <input
          {...register(name)}
          className='input'
          type={inputType}
          name={label}
          onFocus={() => setInputCheck(true)}
          onBlur={handleBlur}
        />
        <span className={showPsw}>
          <img
            onClick={() => {
              setTogglePsw(!togglePsw);
              setInputType(togglePsw ? 'text' : 'password');
            }}
            src={togglePsw ? closeEye : openEye}
            alt='show-hide password'
          />
        </span>
      </div>
      <p className={errorClass}>{error}</p>
    </div>
  );
}

Input.defaultProps = {
  label: 'Add something',
  type : 'text',
};

Input.propTypes = {
  label: PropTypes.string,
  type : PropTypes.oneOf(['text', 'password', 'email']),
};

export default memo(Input);
