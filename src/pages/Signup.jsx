// import { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       await updateProfile(userCredential.user, {
//         displayName: name,
//       });

//       alert("Signup Successful");
//       navigate("/login");

//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container mt-5 text-white">
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />
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
//         <button className="btn btn-danger">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5 text-white" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-danger w-100">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
