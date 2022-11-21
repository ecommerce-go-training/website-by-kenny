import React, { useState, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import Checkbox from 'components/Checkbox';

import { colorList, sizeList } from 'utils/constants';
import { clearFilter } from 'global/redux/product/slice';

import './style.scss';
import { plus, minus } from 'assets/images';

const Filter = ({
  shop = false,
  sort = null,
  setSort,
  handleApplyFilter,
  handleSortFilter,
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Filter',
  });
  const { type } = useParams();

  const dispatch = useDispatch();

  const categoriesList = [
    {
      label: t('newArrivals'),
      value: 'new-arrivals',
    },
    {
      label: t('backInStock'),
      value: 'back-in-stock',
    },
    {
      label: t('dresses'),
      value: 'dresses',
    },
    {
      label: t('tops'),
      value: 'tops',
    },
    {
      label: t('skirts'),
      value: 'skirts',
    },
    {
      label: t('shorts'),
      value: 'shorts',
    },
    {
      label: t('pants'),
      value: 'pants',
    },
    {
      label: t('jackets'),
      value: 'jackets',
    },
    {
      label: t('jumpsuits'),
      value: 'jumpsuits',
    },
    {
      label: t('twoPieceSets'),
      value: 'two-piece-sets',
    },
    {
      label: t('sales'),
      value: 'sale',
    },
  ];

  const sortList = [
    t('newest'),
    t('bestSellers'),
    t('priceHighest'),
    t('priceLowest'),
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const filterColor = searchParams?.get('color')?.split(',');
  const colorIndexes = filterColor?.map((item) =>
    colorList.map((item) => item.key).indexOf(item)
  );
  const filterSize = searchParams?.get('size')?.split(',');
  const sizeIndexes = filterSize?.map((item) =>
    sizeList.map((item) => item.key).indexOf(item)
  );

  const [color, setColor] = useState(
    filterColor?.length > 0 ? colorIndexes : []
  );
  const [size, setSize] = useState(filterSize?.length > 0 ? sizeIndexes : []);

  const filterCondition = {
    color: colorList
      .filter((item, index) => color?.includes(index))
      .map((item) => item.value),
    size: sizeList
      .filter((item, index) => size?.includes(index))
      .map((item) => item.value),
  };

  const [toggleColor, setToggleColor] = useState(false);
  const [toggleSize, setToggleSize] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);

  const handleFilter = (func, arr, index) => {
    if (arr.includes(index)) {
      func([
        ...arr.slice(0, arr.indexOf(index)),
        ...arr.slice(arr.indexOf(index) + 1, arr.length),
      ]);
    } else func((prev) => [...prev, index]);
  };

  const handleClearFilter = () => {
    setColor([]);
    setSize([]);
    setSearchParams({});
    setSort(null);
    dispatch(clearFilter());
  };

  return (
    <div className={classNames('filter', { shopNav: shop })}>
      <div className='filter-categories'>
        <p className='title'>{t('categories')}</p>
        {categoriesList.map((item, index) => (
          <Link
            to={`/catalouge/${item.value}`}
            key={index}
            className={classNames('shop-nav-link', {
              active: !shop && item.value === type,
            })}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className='filter-collections'>
        <p className='title'>{t('collections')}</p>
        <Link className='shop-nav-link' to='/'>
          {t('essentialsEdit')}
        </Link>
        <Link className='shop-nav-link' to='/'>
          {t('springSummer')}
        </Link>
        <Link className='shop-nav-link' to='/'>
          {t('fallWinter')}
        </Link>
      </div>
      <div className={classNames('filter-filtering', { disable: shop })}>
        <p className='title'>{t('filter')}</p>
        <div className='filter-filtering-type'>
          <div className='type-filter'>
            <div className='label' onClick={() => setToggleColor(!toggleColor)}>
              <img src={toggleColor ? plus : minus} alt='icon image' />
              <p>{t('color')}</p>
            </div>
            {!toggleColor && (
              <div className='items'>
                {colorList.map((item, index) => (
                  <div
                    onClick={() => handleFilter(setColor, color, index)}
                    key={index}
                  >
                    <span>
                      <Checkbox filter toggle={color?.includes(index)} />
                    </span>
                    <p>{t(item.key)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='type-filter'>
            <div className='label' onClick={() => setToggleSize(!toggleSize)}>
              <img src={toggleSize ? plus : minus} alt='icon image' />
              <p>{t('size')}</p>
            </div>
            {!toggleSize && (
              <div className='items size-filter'>
                {sizeList.map((item, index) => (
                  <div
                    onClick={() => handleFilter(setSize, size, index)}
                    key={index}
                  >
                    <span>
                      <Checkbox filter toggle={size?.includes(index)} />
                    </span>
                    <p>{item.key}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {(!toggleSize || !toggleColor) && (
            <div className='handle-filter'>
              <p onClick={handleClearFilter}>{t('clearFilters')}</p>
              <div
                onClick={() =>
                  handleApplyFilter(filterCondition, setSearchParams, dispatch)
                }
                className='button'
              >
                {t('apply')}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={classNames('filter-sort', { disable: shop })}>
        <p className='title'>{t('sort')}</p>
        <div>
          {sortList.map((item, index) => (
            <p
              key={index}
              onClick={() => handleSortFilter(dispatch, index)}
              className={classNames(
                'sort-options',
                sort === index ? 'active' : ''
              )}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className={classNames('filter-mobile', { disable: shop })}>
        <div className='filter-mobile-nav'>
          <p>{t('newArrivals')}</p>
          <div className='filter-mobile-nav-option'>
            <div
              className='label'
              onClick={() => setToggleFilter(!toggleFilter)}
            >
              <img src={!toggleFilter ? plus : minus} alt='icon image' />
              <p>{t('filter')}</p>
            </div>
            <div className='label' onClick={() => setToggleSort(!toggleSort)}>
              <img src={!toggleSort ? plus : minus} alt='icon image' />
              <p>{t('sort')}</p>
            </div>
          </div>
        </div>
        {toggleFilter && (
          <div>
            <div className='type-filter'>
              <div
                className='label'
                onClick={() => setToggleColor(!toggleColor)}
              >
                <img src={!toggleColor ? plus : minus} alt='icon image' />
                <p>{t('color')}</p>
              </div>
              {toggleColor && (
                <div className='items'>
                  {colorList.map((item, index) => (
                    <div
                      onClick={() => handleFilter(setColor, color, index)}
                      key={index}
                    >
                      <span>
                        <Checkbox filter toggle={color?.includes(index)} />
                      </span>
                      <p>{t(item.key)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='line'></div>
            <div className='type-filter'>
              <div className='label' onClick={() => setToggleSize(!toggleSize)}>
                <img src={!toggleSize ? plus : minus} alt='icon image' />
                <p>{t('size')}</p>
              </div>
              {toggleSize && (
                <div className='items size-filter'>
                  {sizeList.map((item, index) => (
                    <div
                      onClick={() => handleFilter(setSize, size, index)}
                      key={index}
                    >
                      <span>
                        <Checkbox filter toggle={size?.includes(index)} />
                      </span>
                      <p>{item.key}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {(toggleSize || toggleColor) && (
              <div className='handle-filter-mobile'>
                <p onClick={handleClearFilter}>{t('clearFilters')}</p>
                <div
                  onClick={() =>
                    handleApplyFilter(
                      filterCondition,
                      setSearchParams,
                      dispatch
                    )
                  }
                  className='button'
                >
                  {t('apply')}
                </div>
              </div>
            )}
          </div>
        )}

        {toggleSort && (
          <div className='sort-mobile'>
            <div>
              {sortList.map((item, index) => (
                <p
                  key={index}
                  className={classNames('sort-options', {
                    active: sort === index,
                  })}
                  onClick={() => handleSortFilter(dispatch, index)}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Filter.defaultProps = {
  shop: false,
};

Filter.propTypes = {
  shop: PropTypes.bool,
};

export default memo(Filter);
