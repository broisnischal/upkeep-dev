import { Router } from 'express';
import {
    getAllUsers,
    getAllVendors,
    requestVendor,
    updateUser,
} from '../controllers/user.controller.js';
import { verifyAdmin, useLogin } from '../middlewares/auth.js';
const usersRouter = Router();

/* GET users listing. */
usersRouter.get('/', useLogin, verifyAdmin, getAllUsers);
usersRouter.get('/vendor', useLogin, verifyAdmin, getAllVendors);
usersRouter.post('/vendor', useLogin, requestVendor);
usersRouter.patch('/update', useLogin, updateUser);

export default usersRouter;
