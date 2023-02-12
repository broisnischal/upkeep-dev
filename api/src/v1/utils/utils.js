import jwt from 'jsonwebtoken';

/**
 * Generates token
 * @function
 * @param {object} payload - Payload of the data.
 * @param {string} time - Time to expire.
 */
export const generateToken = (payload, time = '1hr') => {
    return jwt.sign(payload, process.env.AUTH_SECRET, {
        expiresIn: process.env.EXPIRES || time || '1d',
    });
};

export const verifyToken = (token, secret) => {
    try {
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (err) {
        process.env.ENV == 'development' ? console.log(err) : null;
        return false;
    }
};
