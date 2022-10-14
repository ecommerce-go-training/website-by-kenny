import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Stack from 'components/Stack';
import Collapse from 'components/Collapse';

import {
  certificate,
  facebook,
  instagram,
  pinterest,
  tiktok,
  phone,
  mail,
} from 'assets/images';

import './style.scss';

function Footer({ paymentSuccess }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Footer',
  });

  return (
    <div>
      <div className={'footer'}>
        <div className='footer__follow'>
          <p className='title'>{t('follow')}</p>
          <Stack col spacing={0}>
            <Link to='/'>
              <img className='social' src={facebook} alt='facebook icon' />
							facebook
            </Link>
            <Link to='/'>
              <img className='social' src={instagram} alt='instagram icon' />{' '}
							instagram
            </Link>
            <Link to='/'>
              <img className='social' src={pinterest} alt='pinterest icon' />{' '}
							pinterest
            </Link>
            <Link to='/'>
              <img className='social' src={tiktok} alt='tiktok icon' /> tiktok
            </Link>
          </Stack>
          <p className='copyright'>{t('copyRight')}</p>
        </div>
        <div className='footer__about'>
          <p className='title'>{t('about')}</p>
          <Stack col>
            <Link to='/brand'>{t('brand')}</Link>
            <Link to='/store'>{t('storeLocator')}</Link>
          </Stack>
        </div>
        <div className='footer__customer'>
          <p className='title'>{t('customerCare')}</p>
          <Stack col>
            <Link to='/customer-support'>{t('faq')}</Link>
            <Link to='/size'>{t('size')}</Link>
            <Link to='/customer-support'>{t('shipping')}</Link>
            <Link to='/customer-support'>{t('terms')}</Link>
            <Link to='/customer-support'>{t('policy')}</Link>
            <Link to='/customer-support'>{t('garment')}</Link>
            <Link to='/customer-support'>{t('return')}</Link>
          </Stack>
        </div>
        <div className='footer__contact'>
          <p className='title'>{t('contact')}</p>
          <div className='footer__contact-mail'>
            <Link to='/'>
              <img className='contact' src={phone} alt='phone icon' /> + 84 986
							491 486
            </Link>
            <div className='info'>
              <img className='contact' src={mail} alt='mail icon' />
              <p>{t('customerService')}</p>
              <p>{t('whosesalse')}</p>
            </div>
            <img src={certificate} alt='certificate img' />
          </div>
        </div>
      </div>
      <div className='mobile-footer' direction='column'>
        {!paymentSuccess && (
          <div>
            <div
              className={classNames('mobile-footer-collapse', {
                hide: paymentSuccess,
              })}
            >
              <Collapse label='FOLLOW US'>
                <Link to='/'>FACEBOOK</Link>
                <Link to='/'>INSTAGRAM</Link>
                <Link to='/'>PINTEREST</Link>
                <Link to='/'>TIKTOK</Link>
              </Collapse>
            </div>
            <div className='line'></div>
            <div className='mobile-footer-collapse'>
              <Collapse label='ABOUT'>
                <Link to='/brand'>{t('brand')}</Link>
                <Link to='/store'>{t('storeLocator')}</Link>
              </Collapse>
            </div>
            <div className='line'></div>
            <div className='mobile-footer-collapse'>
              <Collapse label={'CUSTOMER CARE'}>
                <Link to='/'>{t('faq')}</Link>
                <Link to='/size'>{t('size')}</Link>
                <Link to='/'>{t('shipping')}</Link>
                <Link to='/'>{t('terms')}</Link>
                <Link to='/'>{t('terms')}</Link>
                <Link to='/'>{t('policy')}</Link>
                <Link to='/'>{t('return')}</Link>
              </Collapse>
            </div>
            <div className='line'></div>
          </div>
        )}
        <div className='mobile-footer__info'>
          <Link to='/'>
            <img className='contact' src={phone} alt='phone icon' />+ 84 986 491
						486
          </Link>
          <div>
            <img className='contact' src={mail} alt='mail icon' />
            <p>{t('customerService')}</p>
            <p>{t('whosesalse')}</p>
          </div>
          <p className='copyright'>{t('copyRight')}</p>
        </div>
      </div>
    </div>
  );
}

Footer.defaultProps = {
  paymentSuccess: false,
};

Footer.propTypes = {
  paymentSuccess: PropTypes.bool,
};

export default Footer;
