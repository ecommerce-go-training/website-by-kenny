import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { searchBlack, xmark } from 'assets/images';

import './style.scss';

function Search({ toggle, setToggle }) {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Search',
  });

  const classes = classNames({
    search: true,
    active: toggle,
  });

  return (
    <div className={classes}>
      <div className='search__input'>
        <input type='text' />
        <img className='search-icon' src={searchBlack} alt='search icon' />
        <img
          onClick={() => setToggle(false)}
          className='x-icon'
          src={xmark}
          alt='x icon'
        />
      </div>
      <div className='search__quick-nav'>
        <p>{t('quickLink')}</p>
        <div>
          <Link to='/'>{t('dress')}</Link>
          <Link to='/'>{t('top')}</Link>
          <Link to='/'>{t('pant')}</Link>
          <Link to='/'>{t('store')}</Link>
          <Link to='/'>{t('ship')}</Link>
        </div>
      </div>
    </div>
  );
}

Search.defaultProps = {
  toggle   : false,
  setToggle: null,
};

Search.propTypes = {
  toggle   : PropTypes.bool,
  setToggle: PropTypes.func,
};

export default Search;
