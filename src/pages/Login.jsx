
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, provider } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   signInWithPopup
// } from "firebase/auth";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // Email Login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container mt-5 text-white">
//       <h2 className="mb-4">Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           className="form-control mb-3"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" className="btn btn-danger w-100">
//           Login
//         </button>
//       </form>

//       {/* 👇 GOOGLE BUTTON GOES HERE 👇 */}
//       <button
//         type="button"
//         className="btn btn-light w-100 mt-3"
//         onClick={handleGoogleLogin}
//       >
//         Continue with Google
//       </button>
//     </div>
//   );
// }

// export default Login;

// import { useState } from "react";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login Successful");
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container mt-5 text-white">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           className="form-control mb-3"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="btn btn-danger">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, provider } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   signInWithPopup
// } from "firebase/auth";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // Email Login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container mt-5 text-white">
//       <h2 className="mb-4">Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           className="form-control mb-3"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" className="btn btn-danger w-100">
//           Login
//         </button>
//       </form>

//       {/* 👇 GOOGLE BUTTON GOES HERE 👇 */}
//       <button
//         type="button"
//         className="btn btn-light w-100 mt-3"
//         onClick={handleGoogleLogin}
//       >
//         Continue with Google
//       </button>
//     </div>
//   );
// }

// export default Login;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, provider } from "../firebase";
// import {
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // 🔹 Email & Password Login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   // 🔹 Google Login
//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container mt-5 text-white" style={{ maxWidth: "400px" }}>
//       <h2 className="mb-4 text-center">Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           className="form-control mb-3"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" className="btn btn-danger w-100">
//           Login
//         </button>
//       </form>

//       <div className="text-center mt-3">OR</div>

//       <button
//         type="button"
//         className="btn btn-light w-100 mt-3"
//         onClick={handleGoogleLogin}
//       >
//         Continue with Google
//       </button>
//     </div>
//   );
// }

// export default Login;


import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="text-center">
        <h2 className="text-white mb-4">Login</h2>

        <button
          className="btn btn-light px-4 py-2"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
