const mongoose = require('mongoose');

module.exports = (url = process.env.DB_CONNECTION) => {
    mongoose.connection.on('connected', () => {
        const parsedUrl = new URL(url);
        const redactedUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}:${parsedUrl.port}${parsedUrl.pathname}`;
        console.log(`Connected to MongoDB at ${redactedUrl}`);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });

    mongoose.connection.on('error', () => {
        console.log('Error connecting to MongoDB');
    });

    return mongoose.connect(url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
};