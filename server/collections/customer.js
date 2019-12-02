const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type:String, 
        require: true
    },
    email: {
        type:String,
        require: true, 
        unique: true,
        validate: {
            validator: function(email){
                const validatedEmail = email.includes('@');
                return validatedEmail;
            }
        }
    },
    date_joined: {
        type:Date, 
        default: Date().toLocaleString()
    }
});

module.exports = mongoose.model('customer', customerSchema);