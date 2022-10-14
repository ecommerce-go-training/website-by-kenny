import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { memo } from 'react';

import './style.scss';

function Button({
  type = 'button',
  handleClick,
  children,
  disable = false,
  whiteBg = false,
  smallPad = false,
  border = false,
  discount = false,
}) {
  return (
    <button
      disabled={disable}
      type={type}
      className={classNames('button', {
        whiteBg : whiteBg,
        smallPad: smallPad,
        border  : border,
        discount: discount,
        blur    : disable,
      })}
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
  border     : false,
  discount   : false,
};

Button.propTypes = {
  type       : PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func,
  disable    : PropTypes.bool,
  whiteBg    : PropTypes.bool,
  smallPad   : PropTypes.bool,
  border     : PropTypes.bool,
  discount   : PropTypes.bool,
};

export default memo(Button);
