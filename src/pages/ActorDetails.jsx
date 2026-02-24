import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "0ee7da2cc963fc1359db8d7b081431db";
const BASE_URL = "https://api.themoviedb.org/3";

function ActorDetails() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        // 🎭 Actor Details
        const res = await fetch(
          `${BASE_URL}/person/${id}?api_key=${API_KEY}`
        );
        const data = await res.json();
        setActor(data);

        // 🎬 Actor Movies
        const movieRes = await fetch(
          `${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`
        );
        const movieData = await movieRes.json();

        setMovies(
          movieData.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10)
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchActor();
  }, [id]);

  if (!actor) return <div className="text-white">Loading...</div>;

  return (
    <div className="container mt-5 text-white">

      {/* 🔥 TOP SECTION LIKE GOOGLE */}
      <div className="row align-items-start">

        {/* LEFT SIDE INFO */}
        <div className="col-md-8">
          <h1 className="mb-3">{actor.name}</h1>

          <p><strong>Known For:</strong> {actor.known_for_department}</p>
          <p><strong>Birthday:</strong> {actor.birthday || "N/A"}</p>
          <p><strong>Place of Birth:</strong> {actor.place_of_birth || "N/A"}</p>
          <p><strong>Popularity:</strong> ⭐ {actor.popularity}</p>

          <hr className="bg-light" />

          <h4>Biography</h4>
          <p style={{ lineHeight: "1.8" }}>
            {actor.biography
              ? actor.biography
              : "No biography available."}
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-md-4 text-center">
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            className="img-fluid rounded shadow-lg"
            alt={actor.name}
          />
        </div>

      </div>

      {/* 🎬 MOVIES SECTION */}
      {movies.length > 0 && (
        <div className="mt-5">
          <h3 className="mb-4">Movies & Shows</h3>

          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-sm-6 col-md-4 col-lg-2 mb-4">
                <Link
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="card bg-dark text-white h-100 movie-card">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : "https://via.placeholder.com/300x450?text=No+Image"
                      }
                      className="card-img-top"
                      alt={movie.title}
                    />
                    <div className="card-body text-center">
                      <small>{movie.title}</small>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default ActorDetails;
