import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../css/Footer.css";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  // Show Back To Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4 className="footer-logo">🎬 Movie List</h4>
          <p>Your ultimate movie discovery platform.</p>
        </div>

        <div className="footer-section">
          <h5>Quick Links</h5>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-section">
          <h5>Categories</h5>
          <p className="footer-link">Popular Movies</p>
          <p className="footer-link">Top Rated</p>
          <p className="footer-link">Upcoming</p>
        </div>

        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <span>🌐</span>
            <span>📺</span>
            <span>🎬</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Powered by TMDB API</p>
        © {new Date().getFullYear()} Movie List. All Rights Reserved.
      </div>

      {showTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
}

export default Footer;