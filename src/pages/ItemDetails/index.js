import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/Header';
import Button from 'components/Button';
import Collapse from 'components/Collapse';
import Slider2 from 'components/Sliderv2';
import Slider3, { Slider3Item } from 'components/Sliderv3';
import WaitlistForm from './WaitlistForm';

import { formatCurrency } from 'utils/helpers';
import { getProduct } from 'global/redux/product/thunk';

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

const ItemDetails = () => {
  const { state } = useLocation();
  const { img, initColor } = state;
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.ItemDetails',
  });
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
    /* eslint-disable-next-line */
	}, []);

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

  const [size, setSize] = useState(0);
  const [color, setColor] = useState(initColor);
  const [toggleWaitForm, setToggleWaitForm] = useState(false);

  const handleWaitForm = () => setToggleWaitForm(!toggleWaitForm);

  return (
    <div>
      <Header catalouge disableAnnounce />
      <div className='details'>
        <Slider3>
          {img.map((item, index) => (
            <Slider3Item key={index}>
              <div>
                <img src={item} alt='dress image' />
              </div>
            </Slider3Item>
          ))}
        </Slider3>
        <div className='details__img'>
          {img.map((item, index) => (
            <div key={index}>
              <img src={item} alt='testing img' />
            </div>
          ))}
        </div>
        <div className='details__info'>
          <p>{currentProduct?.category?.name}</p>
          <p>{currentProduct?.name}</p>
          <p>
            {formatCurrency(
              'VND',
              currentProduct?.discount?.status
                ? currentProduct?.price -
										(currentProduct?.price *
											currentProduct?.discount?.percent) /
											100
                : currentProduct?.price
            )}
            {currentProduct?.discount?.status && (
              <span className='old-price'>
                {' '}
                {formatCurrency('VND', currentProduct?.price)}
              </span>
            )}
          </p>
          <p>{currentProduct?.description}</p>
          <div className='details__info-filter'>
            <div>
              <p>size</p>
              <div>
                {currentProduct?.inventories?.map((item, index) => (
                  <p
                    key={index}
                    className={size === index ? 'active' : ''}
                    onClick={() => {
                      setSize(index);
                      setColor(item.color);
                    }}
                  >
                    {item.size}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p>color</p>
              <input
                type='color'
                id='color1'
                defaultValue={color ? color : '#000000'}
              />
            </div>
          </div>
          <Button
            handleClick={currentProduct?.inventories ? null : handleWaitForm}
          >
            <p>
              {currentProduct?.inventories ? t('addToCart') : t('waitList')}
            </p>
          </Button>
          {toggleWaitForm && (
            <WaitlistForm
              imageName={currentProduct?.name}
              closeForm={() => setToggleWaitForm(false)}
            />
          )}
          <div className='details__info-faq'>
            <div>
              <Collapse smallLabel label='product details'>
                <p className='info-item'>{currentProduct?.detail}</p>
              </Collapse>
            </div>
            <div>
              <Collapse smallLabel label='size & fit'>
                <p className='info-item'>
                  {t('findYourSize')}{' '}
                  <Link to='/customer-support/size'>sizing</Link>
                </p>
              </Collapse>
            </div>
            <div>
              <Collapse smallLabel label='shipping & returns'>
                <p className='info-item'>
                  {t('shipping')}{' '}
                  <Link to='/customer-support/shipping'>
										shipping & returns
                  </Link>
                </p>
              </Collapse>
            </div>
            <div>
              <Collapse smallLabel label='garment care'>
                {currentProduct?.germentCare
                  ? currentProduct?.germentCare
                  : 'Wash with hand'}
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <div className='moreItem'>
        <p>{t('more')}</p>
        <Slider2 images={moreItem} />
      </div>
    </div>
  );
};

export default memo(ItemDetails);
