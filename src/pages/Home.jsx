

// // import { Link } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { searchMovies, getPopularMovies } from "../services/api";
// // import { useMovieContext } from "../contexts/MovieContext";
// // import "../css/Home.css";

// // function Home() {
// //   const { selectedLanguage } = useMovieContext();

// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [movies, setMovies] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [page, setPage] = useState(1);
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   // Reset page on language change
// //   useEffect(() => {
// //     setPage(1);
// //   }, [selectedLanguage]);

// //   // Fetch Movies
// //   useEffect(() => {
// //     const loadPopularMovies = async () => {
// //       setLoading(true);
// //       try {
// //         const popularMovies = await getPopularMovies(page, selectedLanguage);

// //         const filtered = popularMovies.filter(
// //           (movie) => movie.poster_path && movie.backdrop_path
// //         );

// //         setMovies(filtered);
// //         setError(null);
// //       } catch (err) {
// //         console.log(err);
// //         setError("Failed to load popular movies...");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadPopularMovies();
// //   }, [page, selectedLanguage]);

// //   // Auto Hero Slide
// //   useEffect(() => {
// //     if (movies.length === 0) return;

// //     const interval = setInterval(() => {
// //       setCurrentSlide((prev) =>
// //         prev === movies.length - 1 ? 0 : prev + 1
// //       );
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [movies]);

// //   // Search
// //   const handleSearch = async (e) => {
// //     e.preventDefault();
// //     if (!searchQuery.trim()) return;

// //     setLoading(true);
// //     try {
// //       const searchResults = await searchMovies(
// //         searchQuery,
// //         page,
// //         selectedLanguage
// //       );

// //       setMovies(
// //         searchResults.filter(
// //           (movie) => movie.poster_path && movie.backdrop_path
// //         )
// //       );

// //       setError(null);
// //     } catch (err) {
// //       console.log(err);
// //       setError("Failed to search movies...");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="home-wrapper">

// //       {/* HERO SLIDER */}
// //       {!loading && movies.length > 0 && (
// //         <div
// //           key={currentSlide}
// //           className="hero-section hero-fade"
// //           style={{
// //             backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[currentSlide].backdrop_path})`,
// //           }}
// //         >
// //           <div className="hero-overlay">
// //             <div className="container text-white">
// //               <h1 className="hero-title">
// //                 {movies[currentSlide].title}
// //               </h1>

// //               <p className="hero-overview">
// //                 {movies[currentSlide].overview?.slice(0, 200)}...
// //               </p>

// //               <Link
// //                 to={`/movie/${movies[currentSlide].id}`}
// //                 className="btn btn-danger me-3"
// //               >
// //                 ▶ Play
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Slider Dots */}
// //           <div className="hero-dots">
// //             {movies.slice(0, 5).map((_, index) => (
// //               <span
// //                 key={index}
// //                 className={`dot ${
// //                   index === currentSlide ? "active-dot" : ""
// //                 }`}
// //                 onClick={() => setCurrentSlide(index)}
// //               ></span>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* SEARCH */}
// //       <div className="container mt-4">
// //         <form
// //           onSubmit={handleSearch}
// //           className="row justify-content-center mb-4"
// //         >
// //           <div className="col-md-6 d-flex">
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Search for a movie..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //             <button type="submit" className="btn btn-danger ms-2">
// //               Search
// //             </button>
// //           </div>
// //         </form>

// //         {error && <div className="text-center text-danger">{error}</div>}
// //       </div>

// //       {/* LOADING */}
// //       {loading && (
// //         <div className="text-center text-white mt-5">
// //           Loading...
// //         </div>
// //       )}

// //       {/* MOVIE GRID */}
// //       {!loading && (
// //         <div className="container">
// //           <div className="row">
// //             {movies.map((movie) => (
// //               <div
// //                 key={movie.id}
// //                 className="col-sm-6 col-md-4 col-lg-3 mb-4"
// //               >
// //                 <Link
// //                   to={`/movie/${movie.id}`}
// //                   style={{ textDecoration: "none" }}
// //                 >
// //                   <div className="movie-card movie-grid-animate">
// //                     <img
// //                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
// //                       alt={movie.title}
// //                     />

// //                     <div className="movie-hover-content">
// //                       <h6>{movie.title}</h6>

