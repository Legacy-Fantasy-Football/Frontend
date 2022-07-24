import "./LeaguePage.css"
import { useParams } from "react-router-dom"
import axios from "axios";


export default function LeaguePage(baseurl){

    let { Espn_League_Id } = useParams();

    const id = Espn_League_Id
    console.log(id)

    const deleteLeague = async () =>{
        await axios.delete(`http://localhost:8000/wel/${id}`)
    }

    return(
        <>
        <h1>{Espn_League_Id}</h1>
        <button onClick={deleteLeague}>
            Delete
        </button>
        </>
    )
}