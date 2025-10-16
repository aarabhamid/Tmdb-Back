import { Router } from "express";
import * as movieController from "./controllers/movies.js";

const router = Router();

//Routes pour les films, séries et personnes tendances
router.get('/movies', movieController.getTrendingMovie);
router.get('/tv', movieController.getTrendingTv);
router.get('/person', movieController.getTrendingPerson);

//Routes pour les détails des films et séries
router.get('/movies/:movieId', movieController.getMovie);
router.get('/tv/:tvId', movieController.getTvShows);
router.get('/person/:personId', movieController.getPerson);

//Routes pour les vidéos des films et séries
router.get('/movies/:movieId/videos', movieController.getMovieVideos);
router.get('/tv/:tvId/videos', movieController.getTvShowsVideos);

//Routes pour les recherches de films, séries et personnes
router.get('/search/movies', movieController.searchMovies);
router.get('/search/tv', movieController.searchTvShows);
router.get('/search/person', movieController.searchPerson);

//Routes pour les films et séries à venir
router.get('/upcoming/movies', movieController.getUpcomingMovies);
router.get('/on-the-air/tv', movieController.getOnTheAirTvShows);

export { router };