import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import Item from 'pages/Checkout/Item';

import { returnOrder } from 'assets/images';

import './style.scss';

const OrderHistory = ({ data }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Account' });

  const [showDetails, setShowDetails] = useState(false);
  const [toggleReturnOrder, setToggleReturnOrder] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleClick = () => {
    setToggleReturnOrder(true);
  };

  return (
    <div className='order-history'>
      {toggleReturnOrder && (
        <div className='return-order'>
          <form className='return-order__form'>
            <h1>Hello</h1>
          </form>
        </div>
      )}
      <div className='order-history__id'>
        <p>
          {t('order')} {data.id}
        </p>
        <p onClick={handleClick}>
          <img src={returnOrder} alt='icon image' />
          {t('return')}
        </p>
      </div>
      <p className='order-history__status'>
        {t('status')} &nbsp; <span>{data.status}</span>
      </p>
      <div className='order-history__button'>
        <div>
          <Button>
            <p>{t('trackOrder')}</p>
          </Button>
        </div>
        <div>
          <Button handleClick={handleShowDetails}>
            <p>{t('details')}</p>
          </Button>
        </div>
      </div>
      {showDetails && (
        <div className='order-history__details'>
          <p>{t('articles')}</p>
          <p>{t('sendBack')}</p>
          {data.items.map((item, index) => (
            <Item textQuantity key={index} data={item} />
          ))}
          <div className='order-price'>
            <div>
              <p>{t('subtotal')}</p>
              <p>
                {Intl.NumberFormat('vi-VIET', {
                  style   : 'currency',
                  currency: 'VND',
                }).format(250)}
              </p>
            </div>
            <div>
              <p>{t('shipping')}</p>
              <p>
                {Intl.NumberFormat('vi-VIET', {
                  style   : 'currency',
                  currency: 'VND',
                }).format(250)}
              </p>
            </div>
            <div>
              <p>{t('total')}</p>
              <p>
                {Intl.NumberFormat('vi-VIET', {
                  style   : 'currency',
                  currency: 'VND',
                }).format(250)}
              </p>
            </div>
          </div>
          <div className='shipping-method'>
            <div>
              <p>{t('payMethod')}</p>
              <p>{data.payment}</p>
              <p>{t('billTo')}</p>
              <p>{data.customerName}</p>
              <p>{data.customerAddress}</p>
              <div>
                <Button>
                  <p>{t('pdf')}</p>
                </Button>
              </div>
            </div>
            <div>
              <p>{t('deliverMethod')}</p>
              <p>{data.delivery}</p>
              <p>{t('shipTo')}</p>
              <p>{data.customerName}</p>
              <p>{data.customerAddress}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
