function RestartGameButton({ handleRestart }) {
  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={handleRestart}
        className="bg-[#0074fc] text-white py-2 px-6 rounded-lg"
      >
        Restart Game
      </button>
    </div>
  );
}

export default RestartGameButton;
