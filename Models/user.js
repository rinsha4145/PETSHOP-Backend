const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        trim: true, 
        unique: true, 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        lowercase: true, 
        match: /.+\@.+\..+/ 
    },
    password: { 
        type: String, 
        required: true, 
    },
    cpassword: { 
        type: String, 
        required: true, 
    },
    phone: { 
        type: Number, 
        required: true, 
    },
    gender: { 
        type: String, 
        required: true, 
    },
    address: { 
        type: String, 
        required: true, 
    },
    admin: { 
        type: Boolean, 
        default: false 
    },

    blocked: { 
        type: Boolean, 
        default: false 
    },
});


module.exports   = mongoose.model('User', userSchema);