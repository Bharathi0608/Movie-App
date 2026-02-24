// import '../css/Favorites.css';
// import { useMovieContext } from "../contexts/MovieContext"
// import MovieCard from '../assets/components/MovieCard.jsx';

// function Favorites() {
// const {favorites} = useMovieContext();

// if(favorites){
//     return (
//         <div className="favorites">
//             <h2>Your Favorites</h2>
//     <div className="movies-grid">
//         {favorites.map((movie) => (
//                 <MovieCard movie={movie} key={movie.id}/>
//             ))}
//     </div>
//         </div>
//     );
// }
//     return <div className="favorites-empty">
//         <h2>No favorites Movies yet</h2>
//         <p>start adding movies to your favorites and they will appear here</p>
//         </div>
// } 
// export default Favorites;

import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../assets/components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="container text-white mt-4">
        <h3>No favorite movies yet ❤️</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {favorites.map((movie) => (
          <div
            key={movie.id}
            className="col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
