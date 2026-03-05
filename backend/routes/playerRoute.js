import express from 'express';
import { listPlayers, addPlayer, removePlayer, singlePlayer } from '../controllers/playerController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const playerRouter = express.Router();

playerRouter.post('/add', adminAuth, upload.fields([{ name: 'profileImage', maxCount: 1 }]), addPlayer);
playerRouter.post('/remove', adminAuth, removePlayer);
playerRouter.post('/single', singlePlayer);
playerRouter.get('/list', listPlayers);

export default playerRouter;
