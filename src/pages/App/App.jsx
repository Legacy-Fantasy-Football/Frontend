import "./App.css"
import { Routes, Route } from 'react-router-dom'
import ViewLeagues from "../ViewLeagues/ViewLeagues"
import LeaguePage from "../LeaguePage/LeaguePage"


export default function App(){
    return(
        <Routes>
            <Route path="/" element={<ViewLeagues/>}></Route>
            <Route path="/:leaguecode" element={<LeaguePage/>}></Route>
        </Routes>

    )
}