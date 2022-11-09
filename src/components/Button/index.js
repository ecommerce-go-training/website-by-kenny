import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Loading from 'components/Loading';

import './style.scss';

const Button = ({
  type = 'button',
  handleClick,
  children,
  disable = false,
  whiteBg = false,
  smallPad = false,
  border = false,
  discount = false,
  greyBorder = false,
  login = false,
  isLoading,
}) => {
  return (
    <button
      disabled={disable}
      type={type}
      className={classNames('button', {
        whiteBg   : whiteBg,
        smallPad  : smallPad,
        border    : border,
        discount  : discount,
        blur      : disable,
        greyBorder: greyBorder,
        loginBtn  : login,
      })}
      onClick={handleClick}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

Button.defaultProps = {
  type       : 'button',
  handleClick: null,
  disable    : false,
  whiteBg    : false,
  smallPad   : false,
  border     : false,
  discount   : false,
  greyBorder : false,
  login      : false,
};

Button.propTypes = {
  type       : PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func,
  disable    : PropTypes.bool,
  whiteBg    : PropTypes.bool,
  smallPad   : PropTypes.bool,
  border     : PropTypes.bool,
  discount   : PropTypes.bool,
  greyBorder : PropTypes.bool,
  login      : PropTypes.bool,
};

export default memo(Button);
