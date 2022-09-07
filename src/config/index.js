import Stack from 'components/Stack';
import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announce';
import Collapse from 'components/Collapse';

function Test() {
  return (
    <div
      style={{
        height       : 'auto',
        position     : 'relative',
        marginTop    : '160px',
        display      : 'flex',
        flexDirection: 'column',
      }}
    >
      <Announce />
      <Header />
      <Stack direction='column' spacing='4' wrap={false}>
        <h1>Component Testing</h1>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Collapse
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
