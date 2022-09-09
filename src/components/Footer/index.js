import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

function Footer() {
  const [mobileCheck, setMobileCheck] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 738) setMobileCheck(true);
      else setMobileCheck(false);
    });
  });

  const classes = classNames({
    footer : true,
    disable: mobileCheck,
  });

  return (
    <div>
      <div className={classes}>
        <div className='footer__follow'>
          <p className='title'>follow us</p>
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
          <p className='copyright'>© 2020 Élemush All Rights Reserved.</p>
        </div>
        <div className='footer__about'>
          <p className='title'>about</p>
          <Stack col>
            <Link to='/'>brand</Link>
            <Link to='/'>store locator</Link>
          </Stack>
        </div>
        <div className='footer__customer'>
          <p className='title'>customer care</p>
          <Stack col>
            <Link to='/'>faq</Link>
            <Link to='/'>sizing</Link>
            <Link to='/'>shipping & returns</Link>
            <Link to='/'>terms & conditions</Link>
            <Link to='/'>privacy policy</Link>
            <Link to='/'>garment care</Link>
            <Link to='/'>make a return</Link>
          </Stack>
        </div>
        <div className='footer__contact'>
          <p className='title'>contact us</p>
          <div className='footer__contact-mail'>
            <Link to='/'>
              <img className='contact' src={phone} alt='phone icon' /> + 84 986
							491 486
            </Link>
            <div className='info'>
              <img className='contact' src={mail} alt='mail icon' />
              <p>
								customer services <br />
								CONTACT@ELEMUSH.COM
              </p>
              <p>
								whosesales & pressed <br />
								TEAM@ELEMUSH.COM
              </p>
            </div>
            <img src={certificate} alt='certificate img' />
          </div>
        </div>
      </div>
      <div
        className='mobile-footer'
        direction='column'
        style={{ display: mobileCheck ? 'flex' : 'none' }}
      >
        <Collapse label='FOLLOW US'>
          <p>FACEBOOK</p>
          <p>INSTAGRAM</p>
          <p>PINTEREST</p>
          <p>TIKTOK</p>
        </Collapse>
        <div className='line'></div>
        <Collapse label='ABOUT'>
          <p>BRAND</p>
          <p>STORE LOCATOR</p>
        </Collapse>
        <div className='line'></div>
        <Collapse label={'CUSTOMER CARE'}>
          <p>FAQ</p>
          <p>SIZING</p>
          <p>SHIPPING & RETURNS</p>
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>GARMENT CARE</p>
          <p>MAKE A RETURN</p>
        </Collapse>
        <div className='line'></div>
        <div className='mobile-footer__info'>
          <Link to='/'>
            <img className='contact' src={phone} alt='phone icon' />+ 84 986 491
						486
          </Link>
          <div>
            <img className='contact' src={mail} alt='mail icon' />
            <p>
              {' '}
              <b>customer services</b> <br />
              <br /> CONTACT@ELEMUSH.COM
            </p>
            <p>
              {' '}
              <b>whosesales & pressed</b> <br />
              <br /> TEAM@ELEMUSH.COM
            </p>
          </div>
          <p className='copyright'>© 2020 Élemush All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

Footer.defaultProps = {
  disable: false,
};

Footer.propTypes = {
  disable: PropTypes.bool,
};

export default Footer;
