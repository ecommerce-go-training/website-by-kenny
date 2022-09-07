import { useState, memo } from 'react';
import PropTypes from 'prop-types';

import Stack from 'components/Stack';
import { plus, minus } from 'assets/images/index';
import './style.scss';

function Collapse({ label, description = [] }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className='collapse'>
      <p onClick={handleClick}>
        <img src={toggle ? minus : plus} alt='plus, minus icon' />
        {label}
      </p>
      <Stack direction='column' show={toggle}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Stack>
    </div>
  );
}

Collapse.defaultProps = {
  label      : 'Add label',
  description: 'Add item list',
};

Collapse.proptypes = {
  label      : PropTypes.string,
  description: PropTypes.array,
};

export default memo(Collapse);
