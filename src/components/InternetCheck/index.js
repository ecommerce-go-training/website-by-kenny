import React, { useState, useEffect } from 'react';

import './style.scss';

const InternetCheck = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
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
