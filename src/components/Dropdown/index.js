import PropTypes from 'prop-types';

import { useState } from 'react';

import Stack from 'components/Stack';

import './style.scss';

function Dropdown({ label, description = [] }) {
  const [check, setCheck] = useState(false);
  const handleClick = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className='dropdown'>
      <p onClick={handleClick}>
        <i className={`bx bx-${check ? 'minus' : 'plus'}`}></i>
        {label}
      </p>
      <Stack direction='column' show={check}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Stack>
    </div>
  );
}

Dropdown.defaultProps = {
  label      : 'Add label',
  description: 'Add item list',
};

Dropdown.proptypes = {
  label      : PropTypes.string,
  description: PropTypes.array,
};

export default Dropdown;
