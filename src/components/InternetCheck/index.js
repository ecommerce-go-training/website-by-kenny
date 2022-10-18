import React, { useState, useEffect } from 'react';

import './style.scss';

const InternetCheck = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

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
      {isOnline ? <h1>Online</h1> : <h1>Offline</h1>}
      {children}
    </div>
  );
};

export default InternetCheck;
