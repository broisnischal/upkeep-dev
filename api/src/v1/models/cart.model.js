import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
    {
        user: {
            userId: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        cartItems: [
            {
                service: mongoose.Schema.Types.ObjectId,
                ref: 'Service',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    },
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
