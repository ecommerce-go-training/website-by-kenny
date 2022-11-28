import React, { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useClickOutside } from 'utils/helpers';

import { xmark } from 'assets/images';

import './style.scss';

const QuickSizeGuide = ({ toggle }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.ItemDetails.Form',
  });

  let quickSizeRef = useClickOutside(() => toggle(false));

  const [sizeType, setSizeType] = useState(0);

  return (
    <div className='size-guide__container'>
      <div ref={quickSizeRef} className='size-guide'>
        <img onClick={() => toggle(false)} src={xmark} alt='icon image' />
        <div className='size-guide-form'>
          <p>{t('sizeGuide')}</p>
          <p>{t('sizeGuideDescription')}</p>
          <div className='size-guide-form-nav'>
            <p
              onClick={() => setSizeType(0)}
              className={sizeType === 0 ? 'active' : ''}
            >
              {t('sizeCoversation')}
            </p>
            <p
              onClick={() => setSizeType(1)}
              className={sizeType === 1 ? 'active' : ''}
            >
							CENTIMET
            </p>
            <p
              onClick={() => setSizeType(2)}
              className={sizeType === 2 ? 'active' : ''}
            >
							INCHES
            </p>
          </div>
          <div className='size-guide-form-info'>
            {sizeType === 0 && (
              <table>
                <tbody>
                  <tr>
                    <th>OUR SIZE</th>
                    <th>UK</th>
                    <th>FR</th>
                    <th>US</th>
                  </tr>
                  <tr>
                    <td>XS</td>
                    <td>4</td>
                    <td>32</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>6</td>
                    <td>34</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>8</td>
                    <td>36</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>10</td>
                    <td>38</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>14</td>
                    <td>42</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            )}

            {sizeType === 1 && (
              <table>
                <tbody>
                  <tr>
                    <th>OUR SIZE</th>
                    <th>CHEST</th>
                    <th>WAIST</th>
                    <th>BUST</th>
                  </tr>
                  <tr>
                    <td>XS</td>
                    <td>78</td>
                    <td>60</td>
                    <td>88</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>82</td>
                    <td>64</td>
                    <td>92</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>86</td>
                    <td>68</td>
                    <td>96</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>90</td>
                    <td>72</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>94</td>
                    <td>76</td>
                    <td>104</td>
                  </tr>
                </tbody>
              </table>
            )}

            {sizeType === 2 && (
              <table>
                <tbody>
                  <tr>
                    <th>OUR SIZE</th>
                    <th>CHEST</th>
                    <th>WAIST</th>
                    <th>BUST</th>
                  </tr>
                  <tr>
                    <td>XS</td>
                    <td>30.7</td>
                    <td>23.6</td>
                    <td>34.7</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>32.3</td>
                    <td>25.2</td>
                    <td>36.2</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>33.9</td>
                    <td>26.8</td>
                    <td>37.8</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>35.4</td>
                    <td>28.3</td>
                    <td>39.4</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>37</td>
                    <td>30</td>
                    <td>41</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(QuickSizeGuide);
