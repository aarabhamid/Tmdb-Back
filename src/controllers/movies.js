import axios from "axios";
import 'dotenv/config';


const apiKey = process.env.apiKey;

//Routes pour les films, séries et personnes tendances
const getTrendingMovie = async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=fr', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
     res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrendingTv = async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/trending/tv/week?language=fr', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    // Filtre les données mais garde la clé "results"
     res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrendingPerson = async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/person/popular?language=fr', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Routes pour les détails des films et séries
const getMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=fr&append_to_response=credits`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    // Récupérer uniquement le vote_average
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTvShows = async (req, res) => {
  try {
    const tvId = req.params.tvId;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}?language=fr&append_to_response=credits`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    // Tri des saisons par date de diffusion (du plus ancien au plus récent)
    if (response.data.seasons) {
      response.data.seasons.sort((a, b) => new Date(a.air_date) - new Date(b.air_date));
    }
    // Récupérer uniquement le vote_average
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPerson = async (req, res) => {
  try {
    const personId = req.params.personId; 
    const response = await axios.get(`https://api.themoviedb.org/3/person/${personId}?language=fr&append_to_response=credits`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Routes pour les vidéos des films et séries
const getMovieVideos = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=fr`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    // Filtrer les résultats pour ne garder que les "Trailer"
    const trailers = response.data.results.filter(video => video.type === "Trailer");

    res.json(trailers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTvShowsVideos = async (req, res) => {
  try {
    const tvId = req.params.tvId;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/videos?language=fr`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    // Filtrer les résultats pour ne garder que les "Trailer"
    const trailers = response.data.results.filter(video => video.type === "Trailer");

    res.json(trailers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Routes pour les recherches de films, séries et personnes
const searchMovies = async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?language=fr&query=${query}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchTvShows = async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(`https://api.themoviedb.org/3/search/tv?language=fr&query=${query}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchPerson = async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(`https://api.themoviedb.org/3/search/person?language=fr&query=${query}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Routes pour les films a venir 
const getUpcomingMovies = async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=fr', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOnTheAirTvShows = async (req, res) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?language=fr', {  
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getMovie, getMovieVideos, getTrendingPerson, getTrendingMovie, getTvShows, getTrendingTv, getTvShowsVideos, getPerson, searchMovies, searchTvShows, searchPerson, getUpcomingMovies, getOnTheAirTvShows };