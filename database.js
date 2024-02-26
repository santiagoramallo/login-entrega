const mongoose = require("mongoose");

mongoose.connect("tubd")
    .then(() => console.log("Conexion exitosa"))
    .catch(() => console.log("Tenemos un error"))