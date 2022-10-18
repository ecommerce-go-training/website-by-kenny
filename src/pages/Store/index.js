import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { stockist, hcmShowroom, hnShowroom } from 'assets/images';

import './style.scss';

const Store = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Store' });
  const [page, setPage] = useState(0);

  const classes = classNames({
    store: true,
  });

  return (
    <div>
      <Header store />
      <div className={classes}>
        <div className='store__left'>
          <div className='store__left-nav'>
            <p>{t('ourStore')}</p>
            <div>
              <p
                onClick={() => setPage(0)}
                className={page === 0 ? 'active' : ''}
              >
								ha noi
              </p>
              <p
                onClick={() => setPage(1)}
                className={page === 1 ? 'active' : ''}
              >
								ho chi minh
              </p>
              <p
                onClick={() => setPage(2)}
                className={page === 2 ? 'active' : ''}
              >
                {t('stockist')}
              </p>
            </div>
          </div>
        </div>
        <div className='store__right'>
          {page === 0 && (
            <section>
              <div className='img'>
                <img src={hnShowroom} alt='img' />
              </div>
              <div className='showroom-info'>
                <div>
                  <h3>44A phan dinh phung, quan 7, hanoi city, vietnam</h3>
                  <p>{t('openHr')}</p>
                  <p>
                    {t('monday')} - {t('friday')} 10AM - 10PM
                  </p>
                  <br />
                  <p>{t('contact')}:</p>
                  <p>contact@elemush.com</p>
                  <p>+84 888 551 230</p>
                </div>
                <div>
                  <p>{t('description')}</p>
                  <Link to='/'>{t('viewMap')}</Link>
                </div>
              </div>
            </section>
          )}

          {page === 1 && (
            <section>
              <div className='img'>
                <img src={hcmShowroom} alt='img' />
              </div>
              <div className='showroom-info'>
                <div>
                  <h3>49A nguyen trai, district 1, hochiminh city, vietnam</h3>
                  <p>{t('openHr')}</p>
                  <p>
                    {t('monday')} - {t('sunday')} 10AM - 10PM
                  </p>
                  <br />
                  <p>{t('contact')}:</p>
                  <p>contact@elemush.com</p>
                  <p>+84 888 551 230</p>
                </div>
                <div>
                  <p>{t('description2')}</p>
                  <Link to='/'>{t('viewMap')}</Link>
                </div>
              </div>
            </section>
          )}

          {page === 2 && (
            <section>
              <div className='img'>
                <img src={stockist} alt='img' />
              </div>
              <div className='stockist-info'>
                <div>
                  <h3>online</h3>
                  <p>Moda Operdandi</p>
                  <p>https://www.ele.com/</p>
                  <br />
                  <p>Revolve</p>
                  <p>contact@elemush.com</p>
                </div>
                <div>
                  <h3>usa</h3>
                  <p>Opening hours:</p>
                  <p>Monday - Sunday 10AM - 10PM</p>
                  <br />
                  <p>Contact:</p>
                  <p>contact@elemush.com</p>
                  <p>+84 888 551 230</p>
                </div>
                <div>
                  <h3>australia</h3>
                  <p>Opening hours:</p>
                  <p>Monday - Sunday 10AM - 10PM</p>
                  <br />
                  <p>Contact:</p>
                  <p>contact@elemush.com</p>
                  <p>+84 888 551 230</p>
                </div>
                <div>
                  <h3>Asian</h3>
                  <p>Opening hours:</p>
                  <p>Monday - Sunday 10AM - 10PM</p>
                  <br />
                  <p>Contact:</p>
                  <p>contact@elemush.com</p>
                  <p>+84 888 551 230</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
      <div className='store-mobile'>
        <p onClick={() => setPage(0)} className={page === 0 ? 'active' : ''}>
					ha noi
        </p>
        <p onClick={() => setPage(1)} className={page === 1 ? 'active' : ''}>
					ho chi minh
        </p>
        <p onClick={() => setPage(2)} className={page === 2 ? 'active' : ''}>
          {t('stockist')}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
