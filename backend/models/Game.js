import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  playerX: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  playerO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  gameState: {
    type: Array,
    default: Array(9).fill(null),
  },
  winner: {
    type: String,
    default: null,
  },
  gameId: {
    type: String,
    unique: true,
  },
  isGameOver: {
    type: Boolean,
    default: false,
  },
  chat: [
    {
      username: String,
      message: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
