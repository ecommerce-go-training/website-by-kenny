import Stack from 'components/Stack';
import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Slider from 'components/Slider';
import Checkbox from 'components/checkbox';
import Announce from 'components/Announce';
import Collapse from 'components/Collapse';

import {
  beachEdit1,
  beachEdit2,
  beachEdit3,
  beachEdit4,
  newArrival1,
  newArrival2,
  newArrival3,
  newArrival4,
} from 'assets/images';

function Test() {
  const imgList = [
    beachEdit1,
    beachEdit2,
    beachEdit3,
    beachEdit4,
    newArrival1,
    newArrival2,
    newArrival3,
    newArrival4,
  ];

  return (
    <div
      style={{
        height   : 'auto',
        position : 'relative',
        marginTop: '160px',
      }}
    >
      <Announce />
      <Header />
      <Stack col spacing>
        <h1>Component Testing</h1>
        <Button>Gundeptrai</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Collapse label={'How to get a girlfriend'}>
          <Collapse label={'Bruh'}>
            <p>Wait me get one</p>
            <p>Ty</p>
          </Collapse>
        </Collapse>
      </Stack>
      <h1>Input check</h1>
      <br />
      <Input />
      <Input label='password' type='password' />
      <h1>Slider check</h1>
      <br />
      <Slider imgList={imgList} />
      <br />
      <h1>Checkbox check</h1>
      <Checkbox>
        <p>Tick here if you lonely</p>
      </Checkbox>
      <h1>Footer check</h1>
      <Footer />
    </div>
  );
}

export default Test;
