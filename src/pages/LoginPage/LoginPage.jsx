import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form  from "react-bootstrap/Form";
import "./LoginPage.css"

export default function LoginPage(){
  const {loginUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (

    <div className="container">
        <form onSubmit={handleSubmit} className="box">
          <h1 className="pt-5">Login</h1>
          <p className="text-muted">Please enter your login and password!</p>
          <input type="text" name="" placeholder="Username" />
          <input type="password" name="" placeholder="Password" />
          <a className="forgot text-muted" href="#">Forgot password?</a>
          <input type="submit" name="" value="Login" href="#" />
          <div className="col-md-12">
            <ul className="social-network social-circle">
              <li>
                <a href="#" className="icoFacebook" title="Facebook"
                  ><i className="fab fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="#" className="icoTwitter" title="Twitter"
                  ><i className="fab fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="#" className="icoGoogle" title="Google +"
                  ><i className="fab fa-google-plus"></i
                ></a>
              </li>
            </ul>
          </div>
        </form>
</div>





    // <section>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Login </h1>
    //     <hr />
    //     <label htmlFor="username">Username</label>
    //     <input type="text" id="username" placeholder="Enter Username" />
    //     <label htmlFor="password">Password</label>
    //     <input type="password" id="password" placeholder="Enter Password" />
    //     <button type="submit">Login</button>
    //   </form>
    // </section>

    // <div classNameNameNameName="login-body">
    //   <section classNameNameNameName="h-100 gradient-form">
    //     <Container classNameNameNameName="py-5 h-100">
    //         <Row classNameNameNameName="justify-content-center align-items-center h-100">
    //         <Col classNameNameName="col-xl-10">
    //           <div classNameNameName="card rounded-3 text-black">
    //             <div classNameNameName="row g-0">
    //               <div classNameNameName="login-card col-lg-6">
    //                 <div classNameNameName="card-body p-md-5 mx-md-4">
    //                 <div classNameNameName="text-center">
    //                   <h4 classNameNameName="mt-1 mb-5 pb-1">We are The Fantasy Basketball ChatForum</h4>
    //                 </div>
    //                 <Form onSubmit={handleSubmit}>
    //                   <p>Please login to your account</p>
    
    //                   <div classNameNameName="form-outline mb-3">
    //                     <input name="username" id="username" classNameNameName="form-control"
    //                       placeholder="Username" required/>
    //                     <label classNameNameName="form-label" for="username">Username</label>
    //                   </div>
    
    //                   <div classNameNameName="form-outline mb-3">
    //                     <input type="password" name="password" id="form2Example22" classNameNameName="form-control" required/>
    //                     <label classNameNameName="form-label" for="form2Example22">Password</label>
    //                   </div>
    
    //                   <div classNameNameName="text-center row pt-1 mb-5 pb-1">
    //                     <button classNameNameName="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 col-12" type="submit">Log
    //                       in</button>
    //                     <a classNameNameName="text-muted col-12" href="#!">Forgot password?</a>
    //                   </div>
    
    //                   <div classNameNameName="d-flex align-items-center justify-content-center pb-4">
    //                     <p classNameNameName="mb-0 me-2">Don't have an account?</p>
    //                     <a type="button" classNameNameName="btn create-new btn-outline-primary" href="/user/signup">Create new</a>
    //                   </div>
    
    //               </Form>
    //               </div>
    //               </div>
    //               <div classNameNameName="col-lg-6 d-flex align-items-center gradient-custom-2 text-center">
    //                 <div classNameNameName="text-white px-3 py-4 p-md-5 mx-md-4 text-center">
    //                  <h4 classNameNameName="mb-4">Find your community</h4>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </Col>
    //         </Row>
    //     </Container>
    //   </section>
    // </div>






  );
};