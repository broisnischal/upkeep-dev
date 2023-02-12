import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'dotenv/config';
import * as url from 'url';
import indexRouter from './src/v1/routes/index.js';
import usersRouter from './src/v1/routes/users.js';
import authRouter from './src/v1/routes/auth.routes.js';
import cors from 'cors';

const app = express();
export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: '*' }));
app.use(express.static(path.join(__dirname, './src/v1/public')));

// Routes configurations

app.use('/', indexRouter);
app.use('/api/v1/user', usersRouter);
app.use('/api/v1/auth', authRouter);

export default app;
