import "./App.css"
import ViewLeagues from "../ViewLeagues/ViewLeagues"
import LeaguePage from "../LeaguePage/LeaguePage"
import EditLeaguePage from "../EditLeaguePage/EditLeaguePage"
import Footer from "../../components/Footer"
import NavbarComp from "../../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import Home from "../HomePage/HomePage";
import Login from "../LoginPage/LoginPage";
import Register from "../RegisterPage/RegisterPage";
import PrivateRoute from "../../utils/PrivateRoute"
import AuthContext from "../../context/AuthContext";
import { useContext } from "react"
import ProtectedPage from "../ProtectedPage/ProtectedPage"
import { useState } from "react"
import jwt_decode from "jwt-decode";
import Chart from "../Chart/Chart"
import BarChart from "../Chart/BarChart"
import MergeOwners from "../../components/MergeOwners"
import CreateLeague from "../../components/CreateLeague/CreateLeague"

export default function App(){

    const base_url = "http://localhost:8000"
    // const { user, logoutUser } = useContext(AuthContext);
   
    return(
      <Router>
        <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          
          <NavbarComp />
          <Routes>
            <Route element={<Login/>} path="/login" />
            <Route element={<Register/>} path="/register" />
            <Route element={<Home/>} path="/" />
            <Route path="/:Espn_League_Id" element={<LeaguePage base_url={base_url}/>}></Route>
            <Route path="/:Espn_League_Id/edit" element={<EditLeaguePage base_url={base_url}/>}></Route>
            <Route path="/:Espn_League_Id/merge" element={<MergeOwners base_url={base_url}/>}></Route>
            <Route path="/chart" element={<Chart/>}></Route>
            <Route path="/BarChart" element={<BarChart/>}></Route>
            <Route path="/createLeague" element={<CreateLeague/>}></Route>
            
          </Routes>
        </AuthProvider>
        <Footer />
      </div>
      </Router>




        // <Routes>
        //     <Route path="/" element={<ViewLeagues/>}></Route>
        // </Routes>

    )
}