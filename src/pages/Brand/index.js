import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { ourStories } from 'assets/images';

import './style.scss';

const Brand = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Brand' });

  const classes = classNames({
    brand: true,
  });

  return (
    <div>
      <Header login />
      <div className={classes}>
        <div className='brand__left'>
          <div className='brand__left-nav'>
            <p>{t('brand')}/</p>
            <div>
              <p>{t('ourStory')}</p>
            </div>
          </div>
        </div>
        <div className='brand__right'>
          <section>
            <div className='img'>
              <img src={ourStories} alt='brand img' />
            </div>
            <div className='ourStories-info'>
              <div className='story-title'>
                <p>
                  {' '}
                  {t('the')} <span>{t('modern')}</span>{' '}
                </p>
                <div></div>
                <p>
                  {' '}
                  <span>{t('romantic')}</span> {t('women')}.{' '}
                </p>
              </div>
              <div>
                <p>{t('description')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;
