import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Stack from 'components/Stack';
import Dropdown from 'components/Dropdown';
import { certificate } from 'assets/images';

import './style.scss';

function Footer() {
  const [mobileCheck, setMobileCheck] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 738) setMobileCheck(true);
      else setMobileCheck(false);
    });
  });

  return (
    <div>
      <div
        style={{ display: mobileCheck ? 'none' : 'flex' }}
        className='footer'
      >
        <div className='footer__follow'>
          <p className='title'>follow us</p>
          <Stack direction='column' spacing={0}>
            <Link to='/'>
              <i className='bx bxl-facebook'></i>facebook
            </Link>
            <Link to='/'>
              <i className='bx bxl-instagram'></i>instagram
            </Link>
            <Link to='/'>
              <i className='bx bxl-pinterest-alt'></i>pinterest
            </Link>
            <Link to='/'>
              <i className='bx bxl-tiktok'></i>tiktok
            </Link>
          </Stack>
          <p className='copyright'>© 2020 Élemush All Rights Reserved.</p>
        </div>
        <div className='footer__about'>
          <p className='title'>about</p>
          <Stack direction='column' spacing={0}>
            <Link to='/'>brand</Link>
            <Link to='/'>store locator</Link>
          </Stack>
        </div>
        <div className='footer__customer'>
          <p className='title'>customer care</p>
          <Stack direction='column' spacing={0}>
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
              <i className='bx bx-phone'></i>+ 84 986 491 486
            </Link>
            <div className='info'>
              <i className='bx bx-envelope'></i>
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
        <Dropdown
          label={'FOLLOW US'}
          description={['FACEBOOK', 'INSTAGRAM', 'PINTEREST', 'TIKTOK']}
        />
        <div className='line'></div>
        <Dropdown label={'ABOUT'} description={['BRAND', 'STORE LOCATOR']} />
        <div className='line'></div>
        <Dropdown
          label={'CUSTOMER CARE'}
          description={[
            'FAQ',
            'SIZING',
            'SHIPPING & RETURNS',
            'TERMS & CONDITIONS',
            'GARMENT CARE',
            'MAKE A RETURN',
          ]}
        />
        <div className='line'></div>
        <div className='mobile-footer__info'>
          <Link to='/'>
            <i className='bx bx-phone'></i>+ 84 986 491 486
          </Link>
          <div>
            <i className='bx bx-envelope'></i>
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

export default Footer;
