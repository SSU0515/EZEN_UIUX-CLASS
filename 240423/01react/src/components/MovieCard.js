import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const detail = () => {
    navigate(`/movies/${movie.id}`);
  };
  return (
    <div
      onClick={detail}
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `	https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie.backdrop_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        <div>
          {movie.genre_ids.map((id) => (
            <Badge className="badge" bg="warning" text="dark">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{movie.vote_average}</span>
          <span> {movie.adult ? "청불" : "전체"} </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
