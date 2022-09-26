import PropTypes from 'prop-types';

import './style.scss';

function MobileTitle({ label }) {
  return (
    <div className='mobileTitle'>
      <h3 className='mobileTitle-title'>{label}</h3>
      <p className='mobileTitle-path'>
				home <span>/{label}</span>
      </p>
    </div>
  );
}

MobileTitle.defaultProps = {
  label: 'Add label',
};

MobileTitle.proptypes = {
  label: PropTypes.string,
};

export default MobileTitle;
