import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

// Must be POST
router.post('/login', login);

export default router;
