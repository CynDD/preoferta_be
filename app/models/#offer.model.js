const { Schema, model } = require("mongoose");

const offerSchema = new Schema(
  {
    precio: {
      type: Schema.Types.Number,
      required: [true, "El precio es requerido"],
    },
    estado: {
      type: Schema.Types.String,
    },
    lote: {
      type: Schema.Types.ObjectId,
      ref: "Lote",
      required: true,
    },
    comprador: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    descripcion: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Offer", offerSchema);
