const app = require('express')();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;
// Gets the Username and Password
const MONGO_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;

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
    res.send('Fully setup of MongoDB , React and Express server... ');
});

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`),
);
