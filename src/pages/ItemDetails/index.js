import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/Header';
import Button from 'components/Button';
import Collapse from 'components/Collapse';
import Slider2 from 'components/Sliderv2';
import Slider3, { Slider3Item } from 'components/Sliderv3';
import Loading from 'components/Loading';
import WaitlistForm from './WaitlistForm';

import { formatCurrency } from 'utils/helpers';
import { getProduct } from 'global/redux/product/thunk';
import { addItem, addItemQuantity } from 'global/redux/cart/slice';

import { showNoti } from 'utils/helpers';

import { blackCheck } from 'assets/images';

import QuickSizeGuide from './SizeGuide/index';

import './style.scss';

const ItemDetails = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.ItemDetails',
  });

  const navigate = useNavigate();

  const { state } = useLocation();
  const { img } = state;

  const dispatch = useDispatch();

  const { currentProduct, productList, isLoading } = useSelector(
    (state) => state.product
  );
  const { cartItem } = useSelector((state) => state.cart);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
    /* eslint-disable-next-line */
	}, [id]);

  const moreItem = [...productList].sort(() => 0.5 - Math.random()).slice(0, 8);

  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [toggleWaitForm, setToggleWaitForm] = useState(false);

  const handleWaitForm = () => setToggleWaitForm(!toggleWaitForm);

  const handleAddItem = (data) => {
    if (color && size) {
      if (
        cartItem
          .filter((item) => item.id === data.id)
          .filter(
            (item) => item.color === data.color && item.size === data.size
          ).length > 0
      ) {
        const index = cartItem.findIndex(
          (item) => item.color === data.color && item.size === data.size
        );
        dispatch(addItemQuantity(index));
      } else {
        dispatch(addItem(data));
      }
      showNoti('success', 'Add success');
    } else {
      showNoti('error', 'Check size or color');
    }
  };

  const handleClickImg = (item) => {
    setSize(null);
    setColor(null);
    navigate(`/details/${item.id}`, {
      state: {
        img: item?.image,
      },
    });
  };

  // size guide

  const [toggleSizeGuide, setToggleSizeGuide] = useState(false);

  return (
    <div>
      <Header catalouge disableAnnounce />
      {isLoading ? (
        <div className='loadingWhileFetching'>
          <Loading alter />
        </div>
      ) : (
        <div className='details'>
          <Slider3>
            {img?.detailImages?.map((item, index) => (
              <Slider3Item key={index}>
                <div>
                  <img src={item} alt='dress image' />
                </div>
              </Slider3Item>
            ))}
          </Slider3>
          <div className='details__img'>
            {img?.detailImages?.map((item, index) => (
              <div key={index}>
                <img src={item} alt='testing img' />
              </div>
            ))}
          </div>
          <div className='details__info'>
            <p>{currentProduct?.category?.name}</p>
            <p>{currentProduct?.name}</p>
            <p>
              {formatCurrency('VND', currentProduct.totalPrice)}
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
                  {currentProduct?.sizeColorList?.size.map((item, index) => (
                    <p
                      key={index}
                      className={size === item ? 'active' : ''}
                      onClick={() => {
                        setSize(item);
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p>color</p>
                <div className='product-color-div'>
                  {currentProduct?.sizeColorList?.color.map((item, index) => (
                    <div
                      key={index}
                      className='product-color'
                      style={{ backgroundColor: item }}
                      onClick={() => setColor(item)}
                    >
                      {color === item && (
                        <img
                          className='blackCheck-icon'
                          src={blackCheck}
                          alt='icon image'
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button
              handleClick={
                currentProduct?.inventories
                  ? () =>
                    handleAddItem({
                      ...currentProduct,
                      size    : size,
                      color   : color,
                      quantity: 1,
                      // image   : img.mainImage
                      image   : img,
                    })
                  : handleWaitForm
              }
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
                  <div className='info-item'>
                    {t('findYourSize')}{' '}
                    <span onClick={() => setToggleSizeGuide(true)}>Here</span>
                    {toggleSizeGuide && (
                      <QuickSizeGuide toggle={setToggleSizeGuide} />
                    )}
                  </div>
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
                  {currentProduct?.garmentCare
                    ? currentProduct?.garmentCare
                    : 'Wash with hand'}
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading ? (
        <Loading alter />
      ) : (
        <div className='moreItem'>
          <p>{t('more')}</p>
          <Slider2 handleClick={handleClickImg} data={moreItem} />
        </div>
      )}
    </div>
  );
};

export default memo(ItemDetails);
