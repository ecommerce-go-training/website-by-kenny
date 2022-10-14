import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';
import Shipbill from 'components/Shipbill';
import MobileTitle from 'components/MobileTitle';

import './style.scss';

const Shipping = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Shipping',
  });

  return (
    <div className='shipping'>
      <MobileTitle label={'Shipping'} />
      <div className='desktop-shipping'>
        <p className='shipping-title'>{t('title')}</p>
        <p className='shipping-description'>{t('description')}</p>
        <div className='shipping-table'>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>service</th>
                <th>delivery time</th>
                <th>cost</th>
              </tr>
              <tr>
                <td>
                  <div className='color-title'>domestic shipping</div>
                </td>
                <td>viettelpost</td>
                <td>2-5 business days</td>
                <td>free shipping</td>
              </tr>
              <tr>
                <td>
                  <div className='color-title'>internaltional shipping</div>
                </td>
                <td>vietnampost standard shipping</td>
                <td>2 weeks - 1 month</td>
                <td>20 usd</td>
              </tr>
              <tr>
                <td></td>
                <td>ems/dhl express shipping</td>
                <td>3- 10 business days</td>
                <td>30 usd</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='shipping-description'>{t('description2')}</p>
        <p className='shipping-title marginTop'>{t('return')}</p>
        <p className='shipping-title'>{t('returnPolicy')}</p>
        <p className='shipping-description'>{t('returnPolicyDes')}</p>
        <p className='shipping-title marginTop'>{t('howToReturn')}</p>
        <p className='shipping-description'>{t('howToReturnDes')}</p>
      </div>
      <div className='mobile-shipping'>
        <Collapse lineTop label={t('moreShip')}>
          <p className='mobile-description'>{t('description')}</p>
        </Collapse>
        <p className='under500'>{t('under500')}</p>
        <div className='mobile-shipping-bills'>
          <Shipbill
            label={'domestic shipping'}
            serviceName={'viettelpost'}
            deliveryTime={'2- 5 business days'}
            cost={'free shipping'}
          />
          <Shipbill
            label={'international shipping'}
            serviceName={'vietnampost standard shipping'}
            deliveryTime={'2 weeks - 1 month'}
            cost={'20 usd'}
          />
          <Shipbill
            disableTitle
            serviceName={'ems/dhl express shipping'}
            deliveryTime={'3- 10 business days'}
            cost={'30 usd'}
          />
        </div>
        <p className='mobile-shipping-des2'>{t('description2')}</p>
        <div className='mobile-shipping-nav'>
          <p>
						home <span>/return</span>
          </p>
        </div>
        <Collapse lineTop label={t('returnPolicy')}>
          <p className='mobile-description'>{t('returnPolicyDes')}</p>
        </Collapse>
        <Collapse lineTop label={t('howToReturn')}>
          <p className='mobile-description'>{t('howToReturnDes')}</p>
        </Collapse>
      </div>
    </div>
  );
};

export default Shipping;
