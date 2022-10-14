import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';
import MobileTitle from 'components/MobileTitle';

import './style.scss';

const Policy = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Policy',
  });

  return (
    <div className='policy'>
      <MobileTitle label={'Privacy Policy'} />
      <p className='policy-intro'>
        {t('intro')}
        <br />
        <br />
        {t('introCont')}
      </p>
      <Collapse line label={t('question1')}>
        <p className='policy-item'>{t('answ1')}</p>
      </Collapse>
      <Collapse line label={t('question2')}>
        <p className='policy-item'>{t('answ2')}</p>
        <p className='policy-item'>{t('answ2-1')}</p>
        <p className='policy-item'>{t('answ2-2')}</p>
        <p className='policy-item'>{t('answ2-3')}</p>
        <p className='policy-item'>{t('answ2-4')}</p>
      </Collapse>
      <Collapse line label={t('question3')}>
        <p className='policy-item'>{t('answ3')}</p>
      </Collapse>
      <Collapse line label={t('question4')}>
        <p className='policy-item'>{t('answ4')}</p>
      </Collapse>
      <Collapse line label={t('question5')}>
        <p className='policy-item'>{t('answ5')}</p>
      </Collapse>
      <Collapse line label={t('question6')}>
        <p className='policy-item'>{t('answ6')}</p>
      </Collapse>
      <Collapse line label={t('question7')}>
        <p className='policy-item'>{t('answ7')}</p>
      </Collapse>
    </div>
  );
};

export default Policy;
