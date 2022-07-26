import { useContext } from "react";
import UserInfo from "../../components/Userinfo";
import AuthContext from "../../context/AuthContext";

// import './ViewLeagues.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




export default function Home(user) {

  console.log(user)

  const base_url = "http://localhost:8000"

  const [leagues, setLeagues] = useState([])
  const [newHost, setNewHost] = useState("")
  const [newLeagueId, setNewLeagueId] = useState("")
  const [newEspn_S2, setNewEspn_S2] = useState("")
  const [newEspn_Swid, setNewEspn_Swid] = useState("")
  
  function getLeagues(){
    console.log("it mounted")
    let data;
    axios.get(`http://localhost:8000/wel/`)
        .then(res => {
            data = res.data;
            setLeagues(data)
        })
        .catch(err => {})
  }

  function handleHostInput(e){
    setNewHost(e.target.value)
  };
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
    e.preventDefault();
    //console.log(`newLeagueHost: ${newLeague.host}`)
    axios.post(`${base_url}/wel/`, {
        host: newHost,
        Espn_League_Id: newLeagueId,
        Espn_S2: newEspn_S2,
        Espn_Swid: newEspn_Swid
      })
      .then((res) =>{
        setNewHost("")
        setNewLeagueId("")
        setNewEspn_S2("")
        setNewEspn_Swid("")
      })
      .catch((err) =>{})
  }

  useEffect(()=>{
    getLeagues()
  },[])

  return (
    <div>
        <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Host{" "}
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Name of the Host"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={newHost} name="user"
                               onChange={handleHostInput} />
                    </div>
  
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Your League Id
                            </span>
                        </div>
                        <input className="form-control " 
                                  placeholder="What is your league Id?" 
                                  value={newLeagueId} name="Espn_League_Id" 
                                  onChange={handleLeagueIdInput}>
                        </input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Your Espn_S2
                            </span>
                        </div>
                        <textarea className="form-control "
                                aria-label="With textarea" 
                                  placeholder="What is your Espn_S2?" 
                                  value={newEspn_S2} name="Espn_S2" 
                                  onChange={handleEspn_S2Input}>
                        </textarea>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Your Espn_SWID
                            </span>
                        </div>
                        <input className="form-control " 
                                  placeholder="What is your Espn SWID?" 
                                  value={newEspn_Swid} name="Espn_Swid" 
                                  onChange={handleEspn_SwidInput}>
                        </input>
                    </div>
  
                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>
  
            {leagues.map((league, id) =>  (
            <div key={id}>
            <Link to={`/${league.Espn_League_Id}`}>
              <div className='LeagueCard'>
                    <div >
                          <h1>{league.host}</h1>
                          {/* <h4>{league.bigdata['Jordan Freundlich']['2010']}</h4> */}
                    </div>
              </div>
            </Link>
            </div>
            )
        )}
      </div>
  );
}
