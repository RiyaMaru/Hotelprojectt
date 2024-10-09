const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    date:Date,
    sale:Number,
    expense:Number
//     type: { type: String, enum: ['sale', 'expense'], required: true },
// }, { timestamps: true 
});

module.exports = mongoose.model('hotel', HotelSchema);