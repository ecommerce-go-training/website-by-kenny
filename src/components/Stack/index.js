import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

function Stack({ children, row, col, disable, spacing, center }) {
  const classes = classNames({
    stack  : true,
    row    : row,
    col    : col,
    disable: disable,
    center : center,
  });

  return (
    <div style={{ gap: `${spacing}px` }} className={classes}>
      {children}
    </div>
  );
}

Stack.defaultProps = {
  row    : true,
  col    : false,
  spacing: 0,
};

Stack.propTypes = {
  row    : PropTypes.bool,
  col    : PropTypes.bool,
  spacing: PropTypes.number,
};

export default Stack;
