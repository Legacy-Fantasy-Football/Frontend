import "./App.css"
import { Routes, Route } from 'react-router-dom'
import ViewLeagues from "../ViewLeagues/ViewLeagues"
import LeaguePage from "../LeaguePage/LeaguePage"


export default function App(){

    const base_url = "http://localhost:8000"

    return(
        <Routes>
            <Route path="/" element={<ViewLeagues/>}></Route>
            <Route path="/:Espn_League_Id" element={<LeaguePage base_url={base_url}/>}></Route>
        </Routes>

    )
}