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
      details  : 'Hello darkness my old friend, i come to talk with you again',
      care     : 'Dry clean only',
      quantity : 0,
    },
    {
      img        : cataWhiteDress,
      name       : 'White Dress',
      price      : 150,
      catalouge  : 'Best sellers',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 5,
    },
    {
      img        : cataPinkDress,
      name       : 'Pink Dress',
      price      : 30,
      catalouge  : 'Shorts',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 9,
    },
    {
      img        : cataPurpleDress,
      name       : 'Purple Dress',
      price      : 20,
      catalouge  : 'Sale',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 0,
    },
    {
      img        : riderW,
      name       : 'Kamenrider W',
      price      : 20,
      catalouge  : 'Sale',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 5,
    },
    {
      img        : riderOoo,
      name       : 'Kamenrider OOO',
      price      : 20,
      catalouge  : 'Sale',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 0,
    },
    {
      img        : riderBuild,
      name       : 'Kamenrider Build',
      price      : 20,
      catalouge  : 'Sale',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 5,
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
            <CatalougeItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalouge;
