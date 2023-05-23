import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/indexRouter";
import db from "./config/mongodb"

const PUERTO = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("Base de datos conectada"));

app.listen(PUERTO, () => console.log(`Listo por el puerto ${PUERTO}`));