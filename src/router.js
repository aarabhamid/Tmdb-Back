import { Router } from "express";
import * as movieController from "./controllers/movies.js";

const router = Router();

router.get('/movies/:movieId', movieController.getMovie);
router.get('/movies/:movieId/videos', movieController.getMovieVideos);
router.get('/movies', movieController.getallMovie);

export { router };