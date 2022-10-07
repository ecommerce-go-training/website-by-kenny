import './style.scss';

function Item({ data }) {
  return (
    <div className='checkout-item-image'>
      <div className='item-img'>
        <p>{data.quantity}</p>
        <img src={data.image} alt='dress image' />
      </div>
      <div className='item-info'>
        <p>{data.name}</p>
        <p>
          {data.color} / {data.size}
        </p>
      </div>
      <div className='item-price'></div>
    </div>
  );
}

export default Item;
