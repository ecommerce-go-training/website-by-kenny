import './style.scss';

function MobileTitle({ label }) {
  return (
    <div className='mobileTitle'>
      <h1 className='mobileTitle-title'>{label}</h1>
      <p className='mobileTitle-path'>
				home <span>/{label}</span>
      </p>
    </div>
  );
}

export default MobileTitle;
