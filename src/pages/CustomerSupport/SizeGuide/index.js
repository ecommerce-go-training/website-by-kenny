import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';

import { sizeGuide } from 'assets/images';

import './style.scss';

const Size = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Size',
  });

  const [page, setPage] = useState(0);

  return (
    <div>
      <div className='size'>
        <div>
          <p className='title'>size guide</p>
          <p className='path'>
						HOME{' '}
            <span onClick={() => navigate(location.pathname)}>
              {' '}
              {location.pathname}
            </span>
          </p>
          <p className='description'>{t('description')}</p>
          <div className='nav'>
            <p
              className={page === 0 ? 'active' : ''}
              onClick={() => setPage(0)}
            >
							sizing conversation
            </p>
            <p
              className={page === 1 ? 'active' : ''}
              onClick={() => setPage(1)}
            >
							centimetres
            </p>
            <p
              className={page === 2 ? 'active' : ''}
              onClick={() => setPage(2)}
            >
							inches
            </p>
          </div>
          <div className='table'>
            {page === 0 && (
              <table>
                <tbody>
                  <tr>
                    <th>our size</th>
                    <th>uk</th>
                    <th>eu</th>
                    <th>us</th>
                  </tr>
                  <tr>
                    <td>XS</td>
                    <td>6</td>
                    <td>34</td>
                    <td>0-2</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>8</td>
                    <td>36</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>10</td>
                    <td>38</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>12</td>
                    <td>40</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>
            )}

            {page === 1 && (
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th>size xs</th>
                    <th>size s</th>
                    <th>size m</th>
                    <th>size l</th>
                  </tr>
                  <tr>
                    <td>bust</td>
                    <td>78</td>
                    <td>82</td>
                    <td>86</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>waist</td>
                    <td>60</td>
                    <td>64</td>
                    <td>68</td>
                    <td>72</td>
                  </tr>
                  <tr>
                    <td>hips</td>
                    <td>84</td>
                    <td>88</td>
                    <td>92</td>
                    <td>96</td>
                  </tr>
                </tbody>
              </table>
            )}

            {page === 2 && (
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th>size xs</th>
                    <th>size s</th>
                    <th>size m</th>
                    <th>size l</th>
                  </tr>
                  <tr>
                    <td>bust</td>
                    <td>30.7</td>
                    <td>32.3</td>
                    <td>33.9</td>
                    <td>35.4</td>
                  </tr>
                  <tr>
                    <td>waist</td>
                    <td>23.6</td>
                    <td>25.2</td>
                    <td>26.8</td>
                    <td>28.3</td>
                  </tr>
                  <tr>
                    <td>hips</td>
                    <td>33.1</td>
                    <td>34.6</td>
                    <td>36.2</td>
                    <td>37.8</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <div className='size-collapse'>
            <Collapse mobile label='ABOUT BUST, WAIST, HIPS'>
              <img className='small-size' src={sizeGuide} alt='size guide' />
            </Collapse>
          </div>
          <div className='explanation'>
            <div>
              <h1>{t('bust')}</h1>
              <p>{t('bustDes')}</p>
            </div>
            <div>
              <h1>{t('waist')}</h1>
              <p>{t('waistDes')}</p>
            </div>
            <div>
              <h1>{t('hips')}</h1>
              <p>{t('hipsDes')}</p>
            </div>
          </div>
        </div>
        <img src={sizeGuide} alt='size guide' />
      </div>
    </div>
  );
};

export default Size;
