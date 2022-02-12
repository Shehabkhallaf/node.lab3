const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        minlenght: 8
    },
    firstName: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 15,
    },
    lastName: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 15,
    },
    dob: {
        type: Date
    }
},
    { timeStamps: true }
);



const UserModel = mongoose.model('User', userModel);
module.exports = UserModel;

