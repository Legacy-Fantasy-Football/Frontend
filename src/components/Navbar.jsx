import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

// export default function NavbarComp(){
//   const { user, logoutUser } = useContext(AuthContext);
//   console.log(user)
//   return (
//     <nav>
//       <div>
//         <h1>Legacy Fantasy Football</h1>
//         <div>
//           {user ? (
//             <>
//               <Link to="/">Home</Link>
//               <button onClick={logoutUser}>Logout</button>
//             </>
//           ) : (
//             <>
              
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default function NavbarComp() {
//   const { user, logoutUser } = useContext(AuthContext);
//   return (
//     <Navbar>
//       <Container>
//         <Navbar.Brand href="#home">Legacy Fantasy Football</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           {user?(
//             <>
//             <Navbar.Text>
//               Signed in as: <a href="#login">{user.username}</a>
//             </Navbar.Text>
//             <Navbar.Text onClick={logoutUser}>
//               logout
//             </Navbar.Text>
//             </>
//           ):<></>}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


export default function NavbarComp() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Legacy Fantasy Football</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#deets">{user.username}</Nav.Link>
          <Nav.Link href="#memes">
            Logout
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



