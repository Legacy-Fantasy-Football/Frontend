import "./LeaguePage.css"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chart from "../Chart/Chart"
import { useState, useEffect } from "react";
import LegacyPoints from "../../components/LegacyPoints";


export default function LeaguePage(baseurl){

    let navigate = useNavigate()
    const [chartData, setChartData]= useState([])
    const [leagueData, setLeagueData] = useState([])
    

    function getWinsChartData(){
        let data
        axios.get(`http://localhost:8000/wins/${id}`)
        .then(res => {
            data = res.data;
            console.log(data.bigdata)
            setChartData(data.bigdata)
        })
        .catch(err => {})
    }

    function getLeagueData(){
        let data
        axios.get(`http://localhost:8000/wel/${id}`)
        .then(res => {
            data = res.data;
            //console.log(data)
            setLeagueData(data.bigdata)
        })
        .catch(err => {})
    }


    let { Espn_League_Id } = useParams();

    const id = Espn_League_Id
    console.log(id)

    const deleteLeague = async () =>{
        await axios.delete(`http://localhost:8000/wel/${id}`)
        navigate('/')
    }

    // for (const key in leagueData.bigdata) {
    //         const obj = {
    //             owner: key,
    //             legacypoints: leagueData.bigdata[key].legacypoints
    //         }
    //         console.log(`${key}: ${leagueData.bigdata[key].legacypoints}`);
    //         LegacyPoints.push(obj)
    // }





    useEffect(()=>{
        getWinsChartData()
        getLeagueData()
      },[])
    
    return(
        <>
        <Chart chartData={chartData}></Chart>
        <LegacyPoints leagueData={leagueData}></LegacyPoints>
        <h1>{Espn_League_Id}</h1>
        <Link to={`/${id}/edit`}>
        <button>
            Edit
        </button>
        </Link>
        <Link to={`/${id}/merge`}>
        <button>
            Merge Owners
        </button>
        </Link>
        <button onClick={deleteLeague}>
            Delete
        </button>
        </>
    )
}