import express from "express";
import http from "http";
import { Server as SocketIoServer } from "socket.io";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const server = http.createServer(app);
const io = new SocketIoServer(server);

// Middleware
app.use(express.json());
app.use(cors());

// API Routes here

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("New client connected");

  // Handle game events
  socket.on("joinGame", (gameId) => {
    socket.join(gameId);
    console.log(`Client joined game ${gameId}`);
  });

  socket.on("makeMove", ({ gameId, move }) => {
    io.to(gameId).emit("moveMade", move);
  });

  // Handle chat events
  socket.on("sendMessage", ({ gameId, message }) => {
    // Emit the message to everyone in the same game room
    io.to(gameId).emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
