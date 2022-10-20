const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isLogged: { type: Boolean, default: false },
        address : {type: String,required:true},
        cart: [{shop :{type : String}, item : Object }]
    },
    { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);