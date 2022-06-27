import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  
  return (
    <button type="button" className="square" onClick={onClick} style= {{
      fontWeight: !isWinningSquare ? 'normal' : 'bold'}
      } >
      {value}
    </button>
  );
};

export default Square;
