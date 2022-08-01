import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (

  <div className="login-background">
    <div className="login-container">
    <form onSubmit={handleSubmit} className="box pb-5">
      <h1 className="pt-5">Register</h1>
      <p className="text-muted">Please create a username and password!</p>
           <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
           <input
             type="password"
             id="password"
             onChange={e => setPassword(e.target.value)}
             placeholder="Password"
             required
           />
         <input
           type="password"
           id="confirm-password"
           onChange={e => setPassword2(e.target.value)}
           placeholder="Confirm Password"
           required
         />
         <p>{password2 !== password ? "Passwords do not match" : ""}</p>
      <input type="submit" name="" value="Create Account" href="#" />
    </form>
  </div>
</div>
  )
  }




  //   <section>
  //     <form onSubmit={handleSubmit}>
  //       <h1>Register</h1>
  //       <hr />
  //       <div>
  //         <label htmlFor="username">Username</label>
  //         <input
  //           type="text"
  //           id="username"
  //           onChange={e => setUsername(e.target.value)}
  //           placeholder="Username"
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="password"
  //           id="password"
  //           onChange={e => setPassword(e.target.value)}
  //           placeholder="Password"
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="confirm-password">Confirm Password</label>
  //         <input
  //           type="password"
  //           id="confirm-password"
  //           onChange={e => setPassword2(e.target.value)}
  //           placeholder="Confirm Password"
  //           required
  //         />
  //         <p>{password2 !== password ? "Passwords do not match" : ""}</p>
  //       </div>
  //       <button>Register</button>
  //     </form>
  //   </section>
  // );