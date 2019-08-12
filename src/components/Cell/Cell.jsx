import React from 'react';
import PropTypes from 'prop-types';
import syltes from './Cell.module.scss';

function Cell({
  className
}) {
  return (
    <div className={`${syltes.cell} ${className}`} />
  );
}

Cell.defaultProps = {
  className: ''
};

Cell.propTypes = {
  className: PropTypes.string,
};

export default Cell;
