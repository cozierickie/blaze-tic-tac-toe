# Tic-Tac-Toe Game

## Overview

This project is a multiplayer Tic-Tac-Toe game with both player vs. player and player vs. computer modes. It features real-time gameplay, chat functionality, and persistent user scores using MongoDB. The project is built with Express.js, React, Tailwind CSS, and Socket.IO.

## Backend Setup

### Prerequisites

- Node.js
- MongoDB

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/blaze-alx/blaze-tic-tac-toe.git
   cd blaze-tic-tac-toe/backend
   ```

2. **Install Dependencies**

   ```bash
   npm install pnpm # if you do not have pnpm installed already
   pnpm install # to install associated packages
   ```

3. **Create and Configure `.env` File**

   Create a `.env` file in the root directory with the following content:

   - Ensure to have mongodb installed on your local machine

   ```env
   MONGO_URI=mongodb://localhost:27017/tictactoe
   PORT=3000
   ```

4. **Start the Server**

   ```bash
   pnpm start #to start the server (suitable for prod env)
   pnpm run dev #to start the server with nodemon (suitable for dev env)
   ```

## API Endpoints

- **POST /api/users/register**: Register a new user
- **POST /api/games/create**: Create a new game

## Socket.IO Events

- **joinGame**: Join a specific game room
- **makeMove**: Notify all clients of a move
- **sendMessage**: Send a chat message to all clients in the game room
- **receiveMessage**: Receive a chat message in the game room

## Frontend Setup

### Prerequisites

- Node.js
- Vite (for bundling and development)

### Installation

1. **Navigate to the Frontend Directory**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

### Development and Build

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Frontend Url**: `http://localhost:5000`

## Contributors

