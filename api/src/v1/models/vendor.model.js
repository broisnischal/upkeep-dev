import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    business_name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: String,
    business_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
