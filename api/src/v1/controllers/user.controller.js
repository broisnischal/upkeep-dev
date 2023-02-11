import sanitize from 'mongo-sanitize';
import { generateToken } from '../utils/utils.js';

export const authLogin = (req, res, next) => {
    try {
        const email = sanitize(req.body.email);
        const username = sanitize(req.body.username);
        const password = sanitize(req.body.password);

        const token = generateToken({ email, username });

        return res.json({ msg: `hello your token is ${token}` });
    } catch (err) {
        process.env.ENV == 'development' ? console.log(err) : null;
        return res.status(500).json({ msg: 'Something went wrong !' });
    }
};
