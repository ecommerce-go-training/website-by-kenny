import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Stack = ({ children, row, col, disable, spacing, center, colWrap }) => {
  const classes = classNames({
    stack  : true,
    row    : row,
    col    : col,
    disable: disable,
    center : center,
    spacing: spacing,
    colWrap: colWrap,
  });

  return <div className={classes}>{children}</div>;
};

Stack.defaultProps = {
  row: true,
  col: false,
};

Stack.propTypes = {
  row: PropTypes.bool,
  col: PropTypes.bool,
};

export default Stack;
