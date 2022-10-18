import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <p>Page not found</p>
      <Link to='/'>Go home</Link>
    </div>
  );
};

export default PageNotFound;
