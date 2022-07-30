import "./LeaguePage.css"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chart from "../Chart/Chart"
import BarChart from "../Chart/BarChart"
import { useState, useEffect } from "react";
import LegacyPoints from "../../components/LegacyPoints";
import TrophyRoom from "../../components/TrophyRoom";
import Standings from "../../components/Standings";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function LeaguePage(baseurl){

    let navigate = useNavigate()
    const [chartData, setChartData]= useState([])
    const [barChartData, setBarChartData] = useState([])
    const [leagueData, setLeagueData] = useState([])
    const [leagueName, setLeagueName] = useState("")
    const [standings, setStandings] = useState([])
    console.log(leagueData)

    function getWinsChartData(){
        let data
        axios.get(`http://localhost:8000/wins/${id}`)
        .then(res => {
            data = res.data;
            // console.log(data)
            setChartData(data.bigdata)
        })
        .catch(err => {})
    }
    function getPointsChartData(){
        let data
        axios.get(`http://localhost:8000/points/${id}`)
        .then(res => {
            data = res.data;
            console.log(data.bigdata)
            setBarChartData(data.bigdata)
        })
        .catch(err => {})
    }

    console.log(barChartData)

    function getLeagueData(){
        let data
        axios.get(`http://localhost:8000/wel/${id}`)
        .then(res => {
            data = res.data;
            setStandings(data.standings)
            setLeagueName(data.host)
            setLeagueData(data.bigdata)
        })
        .catch(err => {})
    }

    console.log(leagueData)


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
        getPointsChartData()
      },[])
    
    return(
        <div className="container">
        <h1>{leagueName}</h1>
        <div className="component-cont">
        <Row>
        <Col className="component" sm={12} md={6}>
        <LegacyPoints ClassName="linechart" leagueData={leagueData}></LegacyPoints>
        </Col>
        <Col className="component" sm={12} md={6}>
        <Chart ClassName="linechart" chartData={chartData} leagueName={leagueName}></Chart>
        </Col>
        <Col className="component" sm={12} md={6}>
        <BarChart ClassName="linechart" barChartData={barChartData} leagueName={leagueName}></BarChart>
        </Col>
        <Col className="component" sm={12} md={6}>
        <TrophyRoom ClassName="linechart" leagueData={leagueData}></TrophyRoom>
        
        </Col>
        <Col className="component" sm={12} md={12}>
        <Standings ClassName="linechart" standings={standings}></Standings>
        </Col>
        </Row>
        </div>
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
        </div>
    )
}