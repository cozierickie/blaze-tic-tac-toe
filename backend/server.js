const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Global error handler
app.use((err, req, res, next) => {
  console.error(`Error: ${err}`);
  res.status(500).json({ error: 'An Error Occured' });
});

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'This is blaze-alx' });
});

// Default 404 error response
app.use((req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`The Tic-Tac-Toe server is running on port ${PORT}`);
});
