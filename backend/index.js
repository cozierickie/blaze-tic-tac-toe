import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import gameRoutes from './routes/gameRoutes.js';
import errorMiddleware from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Socket.IO Logic
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinGame', ({ gameId }) => {
    socket.join(gameId);
    console.log(`Client joined game: ${gameId}`);
  });

  socket.on('makeMove', ({ gameId, index, player }) => {
    io.to(gameId).emit('moveMade', { index, player });
  });

  socket.on('sendMessage', ({ gameId, username, message }) => {
    io.to(gameId).emit('receiveMessage', { username, message });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
