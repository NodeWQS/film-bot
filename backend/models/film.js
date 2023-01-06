const { Schema, model } = require('mongoose');

const filmSchema = new Schema({
    number: { type: Number, unique: true },
    title: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    photoLink: { type: String, requred: true },
    date: { type: Date, default: Date.now }
});

module.exports = model('film', filmSchema);
