import "./App.css"
import ViewLeagues from "../ViewLeagues/ViewLeagues"
import EditLeaguePage from "../EditLeaguePage/EditLeaguePage"
import Footer from "../../components/Footer"
import NavbarComp from "../../components/Navbar/Navbar";
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
import Dashboard from "../LeaguePage/Dashboard/Dashboard"
import axios from "axios"

export default function App(){

    const base_url = "http://localhost:8000"
    const [allLeagues, setAllLeagues] = useState([])
    // const { user, logoutUser } = useContext(AuthContext);
   
    function getallleagues(){
      let data
      axios.get(`http://localhost:8000/leagues`)
      .then(res => {
          data = res.data;
          setAllLeagues(data)
          // console.log(`all leagues: ${data}`)
      })
      .catch(err => {})
    }


    return(
      <Router>
        <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
      
          <Routes>
            <Route element={<Login/>} path="/" />
            <Route element={<Register/>} path="/register" />
            <Route element={<Home getallleagues={getallleagues} allLeagues={allLeagues} setAllLeagues={setAllLeagues}/>} path="/home" />
            <Route path="/home/:Espn_League_Id/edit" element={<EditLeaguePage base_url={base_url}/>}></Route>
            <Route path="/home/:Espn_League_Id/merge" element={<MergeOwners base_url={base_url}/>}></Route>
            <Route path="/home/chart" element={<Chart/>}></Route>
            <Route path="/home/BarChart" element={<BarChart/>}></Route>
            <Route path="/home/createLeague" element={<CreateLeague/>}></Route>
            <Route path="/home/:Espn_League_Id/" element={<Dashboard getallleagues={getallleagues} base_url={base_url} allLeagues={allLeagues}/>}></Route>
            
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