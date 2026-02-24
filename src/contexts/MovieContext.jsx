
import { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  onAuthStateChanged,
  db,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "../firebase";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // 🌍 NEW: Global Language State
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("selectedLanguage") || "en";
  });

  // 🔄 Save language to localStorage
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  // 🔐 Auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        loadFavorites(currentUser.uid);
      } else {
        setFavorites([]);
      }
    });
    return unsub;
  }, []);

  const loadFavorites = async (uid) => {
    const q = query(
      collection(db, "favorites"),
      where("userId", "==", uid)
    );
    const snapshot = await getDocs(q);
    setFavorites(snapshot.docs.map((doc) => doc.data()));
  };

  // ❤️ ADD FAVORITE
  const addToFavorites = async (movie) => {
    if (!user) return alert("Please login first");

    const favDoc = doc(db, "favorites", `${user.uid}_${movie.id}`);

    setFavorites((prev) => [...prev, movie]);

    try {
      await setDoc(favDoc, { userId: user.uid, ...movie });
    } catch (error) {
      console.error(error);
    }
  };

  // ❌ REMOVE FAVORITE
  const removeFromFavorites = async (movieId) => {
    if (!user) return;

    const favDoc = doc(db, "favorites", `${user.uid}_${movieId}`);

    setFavorites((prev) =>
      prev.filter((movie) => movie.id !== movieId)
    );

    try {
      await deleteDoc(favDoc);
    } catch (error) {
      console.error(error);
    }
  };

  const isFavorite = (movieId) => {
    return favorites.some((m) => m.id === movieId);
  };

  const value = {
    user,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,

    // 🌍 NEW EXPORT
    selectedLanguage,
    setSelectedLanguage,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
