import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { stockist, hcmShowroom, hnShowroom } from 'assets/images';

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
                <img src={hnShowroom} alt='img' />
              </div>
              <div className='showroom-info'>
                <div>
                  <h3>44A phan dinh phung, quan 7, hanoi city, vietnam</h3>
                  <p>Opening hours:</p>
                  <p>Monday - Sunday 10AM - 10PM</p>
                  <br />
                  <p>Contact:</p>
                  <p>contact@elemush.com</p>
                  <p>+84 888 551 230</p>
                </div>
                <div>
                  <p>
										Our new era is marked by a new concept store with limitless
										inspiration from stories. Our duty is bringing a miracle to
										this world by creating beautiful dresses and conveying
										civilized stories. Discover our store to not only dress in
										Elemush, but also to feel its elegance.
                  </p>
                  <Link to='/'>view the map here</Link>
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
										dress in Elemush, but also to feel its elegance.
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
      <Footer />
    </div>
  );
}

export default Store;
