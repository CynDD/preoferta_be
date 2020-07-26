const db = require("../models");
const User = db.user;
const Role = db.role;
const Offer = db.offer;

var jwt = require("jsonwebtoken");

exports.ingresarOferta = (req, res) => {
  const offer = new Offer({
    consig: req.body.consig,
    nro_animal: req.body.nro_animal,
    precio: req.body.precio,
    productor: req.body.productor,
    fecha: Date.now(),
  });

  try {
    const newOffer = await offer.save((err) => {
      console.log("Consig:" + req.body.consig);
      console.log(oferta);
      if (err) {
        console.log(err);
        return res.status(500).send("ERROR AL GUARDAR LA OFERTA");
      } else {
        res.status(200).send("OFERTA GUARDADA!");
        res.json(newOffer);
        console.log(newOffer);
      }
    });
  } catch (err) {
    return res.status(500).json({ err });
  } /*finally {
    mongoose.connection.close();
  } */
};
