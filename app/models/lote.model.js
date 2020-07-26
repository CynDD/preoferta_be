const { Schema, model } = require("mongoose");

const loteSchema = new Schema(
  {
    numero: {
      type: Schema.Types.Number,
      required: true,
    },
    nombre: {
      type: Schema.Types.String,
    },
    descripcion: {
      type: Schema.Types.String,
      required: [true, "El mensaje es requerido"],
      maxlength: [280, "El máximo de caracteres permitidos es de 280"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Lote", loteSchema);
