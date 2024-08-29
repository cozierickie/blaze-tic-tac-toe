import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GameHeader from '../components/GameHeader';
import GameBoard from '../components/GameBoard';
import GamePlayer from '../components/GamePlayer';
import RestartGameButton from '../components/RestartGameButton';
import { getAIMove } from '../api'; // Import the API function

// Initial state for the game board
const initialBoard = Array(9).fill(null);

/**
 * The main Game component that handles the logic and rendering of the Tic-Tac-Toe game.
 * It supports both Player vs Player (PvP) and Player vs Computer (PvC) game modes.
 */
const Game = () => {
  const { state } = useLocation(); // Get game state from location
  const { gameMode, player1, player2 } = state || {}; // Destructure game mode and player names from state
  const [board, setBoard] = useState(initialBoard); // State to manage the game board
  const [isXNext, setIsXNext] = useState(true); // State to track whose turn it is
  const [winner, setWinner] = useState(null); // State to store the winner

  /**
   * Resets the game to its initial state.
   */
  const handleRestart = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  /**
   * Effect to handle AI move in PvC mode. The AI makes a move after 1.5 seconds.
   */
  useEffect(() => {
    if (gameMode === 'PvC' && !isXNext) {
      const timer = setTimeout(async () => {
        const aiMove = await getAIMove(board);
        if (aiMove !== null) {
          handleClick(aiMove); // Make the AI move
        }
      }, 1500); // Delay of 1.5 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount or dependency change
    }
  }, [isXNext, board, gameMode]);

  /**
   * Handles a player clicking on a board cell.
   * @param {number} index - The index of the cell that was clicked.
   */
  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore if cell is filled or game is over

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O'; // Assign 'X' or 'O' to the cell
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner('Draw');
    }
  };

  /**
   * Calculates if there is a winner on the current board.
   * @param {Array} board - The current state of the game board.
   * @returns {string|null} - Returns 'X', 'O', 'Draw' or null if there is no winner.
   */
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
        return board[a]; // Return the winning mark ('X' or 'O')
      }
    }
    return null; // No winner
  };

  return (
    <div className="flex flex-col items-center h-screen bg-[#1b1b32] text-[#0074fc]">
      <GameHeader />

      <div className="flex justify-center items-center flex-1 w-full">
        <div className="flex justify-around items-center w-full max-w-[900px]">
          {/* Player 1 */}
          <GamePlayer playerName={player1 || "Ismail"} playerMark="X" />

          {/* Game Board */}
          <GameBoard
            board={board}
            setBoard={setBoard}
            isXNext={isXNext}
            setIsXNext={setIsXNext}
            winner={winner}
            setWinner={setWinner}
            handleClick={handleClick} // Pass the handleClick function to the board
          />

          {/* Player 2 */}
          <GamePlayer playerName={player2 || "A.I."} playerMark="O" />
        </div>
      </div>

      <RestartGameButton handleRestart={handleRestart} />
    </div>
  );
};

export default Game;