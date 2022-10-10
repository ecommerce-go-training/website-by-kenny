import React from 'react';

import Stack from 'components/Stack';

import './style.scss';

function Checkbox({ children }) {
  return (
    <Stack row center>
      <input type='checkbox' className='checkbox' />
      {children}
    </Stack>
  );
}

export default Checkbox;
