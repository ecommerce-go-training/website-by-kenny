import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Faq from './FAQ';
import Shipping from './Shipping';
import Garment from './GarmentCare';
import Policy from './PrivacyPolicy';
import Header from 'components/Header';
import Terms from './Terms&Conditions';

import './style.scss';

function CustomerSupport() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport',
  });
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Header disableAnnounce login></Header>
      <div className='customerSupport'>
        <div className='customerSupport__nav'>
          <p
            onClick={() => handleClick(0)}
            className={classNames({ active: page === 0 })}
          >
            {t('faq')}
          </p>
          <p onClick={() => navigate('/size')}>sizing</p>
          <p
            onClick={() => handleClick(1)}
            className={classNames({ active: page === 1 })}
          >
            {t('ship')}
          </p>
          <p
            onClick={() => handleClick(2)}
            className={classNames({ active: page === 2 })}
          >
            {t('terms')}
          </p>
          <p
            onClick={() => handleClick(3)}
            className={classNames({ active: page === 3 })}
          >
            {t('policy')}
          </p>
          <p
            onClick={() => handleClick(4)}
            className={classNames({ active: page === 4 })}
          >
            {t('garment')}
          </p>
        </div>
        <div className='customerSupport__info'>
          {page === 0 && <Faq />}
          {page === 1 && <Shipping />}
          {page === 2 && <Terms />}
          {page === 3 && <Policy />}
          {page === 4 && <Garment />}
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport;
