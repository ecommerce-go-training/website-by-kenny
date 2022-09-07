import { useState, useEffect, memo } from 'react';

import './style.scss';

function Announce() {
  const [info, setInfo] = useState('free shipping in vietnam');
  useEffect(() => {
    const interval1 = setInterval(() => {
      setInfo('free shipping for international orders over 500$');
    }, 4000);

    const interval2 = setInterval(() => {
      setInfo('free shipping in vietnam');
    }, 8000);

    return () => clearInterval(interval1, interval2);
  }, []);

  return (
    <div className='announce'>
      <p>{info}</p>
    </div>
  );
}

export default memo(Announce);
