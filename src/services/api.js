// const API_KEY = "0ee7da2cc963fc1359db8d7b081431db";
// const BASE_URL = "https://api.themoviedb.org/3";

// // export const getPopularMovies = async () => {
// //     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
// //     const data = await response.json();
// //     return data.results;
// // };

// export const getPopularMovies = async (page = 1) => {
//   const response = await fetch(
//     `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
//   );
//   const data = await response.json();
//   return data.results;
// };


// // export const searchMovies = async (query) => {
// //     const response = await fetch(
// //         `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
// //             query
// //         )}`
// //     );
// //     const data = await response.json();
// //     return data.results;
// // };


// export const searchMovies = async (query, page = 1) => {
//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
//       query
//     )}&page=${page}`
//   );
//   const data = await response.json();
//   return data.results;
// };
const API_KEY = "0ee7da2cc963fc1359db8d7b081431db";
const BASE_URL = "https://api.themoviedb.org/3";

// 🔥 Popular Movies (with language filter)
export const getPopularMovies = async (page = 1, language = "en") => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}&with_original_language=${language}`
  );
  const data = await response.json();
  return data.results;
};

// 🔥 Search Movies (with language filter)
export const searchMovies = async (query, page = 1, language = "en") => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=${page}&with_original_language=${language}`
  );
  const data = await response.json();
  return data.results;
};