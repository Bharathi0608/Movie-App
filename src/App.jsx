import "./css/App.css";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import ActorDetails from "./pages/ActorDetails.jsx";
import NavBar from "./assets/components/NavBar.jsx";
import Footer from "./assets/components/Footer.jsx";
import Login from "./pages/Login.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.jsx";

const App = () => {
  return (
    <MovieProvider>
      <div className="app-layout">
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/actor/:id" element={<ActorDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </MovieProvider>
  );
};

export default App;
