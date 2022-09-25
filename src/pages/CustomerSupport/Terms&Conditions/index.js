import { useTranslation } from 'react-i18next';

import MobileTitle from 'components/MobileTitle';

import './style.scss';

function Terms() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Terms',
  });

  return (
    <div className='terms'>
      <MobileTitle label={'Term & Conditions'} />
      <div className='terms-des'>
        <p>{t('intro')}</p>
      </div>
      <p className='terms-header'>{t('companyInfo')}</p>
      <p className='terms-des'>{t('info')}</p>
      <p className='terms-header'>{t('order')}</p>
      <p className='terms-des'>{t('orderDes')}</p>
      <p className='terms-header'>{t('product')}</p>
      <p className='terms-des'>{t('productDes')}</p>
      <p className='terms-header'>{t('preOrders')}</p>
      <p className='terms-des'>{t('preOrdersDes')}</p>
      <p className='terms-header'>{t('promoteCode')}</p>
      <p className='terms-des'>{t('promoteCodeDes')}</p>
      <p className='terms-header'>{t('webSecurity')}</p>
      <p className='terms-des'>{t('webSecurityDes')}</p>
      <p className='terms-header'>{t('liability')}</p>
      <p className='terms-des'>{t('liabilityDes')}</p>
      <p className='terms-header'>{t('intellectual')}</p>
      <p className='terms-des'>{t('intellectualDes')}</p>
      <p className='terms-header'>{t('websiteAvail')}</p>
      <p className='terms-des'>{t('websiteAvailDes')}</p>
      <p className='terms-header'>{t('userUse')}</p>
      <p className='terms-des'>{t('userUseDes')}</p>
      <p className='terms-header'>{t('termination')}</p>
      <p className='terms-des'>{t('terminationDes')}</p>
      <p className='terms-header'>{t('agreement')}</p>
      <p className='terms-des'>{t('agreementDes')}</p>
      <p className='terms-header'>{t('governingLaw')}</p>
      <p className='terms-des'>{t('governingLawDes')}</p>
    </div>
  );
}

export default Terms;
