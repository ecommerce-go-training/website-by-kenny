import React, { useState, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

const InternetCheck = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const onlineNoti = () =>
    toast.success('Your internet connection was restored');
  const offlineNoti = () => toast.error('You are currently offline');

  useEffect(() => {
    const notifyChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener('online', notifyChange);
    window.addEventListener('offline', notifyChange);
    return () => {
      window.removeEventListener('online', notifyChange);
      window.removeEventListener('offline', notifyChange);
    };
  }, [isOnline]);

  return (
    <div className='internet-check'>
      <ToastContainer
        autoClose={5000}
        closeButton={true}
        position='bottom-left'
        theme='dark'
      />
      {isOnline ? onlineNoti() : offlineNoti()}
      {children}
    </div>
  );
};

export default InternetCheck;
