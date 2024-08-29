import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DecorativeElements from '../components/DecorativeElements';
import SettingButton from '../components/SettingButton';
import PrimaryButton from '../components/PrimaryButton';
import BlazeLogo from '../assets/blaze-logo.svg'; // Import the Blaze Logo
import '../index.css';

function Settings() {
  const [gameMode, setGameMode] = useState('PvC');
  const [gridSize, setGridSize] = useState(3);
  const [difficulty, setDifficulty] = useState('Easy');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (player1 && (gameMode === 'PvC' || (gameMode === 'PvP' && player2))) {
      const params = new URLSearchParams({
        mode: gameMode,
        gridSize: gridSize,
        difficulty: gameMode === 'PvC' ? difficulty : undefined,
        player1: player1,
        player2: gameMode === 'PvP' ? player2 : undefined,
      }).toString();
      navigate(`/game?${params}`);
    } else {
      alert('Please fill out the required fields.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1b1b32] relative overflow-hidden">
      <div className="text-center max-w-md w-full">
        {/* Replace text with Blaze Logo */}
        <img src={BlazeLogo} alt="Blaze Logo" className="w-24 h-24 mx-auto mb-8" />
        
        <div className="bg-[#2a2a4a] p-8 rounded-lg shadow-lg">
          <div className="mb-8">
            <p className="text-gray-300 font-semibold mb-4">Game Mode:</p>
            <div className="flex justify-center space-x-4">
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

          {gameMode === 'PvC' && (
            <div className="mb-8">
              <p className="text-gray-300 font-semibold mb-4">Difficulty:</p>
              <div className="flex justify-center space-x-4">
                {['Easy', 'Medium', 'Hard'].map((level) => (
                  <SettingButton
                    key={level}
                    label={level}
                    handleClick={() => setDifficulty(level)}
                    isSelected={difficulty === level}
                  />
                ))}
              </div>
            </div>
          )}

          {gameMode === 'PvP' && (
            <div className="mb-8">
              <p className="text-gray-300 font-semibold mb-4">Player Names:</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Player 1 - X"
                  value={player1}
                  onChange={(e) => setPlayer1(e.target.value)}
                  className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0074fc]"
                  required
                />
                <input
                  type="text"
                  placeholder="Player 2 - O"
                  value={player2}
                  onChange={(e) => setPlayer2(e.target.value)}
                  className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0074fc]"
                  required
                />
              </div>
            </div>
          )}

          <div className="mb-8">
            <p className="text-gray-300 font-semibold mb-4">Grid Size:</p>
            <div className="flex justify-center space-x-4">
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
        </div>

        <PrimaryButton
          href="/game"
          label="Let the game begin!"
          onClick={handleStartGame}
          className="mt-8"
        />
      </div>

      <DecorativeElements />
    </div>
  );
}

export default Settings;
