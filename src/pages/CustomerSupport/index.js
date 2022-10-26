import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';

import Faq from './FAQ';
import Size from './SizeGuide';
import Shipping from './Shipping';
import Garment from './GarmentCare';
import Policy from './PrivacyPolicy';
import Header from 'components/Header';
import Terms from './Terms&Conditions';
import Footer from 'components/Footer';

import './style.scss';

const CustomerSupport = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport',
  });

  const handleClick = (page) => {
    navigate(`/customer-support/${page}`);
  };

  return (
    <div>
      <Header disableAnnounce catalouge />
      <div className='customerSupport'>
        <div className='customerSupport__nav'>
          <p
            onClick={() => handleClick('faq')}
            className={classNames({ active: type === 'faq' })}
          >
            {t('faq')}
          </p>
          <p
            onClick={() => handleClick('size')}
            className={classNames({ active: type === 'size' })}
          >
            {t('sizing')}
          </p>
          <p
            onClick={() => handleClick('shipping')}
            className={classNames({ active: type === 'shipping' })}
          >
            {t('ship')}
          </p>
          <p
            onClick={() => handleClick('terms')}
            className={classNames({ active: type === 'terms' })}
          >
            {t('terms')}
          </p>
          <p
            onClick={() => handleClick('policy')}
            className={classNames({ active: type === 'policy' })}
          >
            {t('policy')}
          </p>
          <p
            onClick={() => handleClick('garment')}
            className={classNames({ active: type === 'garment' })}
          >
            {t('garment')}
          </p>
        </div>
        <div className='customerSupport__info'>
          {type === 'faq' && <Faq />}
          {type === 'size' && <Size />}
          {type === 'shipping' && <Shipping />}
          {type === 'terms' && <Terms />}
          {type === 'policy' && <Policy />}
          {type === 'garment' && <Garment />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerSupport;
