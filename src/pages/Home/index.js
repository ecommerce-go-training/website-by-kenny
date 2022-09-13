import classNames from 'classnames';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Stack from 'components/Stack';
import Button from 'components/Button';
import Header from 'components/Header';
import Slider from 'components/Slider';
import Footer from 'components/Footer';

import {
  w,
  ooo,
  build,
  subBg1,
  subBg2,
  model1,
  model2,
  background,
  beachEdit1,
  beachEdit2,
  beachEdit3,
  beachEdit4,
  newArrival1,
  newArrival2,
  newArrival3,
  newArrival4,
} from 'assets/images';

import './style.scss';

function Home() {
  const navigate = useNavigate();
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

  const [active, setActive] = useState(true);
  const toggleOn = classNames({
    active  : active,
    inactive: !active,
  });
  const toggleOff = classNames({
    active  : !active,
    inactive: active,
  });

  console.log('home render');

  return (
    <div>
      <Header />
      <div className='home'>
        <div className='home__background'>
          <img src={background} alt='background img' />
          <div className='home__background-intro'>
            <Stack col center>
              <p className='title'>&#39;ÉLEMUSH AURA&#39;</p>
              <p className='description'>
								The Resort 2021 collection is a love letter to our youth.
								Discover the <br />
								beauty of blooming flowers under the blue sky and sunny
              </p>
              <Link to='/'>explore the collection</Link>
            </Stack>
          </div>
        </div>
        <div className='home__slider'>
          <Stack row center spacing>
            <p
              onClick={() => setActive(true)}
              className={classNames('switch', toggleOn)}
            >
							shop new arrivals
            </p>
            <p
              onClick={() => setActive(false)}
              className={classNames('switch', toggleOff)}
            >
							shop best seller
            </p>
          </Stack>
          <Slider imgList={imgList} />
        </div>
        <div className='home__doublebg'>
          <img src={subBg1} alt='Knitwear bg img' />
          <img src={subBg2} alt='Beach edit bg img' />
        </div>
        <div className='home__slider'>
          <Stack row center spacing>
            <p className='switch active' to='/'>
							the beach edit
            </p>
          </Stack>
          <Slider imgList={imgList} shiftImg={4} />
        </div>
        <Link to='/' className='home__follow'>
					follow US @ÉLEMUSH.XO
        </Link>
        <div className='home__social'>
          <div>
            <img src={model1} alt='model info' />
          </div>
          <div>
            <img src={build} alt='model info' />
          </div>
          <div>
            <img src={ooo} alt='model info' />
          </div>
          <div>
            <img src={w} alt='model info' />
          </div>
          <div>
            <img src={model2} alt='model info' />
          </div>
        </div>
        <div className='home__signup'>
          <p className='title'>sign up for update</p>
          <p className='description'>
						Sign-up to receive 10% off your first purchase as well as the <br />
						latest updates on new arrivals, exclusive promotions and events.
          </p>
          <div className='home__signup-button'>
            <Button handleClick={() => navigate('/signUp')}>sign up</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
