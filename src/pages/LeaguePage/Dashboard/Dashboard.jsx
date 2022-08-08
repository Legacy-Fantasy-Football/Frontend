import "./Dashboard.css"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chart from "../../Chart/Chart"
import BarChart from "../../Chart/BarChart"
import { useState, useEffect, useContext } from "react";
import LegacyPoints from "../../../components/LegacyPoints/LegacyPoints";
import TrophyRoom from "../../../components/TrophyRoom/TrophyRoom";
import Standings from "../../../components/Standings/Standings";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import AuthContext from "../../../context/AuthContext";
import NavbarComp from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";


export default function Dashboard({getallleagues,base_url, allLeagues}){

    let navigate = useNavigate()
    const [chartData, setChartData]= useState([])
    const [barChartData, setBarChartData] = useState([])
    const [leagueData, setLeagueData] = useState([])
    const [leagueName, setLeagueName] = useState("")
    const [standings, setStandings] = useState([])
    const [lastyearstandings,setLastYearStandings] = useState([])
    const { user, logoutUser } = useContext(AuthContext);
    console.log(leagueData)
    let { Espn_League_Id } = useParams();
    const id = Espn_League_Id
    console.log(id)


    function getWinsChartData(){
        let data
        axios.get(`${base_url}/wins/${id}`)
        .then(res => {
            data = res.data;
            // console.log(data)
            setChartData(data.bigdata)
        })
        .catch(err => {})
    }
    function getPointsChartData(){
        let data
        axios.get(`${base_url}/points/${id}`)
        .then(res => {
            data = res.data;
            console.log(data.bigdata)
            setBarChartData(data.bigdata)
        })
        .catch(err => {})
    }

    function addToMyleagues(){
        axios.post(`${base_url}/leagues/`, {
            user: user.user_id,
            league: id
          })
          .then((res) =>{
          })
          .catch((err) =>{})
    }

    console.log(barChartData)

    let standingsarr = []
    function getLeagueData(){
        let data
        axios.get(`${base_url}/wel/${id}`)
        .then(res => {
            data = res.data;
            // data.standings.forEach((d)=>{
            //     standingsarr.push(d)
            // })
            let sortedlastyear = data.standings[2021].sort(
                ({ wins: a }, { wins: b }) => b - a
            )
            setLastYearStandings(sortedlastyear)
            setStandings(data.standings)
            setLeagueName(data.host)
            setLeagueData(data.bigdata)
        })
        .catch(err => {})
    }



    const deleteLeague = async () =>{
        await axios.delete(`${base_url}/wel/${id}`)
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
      }, [])
    
    return(
        // <!-- Page Wrapper -->
    <div id="wrapper">

        <Sidebar getallleagues={getallleagues} allLeagues={allLeagues} user={user}></Sidebar>
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">
            <NavbarComp></NavbarComp>
            {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="pt-3 h3 mb-0 text-gray-800">{leagueName}</h1>
                    </div>
                    <Row className="align-items-center">
                    {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Number of Owners</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{chartData.length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Number of Years</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{Object.values(standings).length}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4 ">

                                <Button onClick={addToMyleagues}>Add to My Leagues</Button>
                        </div>
                    </Row>
                    <Row>
                    {/* <!-- Area Chart --> */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Total Wins</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body chart">
                                    <div className="chart-area">
                                    <Chart classNameName="linechart" chartData={chartData} leagueName={leagueName}></Chart>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Pie Chart --> */}
                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Legacy Points</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body chart">
                                    <div className="chart-scroll pb-2">
                                        <LegacyPoints classNameName="linechart" leagueData={leagueData}></LegacyPoints>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                    {/* <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Trophy Room</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body chart">
                                    <div className="chart-scroll pb-2">
                                    <TrophyRoom className="linechart" leagueData={leagueData}></TrophyRoom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* <!-- Area Chart --> */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Total Points</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body chart">
                                    <div className="chart-area">
                                    <BarChart classNameName="linechart" barChartData={barChartData} leagueName={leagueName}></BarChart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                    {/* <!-- Pie Chart --> */}
                    <div className="col-12">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Standings</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body chart">
                                    <div className="chart-scroll pb-2">
                                    <Standings classNameName="linechart" lastyearstandings={lastyearstandings} standings={standings}></Standings>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    </div>
        )
    }