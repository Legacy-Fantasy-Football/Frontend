import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddYear.css"
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';



export default function AddYear({base_url}) {

  const { user, logoutUser } = useContext(AuthContext);
  const [inputYear, setInputYear] = useState("")
  const Navigate = useNavigate()
  const [displaySpinner, setDisplaySpinner] = useState("false")


  let { Espn_League_Id } = useParams();
  const id = Espn_League_Id

  function handleInputYear(e){
    setInputYear(e.target.value)
  }

  function addYearFunc(e){
    e.preventDefault()
    setDisplaySpinner("true")
      axios.get(`${base_url}/newwel/${id}/`)
      .then(res1 => {
          let data = res1.data;
            console.log(data.bigdata)
            axios.put(`${base_url}/newwel/${id}/`, {
              user: user.user_id,
              host: data.host,
              year: inputYear,
              year_started: data.year_started,
              Espn_League_Id: data.Espn_League_Id,
              Espn_S2: data.Espn_S2,
              Espn_Swid: data.Espn_Swid,
              owners: data.owners,
              standings: data.standings,
              bigdata: data.bigdata
            })
            .then(res2 => {
              setDisplaySpinner("false")
            })
            .catch(err => {})
          })
      .catch(err =>{})
  }
  

  return (
    <>
    {/* <Button className="back-btn" onClick={goBackFunc}>Back</Button> */}
    <div className='create-league-center create-league-box'>
      <Form onSubmit={addYearFunc}>
        <Form.Group className="mb-3" controlId="LeagueID">
        <Form.Label>Add Year To League</Form.Label>
        <Form.Control className="input" type="number" placeholder="" value={inputYear}
        onChange={handleInputYear} required/>
        </Form.Group>
      {displaySpinner === "false" ? (
        <Button className='btn' variant="primary" type="submit">
          Submit
        </Button>) :
        (
          <>
          <Spinner animation="border" role="status">
          </Spinner>
            <h4 className="">Please wait while we set up your league. This may take a few minutes</h4>
          </>
        )
    }
    </Form>
  </div>
  </>
  );
}

