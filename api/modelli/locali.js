const mongoose = require("mongoose")


const addressInfo = {
    street: String,
    aptName: String,
    locality: String,
    zip: String,
    lat: Number,
    lng: Number,
    phoneNo: Number,
};

const LocaliSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        tags: {
            type: String,
            required: true,
        },
        formattedAddress: {
            type: String,
            required: true,
        },
        imageUrl: [
            {
                type: String,
                required: true,
            },
        ],
        address: addressInfo,
        account: { type: Schema.Types.ObjectId, required: true, ref: "User" },
        items: [{ type: Schema.Types.ObjectId, ref: "Prodotti" }],
    },
    { timestamps: true }
);
module.exports = mongoose.model("Locale", LocaliSchema);