import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from 'components/Header';
import Filter from 'components/Filter';
import Footer from 'components/Footer';
import Pagination from 'components/Pagination';
import CatalougeItem from 'components/CatalougeItem';
import Loading from 'components/Loading';

import { getProducts } from 'global/redux/product/thunk';

import './style.scss';

const Catalouge = () => {
  const dispatch = useDispatch();
  const { productList, fetched } = useSelector((state) => state.product);

  const { type } = useParams();
  console.log('🚀 ~ file: index.js ~ line 22 ~ Catalouge ~ type', type);

  useEffect(() => {
    if (!fetched) {
      dispatch(getProducts());
    }
    /*eslint-disable-next-line */
	}, []);

  const selectedProductList = productList.filter(
    (item) => item?.category?.name === type
  );
  const salesProduct = productList.filter((item) => item?.discount?.status);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItemShow =
		type === 'sale'
		  ? salesProduct.slice(indexOfFirstItem, indexOfLastItem)
		  : selectedProductList.slice(indexOfFirstItem, indexOfLastItem);

  const handleSwitchPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header catalouge disableAnnounce />
      <div className='catalouge'>
        <div className='catalouge__filter'>
          <Filter />
        </div>
        <div className='catalouge__items'>
          <div>
            {currentItemShow ? (
              currentItemShow.map((item, index) => (
                <CatalougeItem key={index} data={item} />
              ))
            ) : (
              <Loading alter />
            )}
          </div>
          <Pagination
            itemPerPage={itemPerPage}
            totalItemLength={selectedProductList.length}
            handleSwitchPage={handleSwitchPage}
          />
        </div>
      </div>
      <Footer lineTop />
    </div>
  );
};

export default Catalouge;
