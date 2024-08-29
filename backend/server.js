// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/ai-move', (req, res) => {
  const { board } = req.body;
  const move = calculateAIMove(board); // Implement your AI logic here
  res.json({ move });
});

const calculateAIMove = (board) => {
  // Implement AI logic to decide the move
  return bestMove; // Example: return an index for the AI's move
};

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});