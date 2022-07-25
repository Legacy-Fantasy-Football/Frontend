import "./App.css"
import { Routes, Route } from 'react-router-dom'
import ViewLeagues from "../ViewLeagues/ViewLeagues"
import LeaguePage from "../LeaguePage/LeaguePage"
import EditLeaguePage from "../EditLeague/EditLeaguePage"


export default function App(){

    const base_url = "http://localhost:8000"

    return(
        <Routes>
            <Route path="/" element={<ViewLeagues/>}></Route>
            <Route path="/:Espn_League_Id" element={<LeaguePage base_url={base_url}/>}></Route>
            <Route path="/:Espn_League_Id/edit" element={<EditLeaguePage base_url={base_url}/>}></Route>
        </Routes>

    )
}