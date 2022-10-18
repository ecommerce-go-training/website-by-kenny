import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport',
  });
  const [page, setPage] = useState(0);

  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Header disableAnnounce login />
      <div className='customerSupport'>
        <div className='customerSupport__nav'>
          <p
            onClick={() => handleClick(0)}
            className={classNames({ active: page === 0 })}
          >
            {t('faq')}
          </p>
          <p
            onClick={() => handleClick(1)}
            className={classNames({ active: page === 1 })}
          >
            {t('sizing')}
          </p>
          <p
            onClick={() => handleClick(2)}
            className={classNames({ active: page === 2 })}
          >
            {t('ship')}
          </p>
          <p
            onClick={() => handleClick(3)}
            className={classNames({ active: page === 3 })}
          >
            {t('terms')}
          </p>
          <p
            onClick={() => handleClick(4)}
            className={classNames({ active: page === 4 })}
          >
            {t('policy')}
          </p>
          <p
            onClick={() => handleClick(5)}
            className={classNames({ active: page === 5 })}
          >
            {t('garment')}
          </p>
        </div>
        <div className='customerSupport__info'>
          {page === 0 && <Faq />}
          {page === 1 && <Size />}
          {page === 2 && <Shipping />}
          {page === 3 && <Terms />}
          {page === 4 && <Policy />}
          {page === 5 && <Garment />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerSupport;
