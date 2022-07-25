import "./App.css"
import ViewLeagues from "../ViewLeagues/ViewLeagues"
import LeaguePage from "../LeaguePage/LeaguePage"
import EditLeaguePage from "../EditLeaguePage/EditLeaguePage"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import Home from "../HomePage/HomePage";
import Login from "../LoginPage/LoginPage";
import Register from "../RegisterPage/RegisterPage";

export default function App(){

    const base_url = "http://localhost:8000"

    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<Login/>} path="/login" />
            <Route element={<Register/>} path="/register" />
            <Route element={<Home/>} path="/" />
            <Route path="/:Espn_League_Id" element={<LeaguePage base_url={base_url}/>}></Route>
            <Route path="/:Espn_League_Id/edit" element={<EditLeaguePage base_url={base_url}/>}></Route>


          </Routes>
        </AuthProvider>
        <Footer />
      </div>




        // <Routes>
        //     <Route path="/" element={<ViewLeagues/>}></Route>
        // </Routes>

    )
}