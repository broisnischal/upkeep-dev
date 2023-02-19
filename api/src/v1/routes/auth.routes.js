import { Router } from 'express';
import {
    authActivate,
    authLogin,
    authRegister,
    logout,
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/activate/:token', authActivate);
authRouter.post('/', authRegister);
authRouter.post('/login', authLogin);
authRouter.get('/logout', logout);

export default authRouter;
