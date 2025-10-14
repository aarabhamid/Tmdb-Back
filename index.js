import 'dotenv/config';
import express from 'express';
import { router } from "./src/router.js";
import cors from 'cors';

const app = express();

// Middleware pour parser les requêtes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuration CORS
const allowedOrigins = [
  'http://localhost:5173', // Pour le développement local
  'https://tmdb-front-qu727sujy-aarabhamids-projects.vercel.app', // URL exacte de ton frontend
];

app.use(
  cors({
    origin: allowedOrigins, // Autorise uniquement ces origines
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);


// Routes
app.use(router);

// Démarrage du serveur
app.listen(process.env.PORT, () => {
  console.log(`Serveur en écoute sur ${process.env.BASE_URL}:${process.env.PORT}`);
});
