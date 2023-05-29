import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const API_KEY = "9339d4e721726f359761233ddcfb4e20";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-summary">{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
