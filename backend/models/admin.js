const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    username: { type: String, unique: true, required: true, length: 10 },
    password: { type: String, required: true },
    accessToken: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
});

module.exports = model('user', adminSchema);