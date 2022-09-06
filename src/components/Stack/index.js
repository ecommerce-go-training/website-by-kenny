import PropTypes from 'prop-types';

function Stack({ children, spacing, direction, wrap, show }) {
  const style = {
    position     : 'relative',
    display      : show ? 'flex' : 'none',
    gap          : `${spacing * 0.25}rem`,
    flexDirection: direction,
    flexWrap     : wrap ? 'wrap' : 'nowrap',
  };

  return <div style={style}>{children}</div>;
}

Stack.defaultProps = {
  spacing  : 4,
  wrap     : false,
  direction: 'row',
  show     : true,
};

Stack.propTypes = {
  spacing  : PropTypes.number,
  wrap     : PropTypes.bool,
  direction: PropTypes.oneOf(['column', 'row']),
  show     : PropTypes.bool,
};

export default Stack;
