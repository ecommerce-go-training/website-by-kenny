import classNames from 'classnames';

import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import Stack from 'components/Stack';
import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Slider2 from 'components/Sliderv2';

import {
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
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Home' });
  const navigate = useNavigate();
  const images = [
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
    active: active,
  });
  const toggleOff = classNames({
    active: !active,
  });

  return (
    <div>
      <Header />
      <div className='home'>
        <div className='home__background'>
          <div className='home__background-img'>
            <img src={background} alt='background img' />
          </div>
          <div className='home__background-intro'>
            <div>
              <p className='title'>&#39;ÉLEMUSH AURA&#39;</p>
              <p className='description'>
                {t('description1')} <br /> {t('description2')}
              </p>
              <Link to='/'>{t('explore')}</Link>
            </div>
          </div>
        </div>
        <div className='home__slider'>
          <Stack row center spacing>
            <p
              onClick={() => setActive(true)}
              className={classNames('switch', toggleOn)}
            >
              {window.innerWidth < 737 ? 'new arrivals' : 'shop new arrivals'}
            </p>
            <p
              onClick={() => setActive(false)}
              className={classNames('switch', toggleOff)}
            >
              {window.innerWidth < 737 ? 'best seller' : 'shop best seller'}
            </p>
          </Stack>
          <Slider2 images={images} />
        </div>
        <div className='home__doublebg'>
          <img src={subBg1} alt='Knitwear bg img' />
          <img src={subBg2} alt='Beach edit bg img' />
        </div>
        <div className='home__slider'>
          <Stack row center spacing>
            <p className='switch active' to='/'>
              {t('theBeachEdit')}
            </p>
          </Stack>
          <Slider2 images={images} />
        </div>
        <Link to='/' className='home__follow'>
          {t('follow')} @ÉLEMUSH.XO
        </Link>
        <div className='home__social'>
          <div>
            <img src={model1} alt='model info' />
          </div>
          <div>
            <img src={model2} alt='model info' />
          </div>
          <div>
            <img src={model1} alt='model info' />
          </div>
          <div>
            <img src={model2} alt='model info' />
          </div>
          <div>
            <img src={model1} alt='model info' />
          </div>
        </div>
        <div className='home__signup'>
          <p className='title'>{t('signUpUpdate')}</p>
          <p className='description'>{t('description3')}</p>
          <div className='home__signup-button'>
            <Button handleClick={() => navigate('/sign-up')}>
              {t('signUp')}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
