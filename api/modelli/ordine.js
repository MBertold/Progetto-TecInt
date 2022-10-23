const mongoose = require("mongoose")

const ordineSchema = new mongoose.Schema(
{
    nomeUtente : { type: String , required : true},
    ncard : {type:String,required : true},
    items : {type : Object}
}
);
module.exports = mongoose.model("Ordine", ordineSchema);
