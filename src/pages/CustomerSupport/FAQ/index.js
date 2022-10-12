import { useTranslation } from 'react-i18next';

import Collapse from 'components/Collapse';
import MobileTitle from 'components/MobileTitle';

import './style.scss';

const Faq = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.CustomerSupport.Faq',
  });

  return (
    <div className='faq'>
      <MobileTitle label={'FAQ'} />
      <Collapse line label={t('question1')}>
        <p className='faq-item'>{t('answ1')}</p>
      </Collapse>
      <Collapse line label={t('question2')}>
        <p className='faq-item'>{t('answ2')}</p>
        <p className='faq-item'>{t('visa')}</p>
        <p className='faq-item'>{t('mastercard')}</p>
        <p className='faq-item'>{t('paypal')}</p>
      </Collapse>
      <Collapse line label={t('question3')}>
        <p className='faq-item'>{t('answ3')}</p>
      </Collapse>
      <Collapse line label={t('question4')}>
        <p className='faq-item'>{t('answ4')}</p>
      </Collapse>
      <Collapse line label={t('question5')}>
        <p className='faq-item'>{t('answ5')}</p>
      </Collapse>
      <Collapse line label={t('question6')}>
        <p className='faq-item'>{t('answ6')}</p>
      </Collapse>
      <Collapse line label={t('question7')}>
        <p className='faq-item'>{t('answ7')}</p>
      </Collapse>
      <Collapse line label={t('question8')}>
        <p className='faq-item'>{t('answ8')}</p>
      </Collapse>
      <Collapse line label={t('question9')}>
        <p className='faq-item'>{t('answ9')}</p>
      </Collapse>
      <Collapse line label={t('question10')}>
        <p className='faq-item'>{t('answ10')}</p>
      </Collapse>
      <Collapse line label={t('question11')}>
        <p className='faq-item'>{t('answ11')}</p>
      </Collapse>
      <Collapse line label={t('question12')}>
        <p className='faq-item'>{t('answ12')}</p>
      </Collapse>
      <Collapse line label={t('question13')}>
        <p className='faq-item'>{t('answ13')}</p>
      </Collapse>
    </div>
  );
};

export default Faq;
