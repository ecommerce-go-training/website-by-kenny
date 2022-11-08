import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProducts } from 'global/redux/product/thunk';

import Header from 'components/Header';
import Filter from 'components/Filter';
import Footer from 'components/Footer';
import Pagination from 'components/Pagination';
import CatalougeItem from 'components/CatalougeItem';

import './style.scss';

const Catalouge = () => {
  const dispatch = useDispatch();

  const { productList, searchProduct, fetched } = useSelector(
    (state) => state.product
  );

  const { type } = useParams();

  const categoryProductList = productList.filter(
    (item) => item?.category?.name === type
  );
  const salesProduct = productList.filter((item) => item?.discount?.status);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  const currentItemShow =
		type === 'search-result'
		  ? searchProduct.slice(indexOfFirstItem, indexOfLastItem)
		  : type === 'sale'
		    ? salesProduct.slice(indexOfFirstItem, indexOfLastItem)
		    : categoryProductList.slice(indexOfFirstItem, indexOfLastItem);

  console.log(
    '🚀 ~ file: index.js ~ line 35 ~ Catalouge ~ currentItemShow',
    currentItemShow
  );

  const handleSwitchPage = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (!fetched) {
      dispatch(getProducts());
    }
    /*eslint-disable-next-line */
	}, []);

  return (
    <div>
      <Header catalouge disableAnnounce />
      <div className='catalouge'>
        <div className='catalouge__filter'>
          <Filter />
        </div>
        <div className='catalouge__items'>
          {currentItemShow.length > 0 ? (
            <div>
              <div>
                {currentItemShow.map((item, index) => (
                  <CatalougeItem key={index} data={item} />
                ))}
              </div>
              <Pagination
                itemPerPage={itemPerPage}
                totalItemLength={categoryProductList.length}
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
