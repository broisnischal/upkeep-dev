import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'dotenv/config';
import * as url from 'url';
import indexRouter from './src/v1/routes/index.js';
import usersRouter from './src/v1/routes/users.js';

const app = express();
export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './src/v1/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
