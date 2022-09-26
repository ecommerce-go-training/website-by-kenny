import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Button from 'components/Button';

import {
  seasonBg,
  newMiniDress,
  newTop,
  newTop2,
  nextArrow,
  whiteDress,
} from 'assets/images';

import './style.scss';

function Season() {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Season' });

  return (
    <div>
      <Header />
      <div className='season'>
        <div className='season__bg'>
          <img src={seasonBg} alt='season background' />
          <div className='season__bg-intro'>
            <p>{t('smallTitle')}</p>
            <p>{t('bigTitle')}</p>
            <p>{t('intro')}</p>
            <div>
              <Button whiteBg smallPad>
                <p>discover</p>
              </Button>
            </div>
          </div>
        </div>
        <div className='season__doubleBg'>
          <div className='imgLeft'>
            <p>{t('headerLeft')}</p>
            <div>
              <img src={newMiniDress} alt='' />
              <Link to='/'>
                {t('newMiniDress')}
                <img src={nextArrow} alt='' />
              </Link>
            </div>
          </div>
          <div className='imgRight'>
            <div>
              <img src={newTop} alt='' />
              <Link to='/'>
                {t('newTop')}
                <img src={nextArrow} alt='' />
              </Link>
            </div>
            <p>{t('footerRight')}</p>
          </div>
        </div>
        <div className='season__doubleBg'>
          <div className='imgLeft'>
            <div>
              <img src={whiteDress} alt='' />
              <Link to='/'>
                {t('shopTheLook')}
                <img src={nextArrow} alt='' />
              </Link>
            </div>
          </div>
          <div className='imgRight'>
            <div>
              <img src={newTop2} alt='' />
              <Link to='/'>
                {t('newMiniDress')}
                <img src={nextArrow} alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Season;
