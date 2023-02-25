import { Router } from 'express';
import {
    addCartItems,
    toggleCartChecked,
} from '../controllers/cart.controller.js';
import { useLogin } from '../middlewares/auth.js';

const cartRouter = Router();

cartRouter.post('/add/:id', useLogin, addCartItems);
cartRouter.get('/toggle', useLogin, toggleCartChecked);

export default cartRouter;
