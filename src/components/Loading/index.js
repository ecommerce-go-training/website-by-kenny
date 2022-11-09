import React from 'react';
import PropTypes from 'prop-types';

import { loadingIcon, redLoadingIcon } from 'assets/images';

import './style.scss';

const Loading = ({ alter = false }) => {
  return (
    <div className='loading-icon'>
      <img src={alter ? redLoadingIcon : loadingIcon} alt='loading icon' />
    </div>
  );
};

Loading.defaultProps = {
  alter: false,
};

Loading.propTypes = {
  alter: PropTypes.bool,
};

export default Loading;
