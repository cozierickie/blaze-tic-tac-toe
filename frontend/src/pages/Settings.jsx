import { useState } from 'react';
import DecorativeElements from '../components/DecorativeElements';
import SettingButton from '../components/SettingButton';
import PrimaryButton from '../components/PrimaryButton';

function Settings() {
  const [gameMode, setGameMode] = useState('PvC');
  const [gridSize, setGridSize] = useState(3);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  // const handleStartGame = () => {
  //   console.log({ gameMode, gridSize, player1, player2 });
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1b1b32] relative overflow-hidden">
      <div className="text-center">
        <h1 className="text-[#0074fc] text-[48px] font-bold">tic-tac-toe.</h1>
        <div className="bg-[#2a2a4a] p-8 mt-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <p className="text-gray-300 font-semibold mb-2">Game mode:</p>
            <div className="space-x-4">
              <SettingButton
                label="PvC"
                handleClick={() => setGameMode('PvC')}
                isSelected={gameMode === 'PvC'}
              />
              <SettingButton
                label="PvP"
                handleClick={() => setGameMode('PvP')}
                isSelected={gameMode === 'PvP'}
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-300 font-semibold mb-2">Grid size:</p>
            <div className="space-x-4">
              {[3, 4, 5].map((size) => (
                <SettingButton
                  key={size}
                  label={size}
                  handleClick={() => setGridSize(size)}
                  isSelected={gridSize === size}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-300 font-semibold mb-2">Player names:</p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Player 1 - X"
                value={player1}
                onChange={(e) => setPlayer1(e.target.value)}
                className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Player 2 - O"
                value={player2}
                onChange={(e) => setPlayer2(e.target.value)}
                className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        <PrimaryButton href="/game" label="Let the game begin!" />
      </div>

      <DecorativeElements />
    </div>
  );
}

export default Settings;
