
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';




export default function App() {

  const base_url = "http://localhost:8000"

  const [leagues, setLeagues] = useState([])

  function componentDidMount(){
    console.log("it mounted")
    let data;
    axios.get(`${base_url}/wel/`)
        .then(res => {
            data = res.data;
            setLeagues(data)
        })
        .catch(err => {})
  }

  useEffect(()=>{
    componentDidMount()
  },[])

  return (
    <div>
            {leagues.map((league, id) =>  (
            <div key={id}>
            <div >
                  <div >
                        <h1>{league.code} </h1>
                        <footer >--- by
                        </footer>
                  </div>
            </div>
            </div>
            )
        )}
      </div>
  );
}