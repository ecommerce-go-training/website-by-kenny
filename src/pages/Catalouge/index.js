import Header from 'components/Header';
import Filter from 'components/Filter';
import CatalougeItem from 'components/CatalougeItem';

import {
  cataBackDress,
  cataPinkDress,
  cataPurpleDress,
  cataWhiteDress,
  riderBuild,
  riderOoo,
  riderW,
} from 'assets/images';

import './style.scss';

function Catalouge() {
  const data = [
    {
      img      : cataBackDress,
      name     : 'Black Dress',
      price    : 50,
      catalouge: 'New Arrival',
    },
    {
      img      : cataWhiteDress,
      name     : 'White Dress',
      price    : 150,
      catalouge: 'Best sellers',
    },
    {
      img      : cataPinkDress,
      name     : 'Pink Dress',
      price    : 30,
      catalouge: 'Shorts',
    },
    {
      img      : cataPurpleDress,
      name     : 'Purple Dress',
      price    : 20,
      catalouge: 'Sale',
    },
    {
      img      : riderW,
      name     : 'Kamenrider W',
      price    : 20,
      catalouge: 'Sale',
    },
    {
      img      : riderOoo,
      name     : 'Kamenrider OOO',
      price    : 20,
      catalouge: 'Sale',
    },
    {
      img      : riderBuild,
      name     : 'Kamenrider Build',
      price    : 20,
      catalouge: 'Sale',
    },
  ];

  return (
    <div>
      <Header login disableAnnounce />
      <div className='catalouge'>
        <div className='catalouge__filter'>
          <Filter />
        </div>
        <div className='catalouge__items'>
          {data.map((item, index) => (
            <div key={index}>
              <CatalougeItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalouge;
