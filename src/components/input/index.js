import PropTypes from 'prop-types';
import { useState } from 'react';

import { closeEye, openEye } from 'assets/images';
import './style.scss';

function Input({ label, type }) {
  const firstLetterCap = (label) => label[0].toUpperCase() + label.slice(1);
  const [input, setInput] = useState('');
  const [togglePsw, setTogglePsw] = useState(false);
  const [inputType, setInputType] = useState(type);

  return (
    <div className='row'>
      <input
        className='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type={inputType}
        name={label}
      />
      <span style={{ bottom: input ? '30px' : '7px' }}>
        {firstLetterCap(label)}
      </span>
      <div style={{ display: type === 'password' ? '' : 'none' }}>
        <img
          style={{ display: togglePsw ? 'none' : '' }}
          onClick={() => {
            setTogglePsw(true);
            setInputType('text');
          }}
          src={closeEye}
          alt='hide password'
        />
        <img
          style={{ display: togglePsw ? '' : 'none' }}
          onClick={() => {
            setTogglePsw(false);
            setInputType('password');
          }}
          src={openEye}
          alt='show password'
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

export default Input;
