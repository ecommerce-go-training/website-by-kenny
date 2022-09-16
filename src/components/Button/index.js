import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { memo } from 'react';

import './style.scss';

function Button({ type, handleClick, children, disable }) {
  return (
    <button
      disabled={disable}
      type={type}
      className={classNames(['button'])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type       : 'button',
  handleClick: null,
};

Button.propTypes = {
  type       : PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func,
};

export default memo(Button);
