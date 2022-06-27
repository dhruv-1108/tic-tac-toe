import React from "react";

const StatusMessage = ({ winner, current }) => {
  const constNoMovesLeft = current.board.every( el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !constNoMovesLeft &&
        `Next player is ${current.isXNext ? "X" : "O"}`}
      {!winner && constNoMovesLeft && `X and O tied`}
    </h2>
  );
};

export default StatusMessage;
