import { Router } from 'express';
import { authLogin } from '../controllers/user.controller.js';

const authRouter = Router();

authRouter.post('/', authLogin);

export default authRouter;
