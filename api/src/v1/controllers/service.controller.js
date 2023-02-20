import asyncHandler from 'express-async-handler';
import { createError } from '../config/createError.js';
import Category from '../models/category.model.js';
import mongoose from 'mongoose';
import Service from '../models/service.model.js';

export const createService = asyncHandler(async (req, res, next) => {
    const { title, desc } = req.body;
    const { id } = req.query;

    if (!id) return next(createError('Category is required!', 400));
    if (!title || !desc) return next(createError('Invalid Request', 400));

    if (!mongoose.Types.ObjectId.isValid(id))
        return next(createError('Invaf3d52fef34554alid Request', 403));

    const cad = await Category.findById(id);
    if (!!!cad) return next(createError("Category doesn't exists !"));

    await new Service({
        user: req.user,
        category: id,
        title,
        desc,
    }).save();

    return res.status(200).send({ msg: 'Service created successfully!' });
});

export const getServices = asyncHandler(async (req, res, next) => {
    return res.status(200).send(await Service.find().populate('user'));
});
