const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isLogged: { type: Boolean, default: false },
        cart: [{productId : String, productName : String, productPrice : Number, productOwner : String}]
    },
    { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);