import { useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function EditLeaguePage(base_url){

    let { Espn_League_Id } = useParams();
    const id = Espn_League_Id

    const [newHost, setNewHost] = useState("")
    const [newLeagueId, setNewLeagueId] = useState("")
    const [newEspn_S2, setNewEspn_S2] = useState("")
    const [newEspn_Swid, setNewEspn_Swid] = useState("")

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
        axios.put(`${base_url}/wel/${id}/edit`, {
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
    

    return(
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
        </div>
    )
}