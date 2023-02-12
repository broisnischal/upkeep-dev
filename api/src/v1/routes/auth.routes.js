import { Router } from 'express';
import { authActivate, authRegister } from '../controllers/user.controller.js';

const authRouter = Router();

authRouter.post('/', authRegister);
authRouter.post('/:token', authActivate);

export default authRouter;
