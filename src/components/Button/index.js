import PropTypes from 'prop-types';
import { memo } from 'react';
import classNames from 'classnames';

import './style.scss';

function Button({ type, handleClick, children }) {
  return (
    <button
      type={type}
      className={classNames(['button'])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type       : PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func.isRequired,
};

export default memo(Button);
