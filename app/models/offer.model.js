const { Schema, model } = require("mongoose");

const offerSchema = new Schema({
  consig: { type: String, required: true },
  nro_animal: { type: Number, required: true },
  precio: { type: String, required: true },
  productor: { type: String, required: true },
  fecha: { type: Date, default: Date.now },

  timestamps: true,
});

module.exports = model("Offer", offerSchema);
