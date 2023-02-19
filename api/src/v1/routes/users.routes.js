import { Router } from 'express';
import { getAllUsers } from '../controllers/user.controller.js';
import { verifyAdmin, verifyLoginAndRoles } from '../middlewares/auth.js';
const usersRouter = Router();

/* GET users listing. */
usersRouter.get('/', verifyLoginAndRoles, verifyAdmin, getAllUsers);

export default usersRouter;
