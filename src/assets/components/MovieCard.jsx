// import '../../css/MovieCard.css';
// import {useContext } from 'react';

// // // function MovieCard({movie}){

// // //     function onFavoriteClick(){
// // //         alert("clicked")
// // //     }

// // // return <div className="movie-card">
// // //     <div className="movie-poster">
// // //         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
// // //         <div className="movie-overlay">
// // //             <button className="favorite-btn" onClick={onFavoriteClick}>
// // //                 ❤️
// // //                 </button>
// // //         </div>
// // //     </div>
// // //     <div className="movie-info">
// // //         <h3>{movie.title}</h3>
// // //         <p>{movie.release_date?.split("-")[0]}</p>
// // //     </div>
// // // </div>
// // // }
// // // export default MovieCard
// // function MovieCard({ movie }) {
// //   return (
// //     <div className="card bg-dark text-white h-100">
// //       <img
// //          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
// //         className="card-img-top"
// //         alt={movie.title}
// //       />
// //       <div className="card-body">
// //         <h5 className="card-title">{movie.title}</h5>
// //         <p className="card-text">{movie.release_date}</p>
// //       </div>
// //       <div className="card-footer text-center">
// //         <button className="btn btn-light">
// //           ❤️
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// // export default MovieCard;
// function MovieCard({ movie }) {
//   return (
//     <div className="card bg-dark text-white h-100">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         className="card-img-top"
//         alt={movie.title}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{movie.title}</h5>
//         <p className="card-text">{movie.release_date}</p>
//       </div>
//       <div className="card-footer text-center">
//         <button className="btn btn-light">❤️</button>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

// import { useMovieContext } from "../../contexts/MovieContext.jsx";

// function MovieCard({ movie }) {
//   const {
//     addToFavorites,
//     removeFromFavorites,
//     isFavorite,
//   } = useMovieContext();

//   const favorite = isFavorite(movie.id);

//   const handleFavoriteClick = () => {
//     if (favorite) {
//       removeFromFavorites(movie.id);
//     } else {
//       addToFavorites(movie);
//     }
//   };

//   return (
//     <div className="card bg-dark text-white h-100">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         className="card-img-top"
//         alt={movie.title}
//       />

//       <div className="card-body">
//         <h5 className="card-title">{movie.title}</h5>
//         <p className="card-text">
//           {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
//         </p>
//       </div>

//       <div className="card-footer text-center">
//         <button
//           className="btn btn-light"
//           onClick={handleFavoriteClick}
//         >
//           {favorite ? "❤️" : "🤍"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

// import { useMovieContext } from "../../contexts/MovieContext.jsx";
// import { Link } from "react-router-dom";


// function MovieCard({ movie }) {
//   const { addToFavorites, removeFromFavorites, isFavorite } =
//     useMovieContext();

//   const favorite = isFavorite(movie.id);

//   const handleFavoriteClick = () => {
//     favorite
//       ? removeFromFavorites(movie.id)
//       : addToFavorites(movie);
//   };

//   return (
//     <div className="card bg-dark text-white h-100">
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         className="card-img-top"
//         alt={movie.title}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{movie.title}</h5>
//         <p className="card-text">{movie.release_date?.split("-")[0]}</p>
//       </div>
//       <div className="card-footer text-center">
//         <button className="btn btn-light" onClick={handleFavoriteClick}>
//           {favorite ? "❤️" : "🤍"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;


// import { Link } from "react-router-dom";
// import { useMovieContext } from "../../contexts/MovieContext.jsx";

// function MovieCard({ movie }) {
//   const { addToFavorites, removeFromFavorites, isFavorite } =
//     useMovieContext();

//   const favorite = isFavorite(movie.id);

//   const handleFavoriteClick = (e) => {
//     e.stopPropagation(); // VERY IMPORTANT
//     e.preventDefault();  // VERY IMPORTANT

//     favorite
//       ? removeFromFavorites(movie.id)
//       : addToFavorites(movie);
//   };

//   return (
//     <div className="card bg-dark text-white h-100">

//       {/* 👇 CLICKING THIS OPENS DETAILS PAGE */}
//       <Link
//         to={`/movie/${movie.id}`}
//         style={{ textDecoration: "none", color: "white" }}
//       >
//         <img
//           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//           className="card-img-top"
//           alt={movie.title}
//         />

//         <div className="card-body">
//           <h5 className="card-title">{movie.title}</h5>
//           <p className="card-text">
//             {movie.release_date?.split("-")[0]}
//           </p>
//         </div>
//       </Link>

//       {/* 👇 FAVORITE BUTTON OUTSIDE LINK */}
//       <div className="card-footer text-center">
//         <button
//           className="btn btn-light"
//           onClick={handleFavoriteClick}
//         >
//           {favorite ? "❤️" : "🤍"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;
import { Link } from "react-router-dom";
import { useMovieContext } from "../../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useMovieContext();

  const favorite = isFavorite(movie.id);



  // 🔥 Dynamic rating color
  const getRatingColor = () => {
    if (movie.vote_average >= 8) return "bg-success";
    if (movie.vote_average >= 6) return "bg-warning text-dark";
    return "bg-danger";
  };

  return (
    <div className="card bg-dark text-white border-0 movie-card position-relative">

      {/* ⭐ Rating Badge */}
      {/* ⭐ Circular Rating Badge */}
      
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
        />

        <div className="card-body text-center">
          <h6 className="card-title">{movie.title}</h6>
          <p className="text-muted">
            {movie.release_date?.split("-")[0]}
          </p>
        </div>
      </Link>

      <div className="text-center pb-3">
        <button
          className={`btn ${
            favorite ? "btn-danger" : "btn-outline-light"
          }`}
          onClick={() =>
            favorite
              ? removeFromFavorites(movie.id)
              : addToFavorites(movie)
          }
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;