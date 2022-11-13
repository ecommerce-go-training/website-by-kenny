import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getProducts } from 'global/redux/product/thunk';

import Header from 'components/Header';
import Filter from 'components/Filter';
import Footer from 'components/Footer';
import Pagination from 'components/Pagination';
import CatalougeItem from 'components/CatalougeItem';

import './style.scss';
import {
  filterByCategory,
  filterBySizeColor,
  search,
} from 'global/redux/product/slice';

const Catalouge = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.Catalouge',
  });
  const { type } = useParams();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get('searchKeyword');

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  const handleSwitchPage = (pageNumber) => setCurrentPage(pageNumber);

  // const filterColor = searchParams?.get('color')?.split(',');
  // const convertColor = colorList
  //   .filter(item => filterColor?.includes(item.key))
  //   .map(item => item.value);
  // const filterSize = searchParams?.get('size')?.split(',');

  const { fetched, displayProduct } = useSelector((state) => state.product);

  useEffect(() => {
    if (!fetched) {
      dispatch(getProducts());
    }
    /*eslint-disable-next-line */
	}, []);

  // testing v1 ----------------------------- //

  // const categoryProductList = productList.filter(
  //   (item) => item?.category?.name === type
  // );
  // const salesProduct = productList.filter((item) => item?.discount?.status);

  // let currentItemShow = [];
  // let totalData = [];

  // switch(type) {
  // case 'sale':
  //   totalData = [...salesProduct];
  //   if (filterSize || filterColor) {
  //     currentItemShow = salesProduct.map(item => {
  //       return {
  //         ...item,
  //         inventories: item.inventories.filter(item =>
  //           convertColor.includes(item.color) ||
  //           filterSize.includes(item.size))};
  //     }).filter(item => item.inventories.length !== 0)
  //       .slice(indexOfFirstItem, indexOfLastItem);
  //   } else {
  //     currentItemShow = salesProduct.slice(indexOfFirstItem, indexOfLastItem);
  //   }
  //   break;
  // case 'search-result':
  //   totalData = [...searchProduct];
  //   if (filterSize || filterColor) {
  //     currentItemShow = searchProduct.map(item => {
  //       return {
  //         ...item,
  //         inventories: item.inventories.filter(item =>
  //           convertColor.includes(item.color) ||
  //           filterSize.includes(item.size))};
  //     }).filter(item => item.inventories.length !== 0)
  //       .slice(indexOfFirstItem, indexOfLastItem);
  //   } else {
  //     currentItemShow = searchProduct.slice(indexOfFirstItem, indexOfLastItem);
  //   }
  //   break;
  // default :
  //   totalData = [...categoryProductList];
  //   if (filterSize || filterColor) {
  //     currentItemShow = categoryProductList.map(item => {
  //       return {
  //         ...item,
  //         inventories: item.inventories.filter(item =>
  //           convertColor.includes(item.color) ||
  //           filterSize.includes(item.size))};
  //     }).filter(item => item.inventories.length !== 0)
  //       .slice(indexOfFirstItem, indexOfLastItem);
  //   } else {
  //     currentItemShow = categoryProductList.slice(indexOfFirstItem, indexOfLastItem);
  //   }
  // }

  // testing v2 ----------------------------- //

  useEffect(() => {
    if (type === 'search-result') {
      dispatch(search(searchKeyword));
    } else {
      dispatch(filterByCategory(type));
    }
    /*eslint-disable-next-line */
	}, [type]);

  const handleApplyFilter = (filterCondition, setSearchParams, dispatch) => {
    if (
      filterCondition?.color?.length === 0 &&
			filterCondition?.size?.length === 0
    ) {
      return;
    } else {
      setSearchParams({
        color: filterCondition?.color.map((item) => item).toString(),
        size : filterCondition?.size.map((item) => item).toString(),
      });
      dispatch(filterBySizeColor(filterCondition));
    }
  };
  const currentItemShow = displayProduct.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const [sort, setSort] = useState(null);

  return (
    <div>
      <Header catalouge disableAnnounce />
      <div className='catalouge'>
        <div className='catalouge__filter'>
          <Filter
            sort={sort}
            setSort={setSort}
            handleApplyFilter={handleApplyFilter}
          />
        </div>
        <div className='catalouge__items'>
          {type === 'search-result' && (
            <p className='search-indicator'>
              {t('searchResult')} &quot;{searchKeyword}&quot;
            </p>
          )}
          {currentItemShow.length > 0 ? (
            <div>
              <div>
                {currentItemShow.map((item, index) => (
                  <CatalougeItem key={index} data={item} />
                ))}
              </div>
              <Pagination
                itemPerPage={itemPerPage}
                totalItemLength={displayProduct.length}
                handleSwitchPage={handleSwitchPage}
              />
            </div>
          ) : (
            <p className='fail'>No item found, try again</p>
          )}
        </div>
      </div>
      <Footer lineTop />
    </div>
  );
};

export default Catalouge;
