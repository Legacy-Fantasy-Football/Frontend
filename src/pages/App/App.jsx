import "./App.css"
import { Routes, Route } from 'react-router-dom'
import ViewLeagues from "../ViewLeagues/ViewLeagues"


export default function App(){
    return(
        <Routes>
            <Route path="/" element={<ViewLeagues/>}></Route>
        </Routes>

    )
}