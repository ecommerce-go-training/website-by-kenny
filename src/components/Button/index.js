import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { memo } from 'react';

import './style.scss';

function Button({ type, handleClick, children, disable, whiteBg, smallPad }) {
  return (
    <button
      disabled={disable}
      type={type}
      className={classNames('button', { whiteBg: whiteBg, smallPad: smallPad })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type       : 'button',
  handleClick: null,
  disable    : false,
  whiteBg    : false,
  smallPad   : false,
};

Button.propTypes = {
  type       : PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func,
  disable    : PropTypes.bool,
  whiteBg    : PropTypes.bool,
  smallPad   : PropTypes.bool,
};

export default memo(Button);
