import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Utils
 */
import createBoard from 'utils/createBoard';

/**
 * Components
 */
import Cell from 'components/Cell/Cell';

function Board({
  className
}) {
  /**
   * State
   */
  const [board, setBoard] = useState(createBoard());

  /**
     * Renderers
     */
  const renderCells = () => {
    return (
      <Cell />
    );
  };

  return (
    <div className={`Board ${className}`}>
      { renderCells() }
    </div>
  );
}

Board.defaultProps = {
  className: ''
};

Board.propTypes = {
  className: PropTypes.string,
};

export default Board;
