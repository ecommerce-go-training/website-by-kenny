import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({
      top     : 0,
      left    : 0,
      behavior: 'smooth',
    });
  }, [location]);
  return children;
};

export default ScrollToTop;
