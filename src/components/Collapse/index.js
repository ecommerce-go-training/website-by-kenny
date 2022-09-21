import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { useState, memo } from 'react';

import Stack from 'components/Stack';

import { plus, minus } from 'assets/images/index';

import './style.scss';

function Collapse({ label, children, mobile }) {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const classes = classNames({
    collapse: true,
    mobile  : mobile,
  });

  return (
    <div className={classes}>
      <p className='collapse__title' onClick={handleClick}>
        <img src={toggle ? plus : minus} alt='plus, minus icon' />
        {label}
      </p>
      <Stack col disable={toggle}>
        {children}
      </Stack>
    </div>
  );
}

Collapse.defaultProps = {
  label : 'Add label',
  mobile: false,
};

Collapse.proptypes = {
  label : PropTypes.string,
  mobile: PropTypes.bool,
};

export default memo(Collapse);
