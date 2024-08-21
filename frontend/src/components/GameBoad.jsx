function GameBoard({
  board,
  winner,
  isXNext,
  setBoard,
  setIsXNext,
  setWinner,
}) {
  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore if cell is filled or game over

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner('Draw');
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const renderCell = (index) => {
    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
      <div
        key={index}
        onClick={() => handleClick(index)}
        className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px] cursor-pointer"
      >
        <span
          className={`text-[80px] ${board[index] === 'X' ? 'text-[#ffd700]' : 'text-[#32cd32]'}`}
        >
          {board[index]}
        </span>
      </div>
    );
  };

  return (
    <div className="text-[48px] font-bold flex flex-col items-center">
      <div className="mb-4">
        {winner
          ? winner === 'Draw'
            ? 'Draw'
            : `${winner} Wins!`
          : `${isXNext ? 'X' : 'O'}'s Turn`}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {board.map((_, index) => renderCell(index))}
      </div>
    </div>
  );
}

export default GameBoard;
