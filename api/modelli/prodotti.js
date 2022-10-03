const mongoose = require("mongoose")

const prodottiSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Locale",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prodotti", prodottiSchema);