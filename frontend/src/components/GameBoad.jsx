function GameBoard() {
  return (
    <div className="text-[48px] font-bold flex flex-col items-center">
      <div className="mb-4">2 - 3</div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]">
          <span className="text-[80px] text-[#ffd700]">X</span>
        </div>
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]">
          <span className="text-[80px] text-[#ffd700]">X</span>
        </div>
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]">
          <span className="text-[80px] text-[#32cd32]">O</span>
        </div>
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]" />
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]">
          <span className="text-[80px] text-[#32cd32]">O</span>
        </div>
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]" />
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]" />
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]" />
        <div className="border-4 border-[#0074fc] flex justify-center items-center w-[100px] h-[100px]" />
      </div>
    </div>
  );
}

export default GameBoard;
