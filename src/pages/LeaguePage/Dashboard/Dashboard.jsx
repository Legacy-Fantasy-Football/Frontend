import "./Dashboard.css"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chart from "../../Chart/Chart"
import BarChart from "../../Chart/BarChart"
import { useState, useEffect, useContext } from "react";
import LegacyPoints from "../../../components/LegacyPoints/LegacyPoints";
import TrophyRoom from "../../../components/TrophyRoom";
import Standings from "../../../components/Standings";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import AuthContext from "../../../context/AuthContext";
import NavbarComp from "../../../components/Navbar/Navbar";






export default function LeaguePage({base_url}){

    let navigate = useNavigate()
    const [chartData, setChartData]= useState([])
    const [barChartData, setBarChartData] = useState([])
    const [leagueData, setLeagueData] = useState([])
    const [leagueName, setLeagueName] = useState("")
    const [standings, setStandings] = useState([])
    const { user, logoutUser } = useContext(AuthContext);
    console.log(leagueData)
    let { Espn_League_Id } = useParams();
    const id = Espn_League_Id
    console.log(id)

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

    function getLeagueData(){
        let data
        axios.get(`${base_url}/wel/${id}`)
        .then(res => {
            data = res.data;
            setStandings(data.standings)
            setLeagueName(data.host)
            setLeagueData(data.bigdata)
        })
        .catch(err => {})
    }

    console.log(leagueData)


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
      },[])
    
    return(
        // <!-- Page Wrapper -->
    <div id="wrapper">

        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Legacy Fantasy Football</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"></hr>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"></hr>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


        </ul>
        {/* <!-- End of Sidebar --> */}
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">
            <NavbarComp></NavbarComp>
            {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <Row>
                    {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Earnings (Monthly)</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
                                                Earnings (Annual)</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                    {/* <!-- Area Chart --> */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
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
                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
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
                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
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
                                    <TrophyRoom classNameName="linechart" leagueData={leagueData}></TrophyRoom>
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
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
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
                </div>
            </div>
        </div>
    </div>
        )
    }
    {/* }
        // <div classNameName="container">
        // <h1>{leagueName}</h1>
        // <Button onClick={addToMyleagues}>Add to My Leagues</Button>
        // <div classNameName="component-cont">
        // <Row>
        // <Col classNameName="component" sm={12} md={6}>
        // <LegacyPoints classNameName="linechart" leagueData={leagueData}></LegacyPoints>
        // </Col>
        // <Col classNameName="component" sm={12} md={6}>
        // <Chart classNameName="linechart" chartData={chartData} leagueName={leagueName}></Chart>
        // </Col>
        // <Col classNameName="component" sm={12} md={6}>
        // <BarChart classNameName="linechart" barChartData={barChartData} leagueName={leagueName}></BarChart>
        // </Col>
        // <Col classNameName="component" sm={12} md={6}>
        // <TrophyRoom classNameName="linechart" leagueData={leagueData}></TrophyRoom>
        
        // </Col>
        // <Col classNameName="component" sm={12} md={12}>
        // <Standings classNameName="linechart" standings={standings}></Standings>
        // </Col>
        // </Row>
        // </div>
        // <h1>{Espn_League_Id}</h1>
        // <Link to={`/${id}/edit`}>
        // <button>
        //     Edit
        // </button>
        // </Link>
        // <Link to={`/${id}/merge`}>
        // <button>
        //     Merge Owners
        // </button>
        // </Link>
        // <button onClick={deleteLeague}>
        //     Delete
        // </button>
        // </div> */}
