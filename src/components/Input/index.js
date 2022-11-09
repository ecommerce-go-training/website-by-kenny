import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { closeEye, openEye } from 'assets/images';

import './style.scss';

const Input = ({
  register,
  error,
  centerError,
  name,
  label,
  type,
  inputCheck,
  greyBg,
}) => {
  const [togglePsw, setTogglePsw] = useState(true);
  const [inputType, setInputType] = useState(type);
  const [aim, setAim] = useState(false);
  const capFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

  const showPsw = classNames({
    'show-icon': true,
    hide       : type !== 'password',
  });

  const up = classNames({
    label    : true,
    'move-up': inputCheck || aim ? true : false,
    checkout : greyBg,
  });

  const errorClass = classNames({
    error         : true,
    'center-error': centerError,
  });

  return (
    <div className='input-row'>
      <div className='input-row-item'>
        <label className={up} htmlFor={label}>
          {capFirstLetter(label)}
        </label>
        <input
          {...register(name)}
          className={classNames({ input: true, greyBg: greyBg })}
          type={inputType}
          name={name}
          onFocus={() => setAim(true)}
          onBlur={() =>
            inputCheck && inputCheck.length === 0 ? setAim(true) : setAim(false)
          }
          id={label}
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
};

Input.defaultProps = {
  label      : 'Add something',
  type       : 'text',
  register   : null,
  error      : '',
  centerError: false,
  inputCheck : '',
  greyBg     : false,
};

Input.propTypes = {
  label      : PropTypes.string,
  type       : PropTypes.oneOf(['text', 'password', 'email']),
  register   : PropTypes.func,
  error      : PropTypes.string,
  centerError: PropTypes.bool,
  name       : PropTypes.string.isRequired,
  inputCheck : PropTypes.string,
  greyBg     : PropTypes.bool,
};

export default memo(Input);
