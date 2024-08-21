import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    player1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    player2: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    moves: [{ type: String }],
    winner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);
export default Game;
