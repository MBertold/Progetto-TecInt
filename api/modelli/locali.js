const mongoose = require("mongoose")

const LocaliSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        tags: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        descrizione:{
            type:String,
            required:true
        },
        ordini : [{prodotti : Array, totale : Number, indirizzoCliente : String}]
    },
    { timestamps: true }
);
module.exports = mongoose.model("Locale", LocaliSchema);