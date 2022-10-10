import { xmark, more } from 'assets/images';

import './style.scss';

function CartItem({ data }) {
  return (
    <div className='cart-items'>
      <div className='cart-items-img'>
        <img src={data.image} alt='dress image' />
      </div>
      <div className='cart-items-info'>
        <div>
          <p>{data.name}</p>
          <img src={xmark} alt='close-delete icon' />
        </div>
        <p>USD ${data.price}</p>
        <div>
          <p>COLOR: </p>
          <div>
            <p>{data.color}</p> <img src={more} alt='more icon' />
          </div>
        </div>
        <div>
          <p>SIZE: </p>
          <div>
            <p>{data.size}</p> <img src={more} alt='more icon' />
          </div>
        </div>
        <div>
          <p>QUANTITY: </p>
          <div>
            <p>{data.quantity}</p> <img src={more} alt='more icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
