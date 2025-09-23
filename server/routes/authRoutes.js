import express from 'express';
import {


  postLogin,
  postRegister,
  
} from '../controllers/authController.js';

const router = express.Router();



router.post('/login', postLogin);
router.post('/register', postRegister);

export default router;