import Header from 'components/Header';

import { riderOoo, riderBuild } from 'assets/images';

import './style.scss';

function ItemDetails() {
  return (
    <div>
      <Header login disableAnnounce />
      <div className='details'>
        <div className='details__img'>
          <div>
            <img src={riderOoo} alt='testing img' />
          </div>
          <div>
            <img src={riderBuild} alt='testing img' />
          </div>
          <div>
            <img src={riderOoo} alt='testing img' />
          </div>
          <div>
            <img src={riderOoo} alt='testing img' />
          </div>
        </div>
        <div className='details__info'>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
