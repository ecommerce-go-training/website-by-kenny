import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Checkbox from 'components/Checkbox';

import { plus, minus } from 'assets/images';

import './style.scss';

function Filter() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Filter',
  });

  const colorFilter = [
    t('beige'),
    t('blue'),
    t('black'),
    t('brown'),
    t('green'),
    t('red'),
    t('metallic'),
    t('white'),
    t('cream'),
    t('pink'),
    t('orange'),
    t('yellow'),
    t('lilac'),
    t('floral'),
  ];

  const sizeFilter = [t('freesize'), 'XS', 'S', 'M', 'L', 'XL'];

  const categoriesList = [
    t('newArrivals'),
    t('backInStock'),
    t('dresses'),
    t('tops'),
    t('skirts'),
    t('shorts'),
    t('pants'),
    t('jackets'),
    t('jumpsuits'),
    t('twoPieceSets'),
    t('sales'),
  ];

  const sortList = [
    t('newest'),
    t('bestSellers'),
    t('priceHighest'),
    t('priceLowest'),
  ];

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [categorySelect, setCategorySelect] = useState(0);
  const [sortSelect, setSortSelect] = useState(0);
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
  };

  return (
    <div className='filter'>
      <div className='filter-categories'>
        <p className='title'>{t('categories')}</p>
        {categoriesList.map((item, index) => (
          <p
            key={index}
            className={classNames({ active: categorySelect === index })}
            onClick={() => setCategorySelect(index)}
          >
            {item}
          </p>
        ))}
      </div>
      <div className='filter-collections'>
        <p className='title'>{t('collections')}</p>
        <p>{t('essentialsEdit')}</p>
        <p>{t('springSummer')}</p>
        <p>{t('fallWinter')}</p>
      </div>
      <div className='filter-filtering'>
        <p className='title'>{t('filter')}</p>
        <div className='filter-filtering-type'>
          <div className='type-filter'>
            <div className='label' onClick={() => setToggleColor(!toggleColor)}>
              <img src={toggleColor ? plus : minus} alt='icon image' />
              <p>{t('color')}</p>
            </div>
            {!toggleColor && (
              <div className='items'>
                {colorFilter.map((item, index) => (
                  <div
                    onClick={() => handleFilter(setColor, color, index)}
                    key={index}
                  >
                    <span>
                      <Checkbox filter toggle={color.includes(index)} />
                    </span>
                    <p>{item}</p>
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
                {sizeFilter.map((item, index) => (
                  <div
                    onClick={() => handleFilter(setSize, size, index)}
                    key={index}
                  >
                    <span>
                      <Checkbox filter toggle={size.includes(index)} />
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {(!toggleSize || !toggleColor) && (
            <div className='handle-filter'>
              <p onClick={handleClearFilter}>{t('clearFilters')}</p>
              <div className='button'>{t('apply')}</div>
            </div>
          )}
        </div>
      </div>

      <div className='filter-sort'>
        <p className='title'>{t('sort')}</p>
        <div>
          {sortList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      <div className='filter-mobile'>
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
                  {colorFilter.map((item, index) => (
                    <div
                      onClick={() => handleFilter(setColor, color, index)}
                      key={index}
                    >
                      <span>
                        <Checkbox filter toggle={color.includes(index)} />
                      </span>
                      <p>{item}</p>
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
                  {sizeFilter.map((item, index) => (
                    <div
                      onClick={() => handleFilter(setSize, size, index)}
                      key={index}
                    >
                      <span>
                        <Checkbox filter toggle={size.includes(index)} />
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {toggleSort && (
          <div className='sort-mobile'>
            <div>
              {sortList.map((item, index) => (
                <p
                  key={index}
                  className={classNames({ active: sortSelect === index })}
                  onClick={() => setSortSelect(index)}
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
}

export default Filter;
