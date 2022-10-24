import React, { useState, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

const InternetCheck = ({ children }) => {
  const [firstRendered, setFirstRendered] = useState(false);

  const onlineNoti = () =>
    toast.success('Your internet connection was restored');
  const offlineNoti = () => toast.error('You are currently offline');

  useEffect(() => {
    const notifyChange = () => {
      setFirstRendered(true);
      if (navigator.onLine) {
        onlineNoti();
      } else {
        offlineNoti();
      }
    };
    window.addEventListener('online', notifyChange);
    window.addEventListener('offline', notifyChange);
    return () => {
      window.removeEventListener('online', notifyChange);
      window.removeEventListener('offline', notifyChange);
    };
  }, []);

  return (
    <>
      {firstRendered && (
        <div className='internet-check'>
          <ToastContainer
            autoClose={5000}
            closeButton={true}
            position='bottom-left'
            theme='dark'
            hideProgressBar
          />
          {children}
        </div>
      )}
    </>
  );
};

export default InternetCheck;
