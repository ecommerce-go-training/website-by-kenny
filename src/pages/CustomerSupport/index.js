import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Faq from './FAQ';
import Shipping from './Shipping';
import Garment from './GarmentCare';
import Policy from './PrivacyPolicy';
import Header from 'components/Header';
import Terms from './Terms&Conditions';

import './style.scss';

function CustomerSupport() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <Header disableAnnounce login></Header>
      <div className='customerSupport'>
        <div className='customerSupport__nav'>
          <p onClick={() => setPage(0)} className={page === 0 ? 'active' : ''}>
						faq
          </p>
          <p onClick={() => navigate('/size')}>sizing</p>
          <p onClick={() => setPage(1)} className={page === 1 ? 'active' : ''}>
						shipping & returns
          </p>
          <p onClick={() => setPage(2)} className={page === 2 ? 'active' : ''}>
						terms & conditions
          </p>
          <p onClick={() => setPage(3)} className={page === 3 ? 'active' : ''}>
						privacy policy
          </p>
          <p onClick={() => setPage(4)} className={page === 4 ? 'active' : ''}>
						garment care
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
