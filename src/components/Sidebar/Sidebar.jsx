import { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Sidebar.css"



export default function Sidebar({allLeagues, getallleagues, user}){

    useEffect(()=>(
        getallleagues()
    ),[])

    return(
        <>
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
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading text-center">
                My Leagues
            </div>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"></hr>
            <div className="sidebar-content text-center">
            {allLeagues.map((item)=>(
                user.user_id === item[1]?(
                    <>
                        <Link className="MyLeagueLinks" to={`${item[2]}`}>{item[2]}</Link>
                        <br></br>
                    </>
                ):
                <></>
            ))}
            </div>

        </ul>
        </>
    )
}