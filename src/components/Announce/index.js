import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { useState, useEffect, memo } from 'react';

import { ONE_SECOND } from 'utils/constants';

import './style.scss';

function Announce({ disable = false }) {
  const [label, setLabel] = useState('free shipping in vietnam');

  useEffect(() => {
    const showInternationalShipping = setInterval(() => {
      setLabel('free shipping for international orders over 500$');
    }, ONE_SECOND * 4);

    const ShowVietnamShipping = setInterval(() => {
      setLabel('free shipping in vietnam');
    }, ONE_SECOND * 8);

    return () => clearInterval(showInternationalShipping, ShowVietnamShipping);
  }, []);

  return (
    <div className={classNames('announce', { active: disable })}>
      <p>{label}</p>
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
