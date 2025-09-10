import { Router } from 'express';
import { login, register, profile } from '../controllers/auth.controller.ts';
import { authMiddleware } from '../middlewares/auth.middleware.ts'


const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', authMiddleware, profile)

export default router

