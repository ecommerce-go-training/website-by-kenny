import Header from 'components/Header';
import Filter from 'components/Filter';
import Footer from 'components/Footer';
import CatalougeItem from 'components/CatalougeItem';

import {
  cataBackDress,
  cataPinkDress,
  cataPurpleDress,
  cataWhiteDress,
  whiteDress,
  greenDress,
  orangeDress,
} from 'assets/images';

import './style.scss';

const Catalouge = () => {
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
      img        : orangeDress,
      name       : 'Dress Orange',
      price      : 20,
      catalouge  : 'Sale',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 5,
    },
    {
      img        : greenDress,
      name       : 'Dressing OOO',
      price      : 20,
      catalouge  : 'Sale',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 0,
    },
    {
      img        : whiteDress,
      name       : 'Builtin Dress',
      price      : 20,
      catalouge  : 'Sale',
      description:
				'A high neck open mini dress cut in a lien with an elasticated waist and back cross over detail',
      details : 'Hello darkness my old friend, i come to talk with you again',
      care    : 'Dry clean only',
      quantity: 5,
    },
  ];

  //const [ data, setData ] = useState([]);
  //const [ loading, setLoading ] = useState(false);
  //const [ currentPage, setCurrentPage ] = useState(1);
  //const [ itemPerPage, setItemPerPage ] = useState(10);

  //const indexOfLastItem = currentPage * itemPerPage;
  //const indexOfFirstItem = indexOfLastItem - itemPerPage;
  //const currentItemShow = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Header catalouge disableAnnounce />
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
      <Footer />
    </div>
  );
};

export default Catalouge;
