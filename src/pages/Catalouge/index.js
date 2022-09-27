import Header from 'components/Header';
import Filter from 'components/Filter';

import './style.scss';

function Catalouge() {
  return (
    <div>
      <Header login disableAnnounce />
      <div className='catalouge'>
        <div className='catalouge__filter'>
          <Filter />
        </div>
        <div className='catalouge__items'>
          <h1>Item</h1>
        </div>
      </div>
    </div>
  );
}

export default Catalouge;
