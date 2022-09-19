import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import classNames from 'classnames';

import { stockist, showRoom, ourStories } from 'assets/images';

import './style.scss';

function Store() {
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
            <p>our store</p>
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
								stockists
              </p>
            </div>
          </div>
        </div>
        <div className='store__right'>
          {page === 0 && (
            <section>
              <div className='img'>
                <img src={ourStories} alt='img' />
              </div>
              <div className='ourStories-info'>
                <p>
									The <span>modern</span> <div></div>
                  <span>romantic</span> women.
                </p>
                <div>
                  <p>
										A women’s ready-to-wear label by Thanh Duong Nguyen. He
										serves as Founder and Creative Director with a focus to meet
										the wardrobe needs of women all over the world. The brand
										name is sweet like a love letter, sending rich and evocative
										messages through clothing.
                  </p>
                  <p>
										After graduating in Industrial Design, Thanh Duong Nguyen
										became an accessory designer and freelance creative
										director. He founded Dear José in 2018 with the desire to
										change the style of young Vietnamese women. The design is
										aimed at femininity, softness with romantic poetic spirit.
                  </p>
                  <p>
										Artfully crafted and beautifully designed, each garment and
										accessory breathes new life into the ever-evolving female
										wardrobe. Our silhouettes are defined by fluidity, and
										remain wearable through the changing of trends and seasons.
										We are detailed and thoughtful in our manufacturing to
										ensure our clothes are not only affordable, but can
										withstand the test of time.
                  </p>
                </div>
              </div>
            </section>
          )}

          {page === 1 && (
            <section>
              <div className='img'>
                <img src={showRoom} alt='img' />
              </div>
              <div className='showroom-info'>
                <div>
                  <h3>49A nguyen trai, district 1, hochiminh city, vietnam</h3>
                  <p>Opening hours:</p>
                  <p>Monday - Sunday 10AM - 10PM</p>
                  <br />
                  <p>Contact:</p>
                  <p>contact@elemush.com</p>
                  <p>+84 888 551 230</p>
                </div>
                <div>
                  <p>
										Our new era is marked by a new concept store with endless
										inspiration from fairy tales. We believe fashion is a
										miracle of this world by creating beautiful things and
										conveying civilized stories. Discover our store to not only
										dress in José, but also to feel José.
                  </p>
                  <Link to='/'>view the map here</Link>
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
                  <p>https://www.modaoperandi.com/</p>
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
    </div>
  );
}

export default Store;
