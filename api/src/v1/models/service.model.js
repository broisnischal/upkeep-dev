import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Vendor Required'],
        ref: 'Vendor',
    },
    title: {
        type: String,
    },
    desc: String,
    image: [String],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    views: Number,
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
