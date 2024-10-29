// app.js
import express from 'express';
import { create } from 'express-handlebars';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import './database/connection.js';
import homeRoutes from './routes/home.js';
import authRoutes from './routes/auth.js';

// Configuración para __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de variables de entorno
dotenv.config();

const app = express();

// Configuración de Handlebars
const hbs = create({
  extname: ".hbs",
  partialsDir: ["views/components"],
});

// Configuración del motor de plantillas
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/", homeRoutes);
app.use("/auth", authRoutes);

// Puerto
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => console.log("localhost:" + PORT));

// Opcional: Exportar app para testing
export default app;