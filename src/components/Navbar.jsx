import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Navbar(){
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user)
  return (
    <nav>
      <div>
        <h1>Legacy Fantasy Football</h1>
        <div>
          {user ? (
            <>
              <Link to="/">Home</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
