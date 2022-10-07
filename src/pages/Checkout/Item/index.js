import './style.scss';

function Item({ data }) {
  return (
    <div className='checkout-item-image'>
      <div className='item-img'>
        <p>{data.quantity}</p>
        <img src={data.image} alt='dress image' />
      </div>
      <div className='item-info'>
        <div>
          <p>{data.name}</p>
          <p>
            {data.color} / {data.size}
          </p>
        </div>
        <p>USD ${data.price}</p>
      </div>
    </div>
  );
}

export default Item;
