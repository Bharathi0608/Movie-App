import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";

const API_KEY = "0ee7da2cc963fc1359db8d7b081431db";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();
  const { user, addToFavorites, removeFromFavorites, isFavorite } =
    useMovieContext();

  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState(null);

  const [showTrailer, setShowTrailer] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const favorite = movie ? isFavorite(movie.id) : false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Movie
        const res = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
        );
        const data = await res.json();
        setMovie(data);

        // Trailer
        const videoRes = await fetch(
          `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
        );
        const videoData = await videoRes.json();

        if (videoData.results) {
          const trailer = videoData.results.find(
            (vid) =>
              vid.type === "Trailer" &&
              vid.site === "YouTube"
          );
          if (trailer) setTrailerKey(trailer.key);
        }

        // Cast
        const castRes = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
        );
        const castData = await castRes.json();

        if (castData.cast) {
          setCast(
            castData.cast
              .filter((actor) => actor.profile_path)
              .slice(0, 10)
          );
        }

        // Similar Movies
        const similarRes = await fetch(
          `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`
        );
        const similarData = await similarRes.json();

        setSimilarMovies(
          (similarData.results || [])
            .filter((m) => m.poster_path)
            .slice(0, 6)
        );

        // Providers
        const providerRes = await fetch(
          `${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`
        );
        const providerData = await providerRes.json();

        if (providerData.results) {
          setProviders(
            providerData.results.IN ||
              providerData.results.US ||
              Object.values(providerData.results)[0] ||
              null
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie)
    return <div className="text-white p-5">Loading...</div>;

  return (
    <div className="text-white">

      {/* HERO */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="img-fluid rounded"
                alt={movie.title}
              />
            )}
          </div>

          <div className="col-md-8">
            <h2>{movie.title}</h2>

            <div className="mb-3">
              <span className="badge bg-warning text-dark">
                ⭐ {movie.vote_average?.toFixed(1)} / 10
              </span>
              <span className="ms-2 text-muted">
                ({movie.vote_count} votes)
              </span>
            </div>

            <p>{movie.overview}</p>

            <button
              className={`btn ${
                favorite ? "btn-danger" : "btn-outline-light"
              } me-3`}
              onClick={() =>
                favorite
                  ? removeFromFavorites(movie.id)
                  : addToFavorites(movie)
              }
            >
              {favorite
                ? "❤️ Remove from Favorites"
                : "🤍 Add to Favorites"}
            </button>

            {trailerKey && (
              <button
                className="btn btn-danger"
                onClick={() => {
                  if (!user) {
                    setShowLoginModal(true);
                    return;
                  }
                  setShowTrailer(true);
                }}
              >
                ▶ Watch Trailer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* WHERE TO WATCH */}
      <div className="container mt-5">
        <h3>📺 Where to Watch</h3>

        {providers &&
        (providers.flatrate ||
          providers.rent ||
          providers.buy) ? (
          <div className="d-flex flex-wrap gap-3 mt-3">
            {[...(providers.flatrate || []),
              ...(providers.rent || []),
              ...(providers.buy || [])].map((provider) => (
              <div
                key={provider.provider_id}
                style={{ cursor: "pointer" }}
                onClick={() => window.open(providers.link, "_blank")}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                  width="80"
                  alt={provider.provider_name}
                />
                <p className="text-center">
                  {provider.provider_name}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted mt-3">
            Not available for streaming in your region.
          </p>
        )}
      </div>

      {/* TOP CAST */}
      {cast.length > 0 && (
        <div className="container mt-5">
          <h3>Top Cast</h3>
          <div className="cast-scroll">
            {cast.map((actor) => (
              <Link
                key={actor.id}
                to={`/actor/${actor.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="cast-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* SIMILAR MOVIES */}
      {similarMovies.length > 0 && (
        <div className="container mt-5 mb-5">
          <h3>Similar Movies</h3>
          <div className="similar-scroll">
            {similarMovies.map((sim) => (
              <Link key={sim.id} to={`/movie/${sim.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${sim.poster_path}`}
                  alt={sim.title}
                  className="me-3 rounded"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* LOGIN REQUIRED MODAL */}
      {showLoginModal && !user && (
        <div
          className="trailer-overlay"
          onClick={() => setShowLoginModal(false)}
        >
          <div
            className="trailer-modal text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h4>🔐 Login Required</h4>
            <p>You must login to watch the trailer.</p>
            <button
              className="btn btn-danger mt-3"
              onClick={() => setShowLoginModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* TRAILER MODAL */}
      {showTrailer && user && (
        <div
          className="trailer-overlay"
          onClick={() => setShowTrailer(false)}
        >
          <div
            className="trailer-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-danger mb-3"
              onClick={() => setShowTrailer(false)}
            >
              Close
            </button>

            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              title="Trailer"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;