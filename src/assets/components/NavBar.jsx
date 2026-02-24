
// import { Link } from "react-router-dom";
// import { useMovieContext } from "../../contexts/MovieContext";
// import { signInWithPopup, signOut } from "firebase/auth";
// import { auth, provider } from "../../firebase";

// function NavBar() {
//   const { user } = useMovieContext();

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <nav className="navbar navbar-dark bg-dark px-4">
//       <Link to="/" className="navbar-brand">
//         Movie App
//       </Link>

//       <div className="d-flex align-items-center">
//         <Link to="/" className="btn btn-outline-light me-2">
//           Home
//         </Link>

//         <Link to="/favorites" className="btn btn-outline-light me-3">
//           My Favorites
//         </Link>

//         {user ? (
//           <>
//             <span className="text-white me-3">
//               Welcome, {user.displayName}
//             </span>

//             <button
//               className="btn btn-danger"
//               onClick={() => signOut(auth)}
//             >
//               Logout
//             </button>
            
//           </>
//         ) : (
//           <button
//             className="btn btn-light"
//             onClick={handleGoogleLogin}
//           >
//             Login
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import { Link } from "react-router-dom";
import { useMovieContext } from "../../contexts/MovieContext";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";

function NavBar() {
  const { user, selectedLanguage, setSelectedLanguage } = useMovieContext();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        Movie App
      </Link>

      <div className="d-flex align-items-center gap-3">

        {/* 🌐 Language Select */}
        <select
  className="form-select form-select-sm bg-dark text-white border-secondary"
  style={{ width: "120px", cursor: "pointer" }}
  value={selectedLanguage}
  onChange={(e) => setSelectedLanguage(e.target.value)}
>
  <option value="en">English</option>
  <option value="hi">Hindi</option>
  <option value="ta">Tamil</option>
  <option value="te">Telugu</option>
  <option value="kn">Kannada</option>   {/* ✅ Added */}
</select>

        <Link to="/" className="btn btn-outline-light">
          Home
        </Link>

        <Link to="/favorites" className="btn btn-outline-light">
          My Favorites
        </Link>

        {user ? (
          <>
            <span className="text-white">{user.displayName}</span>
            <button
              className="btn btn-danger"
              onClick={() => signOut(auth)}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="btn btn-light"
            onClick={handleGoogleLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;