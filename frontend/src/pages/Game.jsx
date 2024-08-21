import GameBoard from '../components/GameBoad';
import GameHeader from '../components/GameHeader';
import GamePlayer from '../components/GamePlayer';

function Game() {
  return (
    <div className="flex flex-col items-center h-screen bg-[#1b1b32] text-[#0074fc]">
      <GameHeader />

      {/* Game Section */}
      <div className="flex justify-center items-center flex-1 w-full">
        <div className="flex justify-around items-center w-full max-w-[900px]">
          {/* Player 1 */}
          <GamePlayer playerName="Ismail" playerMark="X" />

          {/* Game Board */}
          <GameBoard />

          {/* Player 2 */}
          <GamePlayer playerName="A.I." playerMark="O" />
        </div>
      </div>

      {/* Active Player Button */}
      <div className="mb-4">
        <button
          type="button"
          className="bg-[#0074fc] text-white py-2 px-6 rounded-lg"
        >
          Ismail
        </button>
      </div>
    </div>
  );
}

export default Game;
