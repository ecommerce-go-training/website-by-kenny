import React, { useState } from 'react';

import classNames from 'classnames';

import './style.scss';

const Pagination = ({ itemPerPage, totalItemLength, handleSwitchPage }) => {
  const pageNumber = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalItemLength / itemPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className='pagination'>
      <ul>
        {pageNumber.map((number) => (
          <li
            className={classNames({
              active: number === currentPage,
            })}
            key={number}
            onClick={() => {
              if (number !== currentPage) {
                handleSwitchPage(number);
                setCurrentPage(number);
                window.scrollTo({
                  top     : 0,
                  left    : 0,
                  behavior: 'smooth',
                });
              }
            }}
          >
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
