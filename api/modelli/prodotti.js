const mongoose = require("mongoose")


const prodottiSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descrizione: {
      type: String,
      required: true,
    },
    /*
    imageUrl: {
      type: String,
      required: false,
    },
    */
    prezzo: {
      type: Number,
      required: true,
    },
    proprietario:{
      type:String,
      required:true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prodotti", prodottiSchema);