import Stack from 'components/Stack';

import './style.scss';

function Checkbox({ children }) {
  return (
    <Stack row center>
      <input type='checkbox' className='checkbox' />
      <p>{children}</p>
    </Stack>
  );
}

export default Checkbox;
