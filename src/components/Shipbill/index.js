import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Shipbill = ({ label, disableTitle, serviceName, deliveryTime, cost }) => {
  const classes = classNames({
    shipbill__title: true,
    disable        : disableTitle,
  });

  return (
    <div className='shipbill'>
      <div className={classes}>
        <div>{label}</div>
      </div>
      <div className='shipbill__bill'>
        <div>
          <p className='shipbill__bill-header'>service</p>
          <p className='shipbill__bill-info'>{serviceName}</p>
        </div>
        <div>
          <p className='shipbill__bill-header'>delivery time</p>
          <p className='shipbill__bill-info'>{deliveryTime}</p>
        </div>
        <div>
          <p className='shipbill__bill-header'>cost</p>
          <p className='shipbill__bill-info'>{cost}</p>
        </div>
      </div>
    </div>
  );
};

Shipbill.defaultProps = {
  label       : 'Add label',
  disableTitle: false,
  serviceName : 'Add name',
  deliveryTime: 'Add time',
  cost        : 'Add cost',
};

Shipbill.proptypes = {
  label       : PropTypes.string,
  disableTitle: PropTypes.bool,
  serviceName : PropTypes.string,
  deliveryTime: PropTypes.string,
  cost        : PropTypes.string,
};

export default Shipbill;
