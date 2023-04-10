import multer from 'multer';

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// Initialize multer upload middleware
const upload = multer({
    storage: storage,
    limits: { fileSize: 4000000 }, // limit file size to 1MB
}).single('image');

// Middleware for uploading an image and passing the req.file object to the next middleware
export const uploadImage = function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return res.status(400).send('Error uploading file ' + err.message);
        }

        // Pass the req.file object to the next middleware
        req.imagePath = req.file.path;
        next();
    });
};
