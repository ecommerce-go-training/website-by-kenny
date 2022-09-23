import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';
import MobileTitle from 'components/MobileTitle';

import './style.scss';

function Faq() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Faq',
  });

  return (
    <div className='faq'>
      <MobileTitle label={'FAQ'} />
      <Collapse line label={t('question1')}>
        <p>{t('answ1')}</p>
      </Collapse>
      <Collapse line label={t('question2')}>
        <p>{t('answ2')}</p>
        <p>{t('visa')}</p>
        <p>{t('mastercard')}</p>
        <p>{t('paypal')}</p>
      </Collapse>
      <Collapse line label={t('question3')}>
        <p>{t('answ3')}</p>
      </Collapse>
      <Collapse line label={t('question4')}>
        <p>{t('answ4')}</p>
      </Collapse>
      <Collapse line label={t('question5')}>
        <p>{t('answ5')}</p>
      </Collapse>
      <Collapse line label={t('question6')}>
        <p>{t('answ6')}</p>
      </Collapse>
      <Collapse line label={t('question7')}>
        <p>{t('answ7')}</p>
      </Collapse>
      <Collapse line label={t('question8')}>
        <p>{t('answ8')}</p>
      </Collapse>
      <Collapse line label={t('question9')}>
        <p>{t('answ9')}</p>
      </Collapse>
      <Collapse line label={t('question10')}>
        <p>{t('answ10')}</p>
      </Collapse>
      <Collapse line label={t('question11')}>
        <p>{t('answ11')}</p>
      </Collapse>
      <Collapse line label={t('question12')}>
        <p>{t('answ12')}</p>
      </Collapse>
      <Collapse line label={t('question13')}>
        <p>{t('answ13')}</p>
      </Collapse>
    </div>
  );
}

export default Faq;
