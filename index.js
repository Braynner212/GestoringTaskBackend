require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Create server express
const app = express();

//Configuración CORS
app.use(cors());

//Lectura y parseo del body.
app.use(express.json());

//Rutas
app.use("/api/task", require("./routes/task.route"));

app.listen(process.env.PORT, () => {
    console.log("Servidor API REST corriendo en el puerto " + process.env.PORT);
});