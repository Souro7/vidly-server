const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30
    },
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(1).max(30).required(),
        phone: Joi.string().min(1).max(30).required(),
        isGold: Joi.boolean()
    };

    return Joi.validate(customer, schema);
}

module.exports = {
    Customer,
    validateCustomer
}
