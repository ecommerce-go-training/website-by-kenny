import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import Header from 'components/Header';
import Button from 'components/Button';
import Collapse from 'components/Collapse';
import Slider2 from 'components/sliderv2';

import {
  cataBackDress,
  cataPinkDress,
  cataPurpleDress,
  cataWhiteDress,
  whiteDress,
  greenDress,
  backDress,
  orangeDress,
} from 'assets/images';

import './style.scss';

function ItemDetails() {
  const { state } = useLocation();
  const [size, setSize] = useState(0);
  const { img, name, price, catalouge, description, details, care } = state;
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.ItemDetails',
  });
  const moreItem = [
    cataBackDress,
    cataPinkDress,
    cataPurpleDress,
    cataWhiteDress,
    whiteDress,
    greenDress,
    backDress,
    orangeDress,
  ];

  return (
    <div>
      <Header login disableAnnounce />
      <div className='details'>
        <div className='details__img'>
          <div>
            <img src={img} alt='testing img' />
          </div>
          <div>
            <img src={img} alt='testing img' />
          </div>
          <div>
            <img src={img} alt='testing img' />
          </div>
          <div>
            <img src={img} alt='testing img' />
          </div>
        </div>
        <div className='details__info'>
          <p>{catalouge}</p>
          <p>{name}</p>
          <p>
            {price} {t('$')}
          </p>
          <p>{description}</p>
          <div className='details__info-filter'>
            <div>
              <p>size</p>
              <div>
                <p
                  className={size === 0 ? 'active' : ''}
                  onClick={() => setSize(0)}
                >
									XS
                </p>
                <p
                  className={size === 1 ? 'active' : ''}
                  onClick={() => setSize(1)}
                >
									S
                </p>
                <p
                  className={size === 2 ? 'active' : ''}
                  onClick={() => setSize(2)}
                >
									M
                </p>
                <p
                  className={size === 3 ? 'active' : ''}
                  onClick={() => setSize(3)}
                >
									L
                </p>
              </div>
            </div>
            <div>
              <p>color</p>
              <input type='color' id='color1' value='#E3EBF2' />
            </div>
          </div>
          <Button>
            <p>{t('add to cart')}</p>
          </Button>
          <div className='details__info-faq'>
            <Collapse smallLabel label='product details'>
              <p className='info-item'>{details}</p>
            </Collapse>
            <Collapse smallLabel label='size & fit'>
              <p className='info-item'>
                {t('find your size')} <Link to='size'>sizing</Link>
              </p>
            </Collapse>
            <Collapse smallLabel label='shipping & returns'>
              <p className='info-item'>
                {t('shipping')} <Link to='/faq'>shipping & returns</Link>
              </p>
            </Collapse>
            <Collapse smallLabel label='garment care'>
              {care}
            </Collapse>
          </div>
        </div>
      </div>
      <div className='moreItem'>
        <p>{t('more')}</p>
        <Slider2 imgList={moreItem} />
      </div>
    </div>
  );
}

export default ItemDetails;
