import React, { useState, memo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { search } from 'global/redux/product/slice';

import { searchBlack, xmark } from 'assets/images';

import './style.scss';

const Search = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const focusInput = useRef(null);
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
      navigate({
        pathname: '/catalouge/search-result',
        search  : `?${createSearchParams({
          searchKeyword: searchInput,
        })}`,
      });
    }
  };

  const handleClose = () => {
    setSearchInput('');
    setToggle(false);
  };

  useEffect(() => {
    if (toggle) focusInput.current.focus();
  }, [toggle]);

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
          ref={focusInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <img className='search-icon' src={searchBlack} alt='search icon' />
        <img
          onClick={handleClose}
          className='x-icon'
          src={xmark}
          alt='x icon'
        />
      </form>
      <div className='search__quick-nav'>
        <p>{t('quickLink')}</p>
        <div>
          <Link onClick={() => setToggle(false)} to='/catalouge/dresses'>
            {t('dress')}
          </Link>
          <Link onClick={() => setToggle(false)} to='/catalouge/tops'>
            {t('top')}
          </Link>
          <Link onClick={() => setToggle(false)} to='/catalouge/pants'>
            {t('pant')}
          </Link>
          <Link onClick={() => setToggle(false)} to='/store'>
            {t('store')}
          </Link>
          <Link onClick={() => setToggle(false)} to='/customer-support'>
            {t('ship')}
          </Link>
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
