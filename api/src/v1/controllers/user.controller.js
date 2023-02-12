import sgMail from '@sendgrid/mail';
import sanitize from 'mongo-sanitize';
import { generateToken, verifyToken } from '../utils/utils.js';
import {
    validateUsername,
    validateEmail,
    validatePassword,
} from '../utils/validation.js';
import User from '../models/user.model.js';

// config
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const authRegister = async (req, res, next) => {
    try {
        const email = sanitize(req.body.email);
        const username = sanitize(req.body.username);
        const password = sanitize(req.body.password);

        if (!email || !username || !password)
            return res.status(400).json({ msg: 'Please enter all fields! ' });
        if (await User.findOne({ $or: [{ username, email }] }))
            return res.status(403).json({
                msg: 'Email or Username is already taken ! Try using another.',
            });
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

        const mail = {
            to: email,
            from: process.env.EMAIL_FROM, // Change to your verified sender
            subject: 'Please Activate your Account !',
            text: `Please refer to this link to activate your account : ${link} `,
            html: `<strong> <a href='${link}'>Activate</a></strong> <br> if button doesn't work ${link}`,
        };

        await sgMail
            .send(mail)
            .then((response) => {
                console.log(response[0].statusCode);
                console.log(response[0].headers);
                return res.json({ msg: `Please activate your email !`, link });
            })
            .catch((error) => {
                console.error(error);
                return res.json({
                    msg: `Failed to activate your email, Please try again later!`,
                });
            });
    } catch (err) {
        process.env.ENV == 'development' ? console.log(err) : null;
        return res.status(500).json({ msg: 'Something went wrong !' });
    }
};

export const authActivate = async (req, res, next) => {
    try {
        const { token } = req.params || req.body || req.headers['token'];
        if (!token)
            return res
                .status(403)
                .send({ success: false, msg: 'Invalid request !' });

        const data = verifyToken(token, process.env.AUTH_SECRET);
        console.log(data);
        if (await User.findOne({ $or: [{ username, email }] }))
            return res
                .status(403)
                .json({
                    msg: 'Email or Username is already taken ! Try using another.',
                });

        if (data && token) {
            if (
                await User.create({
                    email: data.email,
                    username: data.username,
                    password: data.password,
                })
            ) {
                return res
                    .status(200)
                    .send({ msg: 'User activated, Please Login', data });
            } else {
                return res
                    .status(500)
                    .send({ msg: 'Failed to activate user!' });
            }
        } else {
            return res
                .status(500)
                .json({ msg: 'Invalid empty or token expired !' });
        }
    } catch (err) {
        process.env.ENV == 'development' ? console.log(err) : null;
        return res.status(500).json({ msg: 'Invalid or token expired !' });
    }
};
