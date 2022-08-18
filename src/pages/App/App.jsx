import "./App.css"
import EditLeaguePage from "../EditLeaguePage/EditLeaguePage"
import Footer from "../../components/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import Home from "../HomePage/HomePage";
import Login from "../LoginPage/LoginPage";
import Register from "../RegisterPage/RegisterPage";
import { useState } from "react"
import Chart from "../Chart/Chart"
import BarChart from "../Chart/BarChart"
import CreateLeague from "../../components/CreateLeague/CreateLeague"
import Dashboard from "../LeaguePage/Dashboard/Dashboard"
import AddYear from "../../components/AddYear.jsx/AddYear";
import axios from "axios"

export default function App(){

    // const base_url = "https://legacyfantasyfootballbackend.herokuapp.com"
    const base_url = "http://localhost:8000"
    const [allLeagues, setAllLeagues] = useState([])
    // const { user, logoutUser } = useContext(AuthContext);
   
    function getallleagues(){
      let data
      axios.get(`${base_url}/leagues`)
      .then(res => {
          data = res.data;
          setAllLeagues(data)
          // console.log(`all leagues: ${data}`)
      })
      .catch(err => {})
    }


    return(
      <Router>
        <div className="flex app-cont flex-col min-h-screen overflow-hidden">
        <AuthProvider>
      
          <Routes>
            <Route element={<Login base_url={base_url}/>} path="/" />
            <Route element={<Register base_url={base_url}/>} path="/register" />
            <Route element={<Home getallleagues={getallleagues} base_url={base_url} allLeagues={allLeagues} setAllLeagues={setAllLeagues}/>} path="/home" />
            <Route path="/home/:Espn_League_Id/edit" element={<EditLeaguePage base_url={base_url}/>}></Route>
            <Route path="/home/chart" element={<Chart/>}></Route>
            <Route path="/home/BarChart" element={<BarChart/>}></Route>
            <Route path="/home/createLeague" element={<CreateLeague base_url={base_url}/>}></Route>
            <Route path="/home/:Espn_League_Id/" element={<Dashboard getallleagues={getallleagues} base_url={base_url} allLeagues={allLeagues}/>}></Route>
            <Route path="/home/addYears/:Espn_League_Id/" element={<AddYear base_url={base_url}/>}></Route>
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