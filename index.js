// Imports 
import 'dotenv/config'
import express from 'express'
import { router } from "./src/router.js"
import cors from 'cors';



const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Configuration de session
//app.use(sessionParams);

app.use(cors({
    origin: (origin, callback) => {
        // Autoriser toutes les origines localhost ou 127.0.0.1, peu importe le port
        if (!origin || /^(http:\/\/localhost:\d+|http:\/\/127\.0\.0\.1:\d+)$/.test(origin)) {
            callback(null, true); // Autoriser l'origine
        } else {
            callback(new Error("Not allowed by CORS")); // Bloquer l'origine
        }
    },
}));


// ROUTERS
app.use(router);

// MIDDLEWARES
//app.use(notFound);
//app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log(`Port écoute sur ${process.env.BASE_URL}:${process.env.PORT}`)
})