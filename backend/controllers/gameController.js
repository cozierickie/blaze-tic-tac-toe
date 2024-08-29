import Game from '../models/Game.js';
import User from '../models/User.js';
import { v4 as uuidv4 } from 'uuid';

// Create a new game
export const createGame = async (req, res) => {
    try {
        const gameId = uuidv4();

        // Create a new game without assigning PlayerX or PlayerO
        const game = await Game.create({
            gameId,
            gameState: Array(9).fill(null), // Assuming a 3x3 Tic-Tac-Toe board
        });

        res.status(201).json(game);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get game details by ID
export const getGameById = async (req, res) => {
    const { gameId } = req.params;

    try {
        const game = await Game.findOne({ gameId }).populate('playerX playerO');

        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }

        res.json(game);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Make a move in the game
export const makeMove = async (req, res) => {
  const { gameId, index, playerId } = req.body;

  try {
      const game = await Game.findOne({ gameId });

      if (!game || game.isGameOver) {
          return res.status(404).json({ message: 'Invalid game or game over' });
      }

      // Assign PlayerX and PlayerO based on the first move
      if (!game.playerX && !game.playerO) {
          game.playerX = playerId;
      } else if (game.playerX && !game.playerO && game.playerX !== playerId) {
          game.playerO = playerId;
      } else if (game.playerO && !game.playerX && game.playerO !== playerId) {
          game.playerX = playerId;
      }

      const playerSymbol = game.playerX === playerId ? 'X' : 'O';

      // Check if the move is valid
      if (game.gameState[index] !== null) {
          return res.status(400).json({ message: 'Invalid move' });
      }

      game.gameState[index] = playerSymbol;

      // Check for a winner or if the game is over
      const winningCombinations = [
          [0, 1, 2], // Top row
          [3, 4, 5], // Middle row
          [6, 7, 8], // Bottom row
          [0, 3, 6], // Left column
          [1, 4, 7], // Middle column
          [2, 5, 8], // Right column
          [0, 4, 8], // Diagonal from top-left to bottom-right
          [2, 4, 6], // Diagonal from top-right to bottom-left
      ];

      let winner = null;
      for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (game.gameState[a] && game.gameState[a] === game.gameState[b] && game.gameState[a] === game.gameState[c]) {
              winner = game.gameState[a];
              break;
          }
      }

      if (winner) {
          game.isGameOver = true;
          game.winner = winner === 'X' ? game.playerX : game.playerO;

          // Increment totalWins for the winner
          await User.updateOne({ _id: game.winner }, { $inc: { totalWins: 1 } });
      } else if (!game.gameState.includes(null)) {
          // If there's no winner and no more moves, it's a draw
          game.isGameOver = true;
          game.winner = 'Draw';
      }

      // Increment totalMatches for both players
      await User.updateOne({ _id: game.playerX }, { $inc: { totalMatches: 1 } });
      await User.updateOne({ _id: game.playerO }, { $inc: { totalMatches: 1 } });

      await game.save();

      res.json(game);
  } catch (error) {
      res.status(500).json({ message: 'Server Error' });
  }
};

// Chat within a game
export const chatInGame = async (req, res) => {
    const { gameId, username, message } = req.body;

    try {
        const game = await Game.findOne({ gameId });

        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }

        game.chat.push({ username, message });

        await game.save();

        res.json(game);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};