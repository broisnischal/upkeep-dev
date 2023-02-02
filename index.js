const app = require('express')();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDB = async () => {
    await mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Mongo connected successfully')) // Logs out successful when MongoDB connects.
        .catch((e) => {
            console.log(e.message); // Logs out the error message if it encounters any.
        });
};

// Calling the Connect Function
connectDB();

app.get('/', (req, res) => {
    res.send('BLAFOISFSAOIFALGKLSngOIA... ');
});

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`),
);
