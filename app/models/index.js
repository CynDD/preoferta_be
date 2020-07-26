const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.offer = require("./offer.model");
db.lote = require("./lote.model");
db.subasta = require("./subasta.model");

db.ROLES = ["user", "admin", "moderator"];
db.ESTADO_OFERTA = ["pendiente_aprobacion", "rechazado", "aprobado"];

module.exports = db;
