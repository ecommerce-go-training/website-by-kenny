import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Button from 'components/Button';
import CartItem from './CartItem';

import { pinkDress, whiteDressCart, orangeDressCart } from 'assets/images';

import './style.scss';

const MyCart = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Cart' });
  const navigate = useNavigate();
  const totalItem = 0;
  const totalPrice = 0;

  const images = [
    {
      image   : pinkDress,
      name    : 'Pink Dress',
      color   : 'Pink',
      size    : 'M',
      quantity: 1,
      price   : 100,
    },
    {
      image   : whiteDressCart,
      name    : 'White Dress',
      color   : 'White',
      size    : 'L',
      quantity: 1,
      price   : 200,
    },
    {
      image   : orangeDressCart,
      name    : 'Orange Dress',
      color   : 'Orange',
      size    : 'S',
      quantity: 3,
      price   : 150,
    },
  ];

  return (
    <div>
      <Header login />
      <div className='cart'>
        <div className='cart-container'>
          <p>
            {t('cart')} &nbsp;
            <span>
              {totalItem} {t('items')}
            </span>
          </p>
          <div className='cart-item'>
            {images.map((item, index) => (
              <CartItem key={index} data={item} />
            ))}
          </div>
          <div className='cart-checkout'>
            <p>
              {t('total')}: &nbsp;{' '}
              <span>
                {totalPrice} {t('unit')}
              </span>
            </p>
            <div>
              <Button handleClick={() => navigate('/checkout')}>
                {t('checkOut')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;
