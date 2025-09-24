import express from 'express';
import {postLogin, postRegister} from '../controllers/authController.js';

const router = express.Router();

// Authentication routes
router.post('/register', postRegister);
router.post('/login', postLogin);

export default router;



