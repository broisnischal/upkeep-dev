import asyncHandler from 'express-async-handler';
import { createError } from '../config/createError.js';
import Order from '../models/order.model.js';
import Service from '../models/service.model.js';

export const orderService = asyncHandler(async (req, res, next) => {
    try {
        const { ids } = req.body;

        const orderAlreadyPlaced = await Order.findOne({ userId: req.user });

        if (!ids) return next(createError('Invalid Request!', 400));

        const services = await Service.find({ _id: { $in: ids } }).select(
            'price _id',
        );

        if (!services || Array.isArray(services)?.length <= 0)
            return next(createError('Invalid Request', 403));

        let serviceId = [];
        services.map((i) => serviceId.push(i?._id));

        const total = services.reduce((acc, curr) => acc + curr?.price, 0);

        if (orderAlreadyPlaced) {
            // const { total: prevTotal, _id: ids } = await Order.find({
            //     userId: req.user,
            // }).select('total _id');
            // console.log(total);

            // const updatedOrder = await Order.findOneAndUpdate(
            //     { userId: req.user },
            //     {
            //         total: prevTotal + total,
            //         sid: { $addToSet: ids },
            //     },
            //     {
            //         new: true,
            //         runValidators: true,
            //     },
            // );
            // return res.status(200).send({
            //     msg: 'More item added to order successfully placed!',
            //     updatedOrder,
            // });

            return next(
                createError('Please wait until your last order placed !', 400),
            );
        } else {
            const newOrder = new Order({
                userId: req.user,
                services: serviceId,
                total,
            });
            await newOrder.save();
        }
        return res
            .status(200)
            .send({ msg: 'Order successfully placed!', newOrder });
    } catch (error) {
        next(error);
    }
});
