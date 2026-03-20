const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
    console.log("❌ MONGO_CONN is missing");
} else {
    mongoose.connect(mongo_url)
        .then(() => {
            console.log('MongoDB Connected...');
        })
        .catch((err) => {
            console.log('MongoDB Connection Error: ', err);
        });
}