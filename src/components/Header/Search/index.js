import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { search } from 'global/redux/product/slice';

import { searchBlack, xmark } from 'assets/images';

import './style.scss';

const Search = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Search',
  });

  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      dispatch(search(searchInput));
      setToggle(false);
      setSearchInput('');
      navigate('/catalouge/search-result');
    }
  };

  return (
    <div
      className={classNames({
        search: true,
        active: toggle,
      })}
    >
      <form onSubmit={handleSubmit} className='search__input'>
        <input
          value={searchInput}
          type='text'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img className='search-icon' src={searchBlack} alt='search icon' />
        <img
          onClick={() => setToggle(false)}
          className='x-icon'
          src={xmark}
          alt='x icon'
        />
      </form>
      <div className='search__quick-nav'>
        <p>{t('quickLink')}</p>
        <div>
          <Link to='/catalouge/dresses'>{t('dress')}</Link>
          <Link to='/catalouge/top'>{t('top')}</Link>
          <Link to='/catalouge/pants'>{t('pant')}</Link>
          <Link to='/store'>{t('store')}</Link>
          <Link to='/customer-support'>{t('ship')}</Link>
        </div>
      </div>
    </div>
  );
};

Search.defaultProps = {
  toggle   : false,
  setToggle: null,
};

Search.propTypes = {
  toggle   : PropTypes.bool,
  setToggle: PropTypes.func,
};

export default memo(Search);
