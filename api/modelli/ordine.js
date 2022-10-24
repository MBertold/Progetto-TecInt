const mongoose = require("mongoose")

const ordineSchema = new mongoose.Schema(
{
    nomeUtente : { type: String , required : true},
    ncard : {type:String,required : true},
    idLocale : {type:String},
    items : {type : Object},
    giorno : String,
    mese : String,
    anno : String
}
);
module.exports = mongoose.model("Ordine", ordineSchema);
