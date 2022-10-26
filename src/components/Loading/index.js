import React from 'react';

import { loadingIcon } from 'assets/images';

import './style.scss';

const Loading = () => {
  return (
    <div className='loading-icon'>
      <img src={loadingIcon} alt='loading icon' />
    </div>
  );
};

export default Loading;
