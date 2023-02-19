import sgMail from '@sendgrid/mail';
import sanitize from 'mongo-sanitize';
import jwt from 'jsonwebtoken';
import { generateToken, verifyToken } from '../utils/utils.js';
import {
    validateUsername,
    validateEmail,
    validatePassword,
} from '../utils/validation.js';
import User from '../models/user.model.js';
import { createError } from '../config/createError.js';
import bcrypt from 'bcryptjs';
import { sendMail } from '../utils/sendMail.js';

// config of sendgrid to send mail
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const authRegister = async (req, res, next) => {
    try {
        const email = sanitize(req.body.email);
        const username = sanitize(req.body.username);
        const password = sanitize(req.body.password);

        if (!email || !username || !password)
            return res.status(400).json({ msg: 'Please enter all fields! ' });

        const userExist = await User.findOne({
            $or: [{ username }, { email }],
        });

        if (userExist) {
            return res.status(403).json({
                msg: 'Email or Username is already taken ! Try using another.',
            });
        }
        if (username.length <= 6 || username.length > 15)
            return res.status(400).json({
                msg: "Username's character must be between 6 and 15 !",
            });
        if (!validateUsername(username))
            return res.status(400).json({
                msg: 'Username should be alphanumeric and not contain special characters !',
            });
        if (!validateEmail(email))
            return res
                .status(400)
                .json({ msg: 'Email address should be valid!' });
        if (!validatePassword(password))
            return res.status(400).json({
                msg: 'Password must contain one uppercase, symbol, number, and atleast 8 characters !',
            });

        const token = generateToken({ email, username, password });

        const link = `${process.env.CLIENT_URI}/auth/activate/${token}`;

        sendMail(email, link)
            .then((data) => {
                console.log(data);
                return res.json({
                    msg: `Please check your mail for activation link...`,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(408).json({
                    msg: `Failed to send mail, Please try again later!`,
                    link,
                });
            });
    } catch (err) {
        process.env.ENV == 'development' ? console.log(err) : null;
        return res.status(500).json({ msg: 'Something went wrong !' });
    }
};

export const authActivate = async (req, res, next) => {
    const { token } = req.params || req.body || req.headers['token'];
    try {
        if (!token)
            return res
                .status(403)
                .send({ success: false, msg: 'Invalid request !' });

        jwt.verify(token, process.env.AUTH_SECRET, async (err, result) => {
            if (err) return res.status(403).send({ msg: 'Unauthorized !' });
            const { username, email, password } = result;
            if (await User.findOne({ $or: [{ username, email }] }))
                return res.status(403).json({
                    msg: 'User Already Activated | Please Login !',
                });
            await User.create({
                username,
                email,
                password,
            })
                .then((msg) => {
                    return res
                        .status(201)
                        .send({ msg: 'User successfully activated !' });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(408).send({
                        msg: 'Failed to Activate user, Try again !',
                    });
                });
        });
    } catch (err) {
        console.log(err);
        process.env.ENV == 'development' ? console.log(err) : null;
        return res.status(500).json({ msg: 'Invalid or token expired !' });
    }
};

export const authLogin = async (req, res, next) => {
    try {
        const { emailorusername, password } = req.body;

        if (!emailorusername)
            return next(
                createError('Please enter your Email or Username.', 400),
            );

        if (!password)
            return next(createError('Please submit your Password.', 400));

        const user = await User.findOne({
            $or: [{ email: emailorusername }, { username: emailorusername }],
        });

        if (!user)
            return next(
                createError("User doesn't exists, Please register !", 403),
            );

        if (user && (await bcrypt.compare(password, user.password))) {
            let token = jwt.sign({ id: user._id }, process.env.SECRETTOKEN);

            res.cookie('accesstoken', `Bearer ${token}`);

            return res.status(200).send({ msg: 'Logged in successfully.' });
        } else {
            res.clearCookie('accesstoken');
            return next(createError('Invalid Credentials!', 403));
        }
    } catch (err) {
        return next(createError(err.message, 500, err.stack));
    }
};

export const getAccessToken = async (req, res, next) => {};

export const generateRefreshToken = async (req, res, next) => {};

export const logout = async (req, res, next) => {
    try {
        res.clearCookie('accesstoken');
        return res.status(200).send({ msg: 'Logged out successfully !' });
    } catch (error) {
        next(error);
    }
};
