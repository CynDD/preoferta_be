const { Schema, model } = require("mongoose");

const subastaSchema = new Schema({
  fecha: {
    type: Schema.Types.Date,
    required: [true, "El dia y hora es requerido"],
  },
  listaLote: [{ type: ObjectId, ref: "Lote" }],
});

module.exports = model("Offer", offerSchema);
