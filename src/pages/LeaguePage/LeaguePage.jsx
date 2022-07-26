import "./LeaguePage.css"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chart from "../Chart/Chart"
import { useState, useEffect } from "react";


export default function LeaguePage(baseurl){

    let navigate = useNavigate()
    const [chartData, setChartData]= useState([])

    function getData(){
        let data
        axios.get(`http://localhost:8000/wel/${id}`)
        .then(res => {
            data = res.data;
            console.log(data.bigdata)
            setChartData(data.bigdata)
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

    useEffect(()=>{
        getData()
      },[])
    

    return(
        <>
        <Chart chartData={chartData}></Chart>
        <h1>{Espn_League_Id}</h1>
        <Link to={`/${id}/edit`}>
        <button>
            Edit
        </button>
        </Link>
        <button onClick={deleteLeague}>
            Delete
        </button>
        </>
    )
}