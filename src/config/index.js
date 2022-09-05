import Button from 'components/Button';
import Stack from 'components/Stack';
import Header from 'components/Header';

function Test() {
  return (
    <div style={{ height: '300vh', marginTop: '100px' }}>
      <Header />
      <Stack direction='column' spacing='4' wrap={false}>
        <h1>Component Testing</h1>
        <Button label='log in' />
        <Button label='sign up' size='med' />
        <Button label='buy' size='sm' />
        <Button />
      </Stack>
    </div>
  );
}

export default Test;
