import express from 'express';
import { createGame, getGameById, makeMove, chatInGame } from '../controllers/gameController.js';

const router = express.Router();

router.post('/create', createGame);
router.get('/:gameId', getGameById);
router.post('/move', makeMove);
router.post('/chat', chatInGame);

export default router;
