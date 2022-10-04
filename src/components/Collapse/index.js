import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { useState, memo } from 'react';

import Stack from 'components/Stack';

import { plus, minus } from 'assets/images/index';

import './style.scss';

function Collapse({
  label,
  children,
  mobile,
  line,
  lineTop,
  filterCollapse,
  smallLabel,
  filter,
  lineSolid,
}) {
  const [toggle, setToggle] = useState(filterCollapse ? false : true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={classNames({
        collapse      : true,
        mobile        : mobile,
        line          : line,
        lineTop       : lineTop,
        normal        : filterCollapse,
        smallLabel    : smallLabel,
        collapseFilter: filter,
        lineSolid     : lineSolid,
      })}
    >
      <label
        className={classNames('collapse__title', { small: filterCollapse })}
        onClick={handleClick}
      >
        <img src={toggle ? plus : minus} alt='plus, minus icon' />
        {label}
      </label>
      <Stack col colWrap={filterCollapse} disable={toggle}>
        {children}
      </Stack>
    </div>
  );
}

Collapse.defaultProps = {
  label         : 'Add label',
  mobile        : false,
  line          : false,
  lineTop       : false,
  filterCollapse: false,
  small         : false,
  filter        : false,
  lineSolid     : false,
};

Collapse.proptypes = {
  label         : PropTypes.string,
  mobile        : PropTypes.bool,
  line          : PropTypes.bool,
  lineTop       : PropTypes.bool,
  filterCollapse: PropTypes.bool,
  small         : PropTypes.bool,
  filter        : PropTypes.bool,
  lineSolid     : PropTypes.bool,
};

export default memo(Collapse);
