import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Button from 'components/Button';
import CartItem from './CartItem';

import { formatCurrency } from 'utils/helpers';
import { removeItem } from 'global/redux/cart/slice';

import './style.scss';

const MyCart = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Cart' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <div>
      <Header catalouge disableAnnounce />
      <div className='cart'>
        <div className='cart-container'>
          <p>
            {t('cart')} &nbsp;
            <span>
              {cartItem?.length} {t('items')}
            </span>
          </p>
          {cartItem.length > 0 && (
            <div className='cart-item'>
              {cartItem?.map((item, index) => (
                <CartItem
                  key={index}
                  index={index}
                  data={item}
                  handleRemove={() => dispatch(removeItem(index))}
                />
              ))}
            </div>
          )}
          <div className='cart-checkout'>
            <p>
              {t('total')}: &nbsp;{' '}
              <span>
                {formatCurrency(
                  'VND',
                  cartItem
                    .map((item) => item.totalPrice * item.quantity)
                    .reduce((item, sum) => item + sum, 0)
                )}
              </span>
            </p>
            <div>
              <Button
                handleClick={() =>
                  navigate(
                    cartItem?.length > 1
                      ? '/checkout'
                      : '/catalouge/new-arrivals'
                  )
                }
              >
                {cartItem?.length > 1 ? t('checkOut') : 'Back to shopping'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer lineTop />
    </div>
  );
};

export default MyCart;
