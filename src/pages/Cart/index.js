import { useTranslation } from 'react-i18next';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Button from 'components/Button';

import './style.scss';

function MyCart() {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Cart' });

  const totalItem = 0;
  const totalPrice = 0;

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
          <div className='cart-item'></div>
          <div className='cart-checkout'>
            <p>
              {t('total')}: &nbsp;{' '}
              <span>
                {totalPrice} {t('unit')}
              </span>
            </p>
            <div>
              <Button>{t('checkOut')}</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyCart;
