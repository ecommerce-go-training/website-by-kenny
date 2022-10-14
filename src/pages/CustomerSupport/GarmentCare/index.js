import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';

import MobileTitle from 'components/MobileTitle';

import './style.scss';

const Garment = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Garment',
  });

  return (
    <div className='garment'>
      <MobileTitle label={'garment care'} />
      <div className='garment-intro'>
        <p>{t('intro')}</p>
      </div>
      <div className='garment-desktop'>
        <p className='garment-title'>{t('title1')}</p>
        <p>{t('titleDes')}</p>
        <p className='garment-header'>{t('cotton')}</p>
        <p>{t('cottonDes')}</p>
        <p className='garment-header'>{t('linen')}</p>
        <p>{t('linenDes')}</p>
        <p className='garment-header'>{t('cashmere')}</p>
        <p>{t('cashmereDes')}</p>
        <p className='garment-header'>{t('mohair')}</p>
        <p>{t('mohairDes')}</p>
        <p className='garment-header'>{t('wool')}</p>
        <p>{t('woolDes')}</p>
        <p className='garment-header'>{t('silk')}</p>
        <p>{t('silkDes')}</p>
        <p className='garment-title'>{t('title2')}</p>
        <p>{t('title2Des')}</p>
        <p className='garment-header'>{t('denim')}</p>
        <p>{t('denimDes')}</p>
        <p className='garment-header'>{t('elastine')}</p>
        <p>{t('elastineDes')}</p>
        <p className='garment-header'>{t('modal')}</p>
        <p>{t('modalDes')}</p>
        <p className='garment-header'>{t('nylon')}</p>
        <p>{t('nylonDes')}</p>
        <p className='garment-header'>{t('neoprene')}</p>
        <p>{t('neopreneDes')}</p>
        <p className='garment-header'>{t('polyeste')}</p>
        <p>{t('polyesteDes')}</p>
        <p className='garment-header'>{t('polyamide')}</p>
        <p>{t('polyamideDes')}</p>
        <p className='garment-header'>{t('rayon')}</p>
        <p>{t('rayonDes')}</p>
        <p className='garment-header'>{t('satin')}</p>
        <p>{t('satinDes')}</p>
        <p className='garment-header'>{t('viscose')}</p>
        <p>{t('viscoseDes')}</p>
      </div>

      <Collapse lineTop mobile label={t('title1')}>
        <p>{t('titleDes')}</p>
        <p className='garment-header'>{t('cotton')}</p>
        <p>{t('cottonDes')}</p>
        <p className='garment-header'>{t('linen')}</p>
        <p>{t('linenDes')}</p>
        <p className='garment-header'>{t('cashmere')}</p>
        <p>{t('cashmereDes')}</p>
        <p className='garment-header'>{t('mohair')}</p>
        <p>{t('mohairDes')}</p>
        <p className='garment-header'>{t('wool')}</p>
        <p>{t('woolDes')}</p>
        <p className='garment-header'>{t('silk')}</p>
        <p>{t('silkDes')}</p>
      </Collapse>
      <Collapse lineTop mobile label={t('title2')}>
        <p>{t('title2Des')}</p>
        <p className='garment-header'>{t('denim')}</p>
        <p>{t('denimDes')}</p>
        <p className='garment-header'>{t('elastine')}</p>
        <p>{t('elastineDes')}</p>
        <p className='garment-header'>{t('modal')}</p>
        <p>{t('modalDes')}</p>
        <p className='garment-header'>{t('nylon')}</p>
        <p>{t('nylonDes')}</p>
        <p className='garment-header'>{t('neoprene')}</p>
        <p>{t('neopreneDes')}</p>
        <p className='garment-header'>{t('polyeste')}</p>
        <p>{t('polyesteDes')}</p>
        <p className='garment-header'>{t('polyamide')}</p>
        <p>{t('polyamideDes')}</p>
        <p className='garment-header'>{t('rayon')}</p>
        <p>{t('rayonDes')}</p>
        <p className='garment-header'>{t('satin')}</p>
        <p>{t('satinDes')}</p>
        <p className='garment-header'>{t('viscose')}</p>
        <p>{t('viscoseDes')}</p>
      </Collapse>
    </div>
  );
};

export default Garment;
