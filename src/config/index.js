import Stack from 'components/Stack';
import Input from 'components/input';
import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Dropdown from 'components/Dropdown';

function Test() {
  return (
    <div
      style={{
        height       : 'auto',
        position     : 'relative',
        marginTop    : '100px',
        display      : 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Stack direction='column' spacing='4' wrap={false}>
        <h1>Component Testing</h1>
        <Button size='sm' />
        <Button size='md' />
        <Button size='lg' />
        <Button size='sm' />
        <Button size='md' />
        <Button size='lg' />
        <Dropdown
          label={'Dropdown'}
          description={['Roses are red', 'Violets are blue', 'I love you']}
        />
        <Input />
        <Input label='password' type='password' />
      </Stack>
      <Footer />
    </div>
  );
}

export default Test;
