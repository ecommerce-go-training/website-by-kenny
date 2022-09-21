import React from 'react';

import classNames from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { ourStories } from 'assets/images';

import './style.scss';

function Brand() {
  const classes = classNames({
    brand: true,
  });

  return (
    <div>
      <Header store />
      <div className={classes}>
        <div className='brand__left'>
          <div className='brand__left-nav'>
            <p>brand /</p>
            <div>
              <p>our story</p>
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
									The <span>modern</span>{' '}
                </p>
                <div></div>
                <p>
                  {' '}
                  <span>romantic</span> women.{' '}
                </p>
              </div>
              <div>
                <p>
									A women’s ready-to-wear label by Gun Phan. He serves as
									Founder and Creative Director with a focus to meet the
									wardrobe needs of women all over the world. The brand name is
									sweet like an elegance mushrrom, sending rich and evocative
									messages through clothing.
                </p>
                <p>
									After graduating in Industrial Design, Gun became an accessory
									designer and freelance creative director. He founded Elemush
									in 2018 with the desire to change the style of young
									Vietnamese women. The design is aimed at femininity, softness
									with romantic poetic spirit.
                </p>
                <p>
									Artfully crafted and beautifully designed, each garment and
									accessory breathes new life into the ever-evolving female
									wardrobe. Our silhouettes are defined by fluidity, and remain
									wearable through the changing of trends and seasons. We are
									detailed and thoughtful in our manufacturing to ensure our
									clothes are not only affordable, but can withstand the test of
									time.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Brand;
