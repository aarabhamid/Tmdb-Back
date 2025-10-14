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
  'http://localhost:5173', // Pour le développement local (Vite)
  'https://tmdb-front-aarabhamids-projects.vercel.app/', // Remplace par l'URL de ton frontend déployé
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Autoriser les origines listées ou les requêtes sans origine (comme les requêtes POST depuis un formulaire)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes autorisées
    credentials: true, // Si tu utilises des cookies/authentification
  })
);

// Routes
app.use(router);

// Démarrage du serveur
app.listen(process.env.PORT, () => {
  console.log(`Serveur en écoute sur ${process.env.BASE_URL}:${process.env.PORT}`);
});
