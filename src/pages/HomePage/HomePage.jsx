import UserInfo from "../../components/Userinfo";
import AuthContext from "../../context/AuthContext";
import "./HomePage.css"

// import './ViewLeagues.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CreateLeague from "../../components/CreateLeague/CreateLeague";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";




export default function Home({base_url, allLeagues, setAllLeagues, getallleagues}) {

  const { user, logoutUser } = useContext(AuthContext);
  const [displaySpinner, setDisplaySpinner] = useState("false")
  // console.log(user.user_id)
  let Navigate = useNavigate()
  const [leagues, setLeagues] = useState(false)
  const [newHost, setNewHost] = useState("")
  const [newLeagueId, setNewLeagueId] = useState("")
  const [newEspn_S2, setNewEspn_S2] = useState("")
  const [newEspn_Swid, setNewEspn_Swid] = useState("")
  const [startYear, SetStartYear] = useState("")
  const [create, setCreate] = useState()
  const [search, setSearch] = useState("")
  
  function getLeagues(){
    console.log("it mounted")
    let data;
    axios.get(`${base_url}/wel/`)
        .then(res => {
            data = res.data;
            setLeagues(data)
        })
        .catch(err => {})
  }

  function handleHostInput(e){
    setNewHost(e.target.value)
  };
  function handleStartYearInput(e){
    SetStartYear(e.target.value)
  }
  function handleLeagueIdInput(e){
    setNewLeagueId(e.target.value)
  };
  function handleEspn_S2Input(e){
    setNewEspn_S2(e.target.value)
  };
  function handleEspn_SwidInput(e){
    setNewEspn_Swid(e.target.value)
  };

  function handleSubmit(e){
    setDisplaySpinner("true")
    e.preventDefault();
    //console.log(`newLeagueHost: ${newLeague.host}`)
    axios.post(`${base_url}/wel/`, {
        user: user.user_id,
        host: newHost,
        year_started: startYear,
        Espn_League_Id: newLeagueId,
        Espn_S2: newEspn_S2,
        Espn_Swid: newEspn_Swid
      })
      .then((res) =>{
        Navigate(`/home/${newLeagueId}`)
      })
      .catch((err) =>{})
  }

  function setCreateFunc(e){
    e.preventDefault()
    console.log("i was clicked")
    setCreate(true)
  }

  function handlesearch(e){
    setSearch(e.target.value)
  }

  function goToLeague(e){
    e.preventDefault()
    Navigate(`/home/${search}`)
  }

  useEffect(()=>{
    getLeagues()
    getallleagues()
  },[])

  return (
    <div className="center">
    {create ? ( 



    <div>
      <CreateLeague setCreate={setCreate} displaySpinner={displaySpinner} handleSubmit={handleSubmit} handleHostInput={handleHostInput} newHost={newHost} startYear={startYear} handleStartYearInput={handleStartYearInput} newLeagueId={newLeagueId} handleLeagueIdInput={handleLeagueIdInput} newEspn_S2={newEspn_S2} handleEspn_S2Input={handleEspn_S2Input} newEspn_Swid={newEspn_Swid} handleEspn_SwidInput={handleEspn_SwidInput} ></CreateLeague>
    </div>
    ) : (
      <div className="home-background">
        <div className="home-box">
        <form onSubmit={goToLeague} className="">
          <h1 className="pt-5">Search for a league</h1>
          <input type="number" id="leagueid" placeholder="Enter your Espn league id" onChange={handlesearch} value={search} />
          <input type="submit" name="" value="Search"/>
        </form>

        <div className="MyLeagues">My Leagues</div>
          <div>
          {allLeagues.map((item)=>(
            user.user_id === item[1]?(
              <>
              <Link className="MyHomeLeagueLinks" to={`${item[2]}`}>{item[2]}</Link>
              <br></br>
              </>
            ):
            <></>
          ))}
          </div>
          <form onSubmit={setCreateFunc}>
            <input type="submit" value="Create League" />
          </form>
        </div>
      </div>



      // <div className="home">
      // <div className="d-grid createorfind gap-2">
      //   <div className="row">
      //   <Form onSubmit={goToLeague} className="Form">
      //     <Form.Group className="mb-3" controlId="formBasicEmail">
      //     <Form.Control className="Search" type="number" placeholder="Enter your Espn league id" onChange={handlesearch} value={search}/>
      //   </Form.Group>
      //   <Button type="submit" variant="primary" size="lg">
      //   Search for League
      //   </Button>
      //   </Form>
      //   <Button onClick={setCreateFunc} className="large-btn" variant="primary" size="lg">
      //       Create League
      //   </Button>
      //   </div>
      // </div>

      // <div className="MyLeagues">My Leagues</div>
      // <div>
      // {allLeagues.map((item)=>(
      //   user.user_id === item[1]?(
      //     <>
      //     <Link className="MyLeagueLinks" to={`${item[2]}`}>{item[2]}</Link>
      //     <br></br>
      //     </>
      //   ):
      //   <></>
      // ))}
      // </div>
      // </div>
      
    
    ) }
  </div>  
  )
}
