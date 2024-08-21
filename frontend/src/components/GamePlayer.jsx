function GamePlayer({ playerName, playerMark }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[48px] font-bold">{playerName}</div>
      <div className="relative w-[200px] h-[200px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] text-gray-600 opacity-10">
          {playerMark}
        </div>
      </div>
    </div>
  );
}

export default GamePlayer;
