import { FaCog, FaRedo } from 'react-icons/fa';

function GameHeader() {
  return (
    <header className="flex justify-between items-center w-full p-4">
      <a href="/">
        <h1 className="text-[24px] font-bold">Tic Tac Toe</h1>
      </a>
      <div className="flex space-x-4 text-[20px]">
        <FaCog />
        <FaRedo />
      </div>
    </header>
  );
}

export default GameHeader;
