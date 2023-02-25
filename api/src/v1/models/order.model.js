import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        orderItems: [
            {
                serviceId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Service',
                },
                checked: {
                    type: Boolean,
                    default: true,
                },
            },
        ],
        total: {
            type: Number,
            required: true,
            min: [200, 'Too few Price!'],
        },
        status: {
            type: String,
            enum: {
                values: ['PENDING', 'RESOLVED'],
                message: 'Value error, Invalid Request !',
            },
            default: 'PENDING',
        },
    },
    {
        timestamps: true,
    },
);

const Order = mongoose.model('Order', OrderSchema);

export default Order;
