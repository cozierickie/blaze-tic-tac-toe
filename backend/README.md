# Tic-Tac-Toe Backend

## Description

This is the backend for the Tic-Tac-Toe game, featuring multiplayer support and real-time chat functionality. It uses Express.js, Socket.IO, and MongoDB.

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/blaze-alx/blaze-tic-tac-toe.git
   cd blaze-tic-tac-toe/backend
   ```

2. **Install Dependencies**

   ```bash
   npm install -g pnpm # if you do not have pnpm installed already
   pnpm install # to install associated packages
   ```

3. **Create and Configure `.env` File**

   Create a `.env` file in the root directory with the following content:

   - Ensure to have mongodb installed on your local machine
   - Generate JWT with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
   ```env
   MONGO_URI=mongodb://localhost:27017/tictactoe
   JWT_SECRET=<add JWT here>
   PORT=5000
   ```

4. **Start the Server**

   ```bash
   pnpm start #to start the server (suitable for prod env)
   pnpm run dev #to start the server with nodemon (suitable for dev env)
   ```

## API Endpoints

- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login an existing user
- **POST /api/games/create**: Create a new game

## Socket.IO Events

- **joinGame**: Join a specific game room
- **makeMove**: Notify all clients of a move
- **sendMessage**: Send a chat message to all clients in the game room
- **receiveMessage**: Receive a chat message in the game room

## License

This project is licensed under the MIT License
