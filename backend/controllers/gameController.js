import Game from '../models/Game.js';
import User from '../models/User.js';
import { v4 as uuidv4 } from 'uuid';

export const createGame = async (req, res) => {
  const { playerX, playerO } = req.body;

  try {
    const gameId = uuidv4();

    const game = await Game.create({
      playerX,
      playerO,
      gameId,
    });

    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

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

export const makeMove = async (req, res) => {
  const { gameId, index, player } = req.body;

  try {
    const game = await Game.findOne({ gameId });

    if (!game || game.isGameOver) {
      return res.status(404).json({ message: 'Invalid game or game over' });
    }

    game.gameState[index] = player;

    // Check for a winner or if the game is over
    // (Add your win-checking logic here)

    await game.save();

    res.json(game);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

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
