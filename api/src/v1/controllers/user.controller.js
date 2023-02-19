import User from '../models/user.model.js';
import { limitAndSkip } from '../utils/utils.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const [limit, skip] = limitAndSkip(req.query);

        const users = await User.find()
            .sort({
                createdAt: -1,
            })
            .limit(limit)
            .skip(skip);

        return res.json(users);
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};
