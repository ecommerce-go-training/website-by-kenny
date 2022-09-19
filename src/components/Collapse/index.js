import PropTypes from 'prop-types';

import React, { useState, memo } from 'react';

import Stack from 'components/Stack';

import { plus, minus } from 'assets/images/index';

import './style.scss';

function Collapse({ label, children }) {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className='collapse'>
      <p onClick={handleClick}>
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
  label: 'Add label',
};

Collapse.proptypes = {
  label: PropTypes.string,
};

export default memo(Collapse);