// //                       <p className="small text-muted">
// //                         ⭐ {movie.vote_average?.toFixed(1)} |{" "}
// //                         {movie.release_date?.slice(0, 4)}
// //                       </p>

// //                       <p className="overview-preview">
// //                         {movie.overview?.slice(0, 80)}...
// //                       </p>

// //                       <span className="btn btn-sm btn-danger mt-2">
// //                         ▶ Play
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>

// //           {/* PAGINATION */}
// //           <div className="d-flex justify-content-center mt-4 mb-5">
// //             <button
// //               className="btn btn-outline-light me-3"
// //               disabled={page === 1}
// //               onClick={() => setPage((prev) => prev - 1)}
// //             >
// //               ⬅ Previous
// //             </button>

// //             <span className="text-white align-self-center">
// //               Page {page}
// //             </span>

// //             <button
// //               className="btn btn-outline-light ms-3"
// //               onClick={() => setPage((prev) => prev + 1)}
// //             >
// //               Next ➡
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Home;

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { searchMovies, getPopularMovies } from "../services/api";
// import { useMovieContext } from "../contexts/MovieContext";
// import "../css/Home.css";

// const API_KEY = "0ee7da2cc963fc1359db8d7b081431db";

// function Home() {
//   const { selectedLanguage } = useMovieContext();

//   const [searchQuery, setSearchQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [hoverId, setHoverId] = useState(null);

//   // Reset page on language change
//   useEffect(() => {
//     setPage(1);
//   }, [selectedLanguage]);

//   // Fetch Movies + Trailer Key
//   useEffect(() => {
//     const loadPopularMovies = async () => {
//       setLoading(true);
//       try {
//         const popularMovies = await getPopularMovies(page, selectedLanguage);

//         const filtered = popularMovies.filter(
//           (movie) => movie.poster_path && movie.backdrop_path
//         );

//         // Fetch trailer for each movie
//         const moviesWithTrailer = await Promise.all(
//           filtered.map(async (movie) => {
//             try {
//               const res = await fetch(
//                 `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
//               );
//               const data = await res.json();

//               const trailer = data.results?.find(
//                 (vid) =>
//                   vid.type === "Trailer" &&
//                   vid.site === "YouTube"
//               );

//               return {
//                 ...movie,
//                 trailerKey: trailer ? trailer.key : null,
//               };
//             } catch {
//               return { ...movie, trailerKey: null };
//             }
//           })
//         );

//         setMovies(moviesWithTrailer);
//         setError(null);
//       } catch (err) {
//         console.log(err);
//         setError("Failed to load popular movies...");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPopularMovies();
//   }, [page, selectedLanguage]);

//   // Auto Hero Slide
//   useEffect(() => {
//     if (movies.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) =>
//         prev === movies.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [movies]);

//   // Search
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!searchQuery.trim()) return;

//     setLoading(true);
//     try {
//       const searchResults = await searchMovies(
//         searchQuery,
//         page,
//         selectedLanguage
//       );

//       setMovies(
//         searchResults.filter(
//           (movie) => movie.poster_path && movie.backdrop_path
//         )
//       );

//       setError(null);
//     } catch (err) {
//       console.log(err);
//       setError("Failed to search movies...");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="home-wrapper">

//       {/* HERO SLIDER */}
//       {!loading && movies.length > 0 && (
//         <div
//           key={currentSlide}
//           className="hero-section hero-fade"
//           style={{
//             backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[currentSlide].backdrop_path})`,
//           }}
//         >
//           <div className="hero-overlay">
//             <div className="container text-white">
//               <h1 className="hero-title">
//                 {movies[currentSlide].title}
//               </h1>

//               <p className="hero-overview">
//                 {movies[currentSlide].overview?.slice(0, 200)}...
//               </p>

//               <Link
//                 to={`/movie/${movies[currentSlide].id}`}
//                 className="btn btn-danger me-3"
//               >
//                 ▶ Play
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* SEARCH */}
//       <div className="container mt-4">
//         <form
//           onSubmit={handleSearch}
//           className="row justify-content-center mb-4"
//         >
//           <div className="col-md-6 d-flex">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for a movie..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit" className="btn btn-danger ms-2">
//               Search
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* MOVIE GRID */}
//       {!loading && (
//         <div className="container">
//           <div className="row">
//             {movies.map((movie) => (
//               <div
//                 key={movie.id}
//                 className="col-sm-6 col-md-4 col-lg-3 mb-4"
//               >
//                 <div
//                   className="movie-card movie-grid-animate"
//                   onMouseEnter={() => setHoverId(movie.id)}
//                   onMouseLeave={() => setHoverId(null)}
//                 >
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                     alt={movie.title}
//                   />

