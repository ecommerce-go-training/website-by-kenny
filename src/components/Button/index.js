import PropTypes from 'prop-types';

import './style.scss';

function Button({ label, size, handleClick }) {
  let width = 100;
  if (size === 'sm') width = 25;
  if (size === 'med') width = 50;
  if (size === 'lg') width = 100;

  const style = {
    width: `${width}%`,
  };

  return (
    <button className='button' style={style} onClick={handleClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: 'submit',
  size : 'lg',
};

Button.propTypes = {
  label  : PropTypes.string,
  size   : PropTypes.oneOf(['sm', 'med', 'lg']),
  onClick: PropTypes.func.isRequired,
};

export default Button;
