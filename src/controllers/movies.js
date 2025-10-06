import axios from "axios";

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmFmODczYTc1MWIzN2RhODg2ZDhhODFlZTdiMTgyZSIsIm5iZiI6MTc0OTkyMTMxNi40ODQsInN1YiI6IjY4NGRhZTI0ZmM2MzAwZDdiMzNmZTM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ASWzVdZt1d6wQo4Gay1MPFuTlhfnAmVe8d1dXWBfwKU';

const getMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
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

const getMovieVideos = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getallMovie = async (req, res) => {
  try {
    
    const response = await axios.get('https://api.themoviedb.org/3/trending/tv/day?language=fr-FR', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
  
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getMovie, getMovieVideos, getallMovie };