const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        required: true,
        default: 'ENTREPRENEUR',
    },
    country: {
        type: String,
        required: true,
    }
});


module.exports = model("UserSearchBarList", userSchema);