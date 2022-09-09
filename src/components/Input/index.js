import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useState, memo } from 'react';

import { closeEye, openEye } from 'assets/images';

import './style.scss';

function Input({ label, type }) {
  const firstLetterCap = (label) => label[0].toUpperCase() + label.slice(1);
  const [input, setInput] = useState('');
  const [togglePsw, setTogglePsw] = useState(true);
  const [inputType, setInputType] = useState(type);

  const classes = classNames({
    'input-row': true,
    up         : input,
  });

  const showPsw = classNames({
    'show-icon': true,
    hide       : type !== 'password',
  });

  return (
    <div className={classes}>
      <input
        className='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type={inputType}
        name={label}
      />
      <span>{firstLetterCap(label)}</span>
      <div className={showPsw}>
        <img
          onClick={() => {
            setTogglePsw(!togglePsw);
            setInputType(togglePsw ? 'text' : 'password');
          }}
          src={togglePsw ? closeEye : openEye}
          alt='show-hide password'
        />
      </div>
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
