import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';
import MobileTitle from 'components/MobileTitle';

import './style.scss';

function Policy() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Policy',
  });

  return (
    <div className='policy'>
      <MobileTitle label={'Privacy Policy'} />
      <p className='policy-intro'>
				Elemush website (www.elemush.com) places cookies on your computer or
				handheld device, which is normal practice for all websites.
        <br />
        <br />
				Elemush does not disclose personal information to third parties without
				your consent. Any changes to Elemush&#39;s privacy policy will be
				displayed here. This Privacy Policy describes how your personal
				information is collected, used, and shared when you visit or make a
				purchase from elemush.com (the “Site”).
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
}

export default Policy;
