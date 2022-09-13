import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useState, useEffect, memo } from 'react';

import { ONE_SECOND } from 'utils/constants';

import './style.scss';

function Announce({ disable }) {
  const classes = classNames({
    announce: true,
    active  : disable,
  });

  const [info, setInfo] = useState('free shipping in vietnam');

  useEffect(() => {
    const interval1 = setInterval(() => {
      setInfo('free shipping for international orders over 500$');
    }, ONE_SECOND * 4);

    const interval2 = setInterval(() => {
      setInfo('free shipping in vietnam');
    }, ONE_SECOND * 8);

    return () => clearInterval(interval1, interval2);
  }, []);

  return (
    <div className={classes}>
      <p>{info}</p>
    </div>
  );
}

Announce.defaultProps = {
  disable: false,
};

Announce.propTypes = {
  disable: PropTypes.bool,
};

export default memo(Announce);
