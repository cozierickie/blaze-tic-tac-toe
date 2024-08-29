import io from 'socket.io-client';
const socket = io('http://localhost:5000'); // Adjust the URL as necessary

export const makeMove = (gameId, index, playerId) => {
    socket.emit('makeMove', { gameId, index, playerId });
};

export const joinGame = (gameId, playerId) => {
    socket.emit('joinGame', { gameId, playerId });
};

socket.on('gameUpdate', (game) => {
    // Handle game updates (e.g., update the UI)
});

export default socket;