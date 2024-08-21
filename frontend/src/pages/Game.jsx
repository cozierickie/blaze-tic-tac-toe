import { useState } from 'react';
import GameHeader from '../components/GameHeader';
import GameBoard from '../components/GameBoad';
import GamePlayer from '../components/GamePlayer';
import RestartGameButton from '../components/RestartGameButton';

const initialBoard = Array(9).fill(null);

const Game = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleRestart = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-[#1b1b32] text-[#0074fc]">
      <GameHeader />

      {/* Game Section */}
      <div className="flex justify-center items-center flex-1 w-full">
        <div className="flex justify-around items-center w-full max-w-[900px]">
          {/* Player 1 */}
          <GamePlayer playerName="Ismail" playerMark="X" />

          {/* Game Board */}
          <GameBoard
            board={board}
            setBoard={setBoard}
            isXNext={isXNext}
            setIsXNext={setIsXNext}
            winner={winner}
            setWinner={setWinner}
          />

          {/* Player 2 */}
          <GamePlayer playerName="A.I." playerMark="O" />
        </div>
      </div>

      <RestartGameButton handleRestart={handleRestart} />
    </div>
  );
};

export default Game;
