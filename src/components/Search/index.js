import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { searchBlack, xmark } from 'assets/images';

import './style.scss';

function Search({ toggle, setToggle }) {
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
        <p>quick links</p>
        <div>
          <Link to='/'>dresses</Link>
          <Link to='/'>tops</Link>
          <Link to='/'>pants</Link>
          <Link to='/'>store</Link>
          <Link to='/'>shipping</Link>
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