//                   {/* Hover Video Preview */}
//                   {hoverId === movie.id && movie.trailerKey && (
//                     <div className="hover-preview">
//                       <iframe
//                         src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&mute=1&controls=0`}
//                         title="Preview"
//                         allow="autoplay"
//                       />
//                     </div>
//                   )}

//                   <Link
//                     to={`/movie/${movie.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     <div className="movie-hover-content">
//                       <h6>{movie.title}</h6>
//                       <p className="small text-muted">
//                         ⭐ {movie.vote_average?.toFixed(1)} |{" "}
//                         {movie.release_date?.slice(0, 4)}
//                       </p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Home.css";

const API_KEY = "0ee7da2cc963fc1359db8d7b081431db";

function Home() {
  const { selectedLanguage } = useMovieContext();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoverId, setHoverId] = useState(null);

  // Reset page when language changes
  useEffect(() => {
    setPage(1);
  }, [selectedLanguage]);

  // Fetch Movies + Trailer Key
  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies(page, selectedLanguage);

        const filtered = popularMovies.filter(
          (movie) => movie.poster_path && movie.backdrop_path
        );

        const moviesWithTrailer = await Promise.all(
          filtered.map(async (movie) => {
            try {
              const res = await fetch(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
              );
              const data = await res.json();

              const trailer = data.results?.find(
                (vid) =>
                  vid.type === "Trailer" &&
                  vid.site === "YouTube"
              );

              return {
                ...movie,
                trailerKey: trailer ? trailer.key : null,
              };
            } catch {
              return { ...movie, trailerKey: null };
            }
          })
        );

        setMovies(moviesWithTrailer);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, [page, selectedLanguage]);

  // Auto Hero Slide
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === movies.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  // Search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(
        searchQuery,
        page,
        selectedLanguage
      );

      setMovies(
        searchResults.filter(
          (movie) => movie.poster_path && movie.backdrop_path
        )
      );

      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-wrapper">

      {/* HERO SLIDER */}
      {!loading && movies.length > 0 && (
        <div
          className="hero-section"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[currentSlide].backdrop_path})`,
          }}
        >
          <div className="hero-overlay">
            <div className="container text-white">
              <h1 className="hero-title">
                {movies[currentSlide].title}
              </h1>

              <p className="hero-overview">
                {movies[currentSlide].overview?.slice(0, 200)}...
              </p>

              <Link
                to={`/movie/${movies[currentSlide].id}`}
                className="btn btn-danger me-3"
              >
                ▶ Play
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH */}
      <div className="container mt-4">
        <form
          onSubmit={handleSearch}
          className="row justify-content-center mb-4"
        >
          <div className="col-md-6 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-danger ms-2">
              Search
            </button>
          </div>
        </form>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center text-white mt-5">
          Loading...
        </div>
      )}

      {/* MOVIE GRID */}
      {!loading && (
        <div className="container">
          <div className="row">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div
                  className="movie-card movie-grid-animate"
                  onMouseEnter={() => setHoverId(movie.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />

                  {/* Hover Trailer */}
                  {hoverId === movie.id && movie.trailerKey && (
                    <div className="hover-preview">
                      <iframe
                        src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&mute=1&controls=0`}
                        title="Preview"
                        allow="autoplay"
                      />
                    </div>
                  )}

                  <div className="movie-hover-content">
                    <h6>{movie.title}</h6>
                    <p className="small text-muted">
                      ⭐ {movie.vote_average?.toFixed(1)} |{" "}
                      {movie.release_date?.slice(0, 4)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="d-flex justify-content-center mt-4 mb-5">
            <button
              className="btn btn-outline-light me-3"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              ⬅ Previous
            </button>

            <span className="text-white align-self-center">
              Page {page}
            </span>

            <button
              className="btn btn-outline-light ms-3"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next ➡
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;