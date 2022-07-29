import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./CreateLeague.css"
import Spinner from 'react-bootstrap/Spinner';

export default function CreateLeague({displaySpinner, handleSubmit, handleHostInput, newHost, startYear, handleStartYearInput, newLeagueId,handleLeagueIdInput,newEspn_S2,handleEspn_S2Input,newEspn_Swid,handleEspn_SwidInput }) {
  return (
    <div className='center'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="leagueName">
        <Form.Label>League Name</Form.Label>
        <Form.Control type="text" placeholder="" value={newHost}
        onChange={handleHostInput} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="LeagueID">
        <Form.Label>Year League Started</Form.Label>
        <Form.Control type="number" placeholder="" value={startYear}
        onChange={handleStartYearInput} required  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="LeagueID">
        <Form.Label>Espn League ID</Form.Label>
        <Form.Control type="number" placeholder="" value={newLeagueId}
        onChange={handleLeagueIdInput} required  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="LeagueID">
        <Form.Label>Espn_s2</Form.Label>
        <Form.Control type="textarea" placeholder="" value={newEspn_S2}
        onChange={handleEspn_S2Input} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="LeagueID">
        <Form.Label>SWID</Form.Label>
        <Form.Control type="text" placeholder="" value={newEspn_Swid}
        onChange={handleEspn_SwidInput} required />
      </Form.Group>
      {displaySpinner === "false" ? (
        <Button variant="primary" type="submit">
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
  );
}

