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
    spacing: spacing,
  });

  return <div className={classes}>{children}</div>;
}

Stack.defaultProps = {
  row: true,
  col: false,
};

Stack.propTypes = {
  row: PropTypes.bool,
  col: PropTypes.bool,
};

export default Stack;
