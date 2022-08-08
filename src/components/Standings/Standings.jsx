import { useEffect, useState } from "react";
import "./Standings.css"

export default function Standings({standings}){
    const[yearstandings, setYearStandings] = useState([])
    const[lastyearstandings, setLastYearStandings] = useState([])
    const [isActive, setIsActive] = useState(false);

    let standingsArr = []
    let thisyear = []
    let lastyear = []

    const um =  standings[2021]

    for(const key in standings){
        const obj = {
            year: key,
            standings: []
        }
        standingsArr.push(obj)
        standings[key].forEach(year => {
            const objtwo = {
                name: year.owner,
                wins: year.wins,
                losses: year.losses
            }
            for(const standing of standingsArr){
                if (standing.year === key){
                    standing.standings.push(objtwo)
                }
            }
        });
    }

    let lastyearsorted

        for(const standing of standingsArr){
            if (standing.year === 2021){
                for (const owner of standing.standings){
                    lastyear.push(owner)
                }
            }
        }
        lastyearsorted = lastyear.sort(
            ({ wins: a }, { wins: b }) => b - a
        )
        

        console.log(lastyearsorted)
        
    function getyear(e){
        console.log(e.target.id);
       let year = e.target.innerHTML
       console.log(year)
        // thisyear = []
        thisyear = []
        for(const standing of standingsArr){
            if (standing.year === year){
                for (const owner of standing.standings){
                    thisyear.push(owner)
                }
            }
        }
        let sortedthisyear = thisyear.sort(
            ({ wins: a }, { wins: b }) => b - a
        )
        setYearStandings(sortedthisyear)
    }

    
    console.log(standingsArr)

    useEffect(() =>{
        setYearStandings(lastyearsorted)
    }, [])


    return(
        <>
        <div className="yearrow">{standingsArr.map((year, id)=>(
            <h3 style={{
                color: isActive === id ? "red" : ""
              }} className="year" onClick={getyear}>{year.year}</h3>
        ))}</div>
        {yearstandings ? (
        <div className="standingsTable">
        <table className="table table-striped">
            <thead>
            <tr>
            <th>Owner</th>
            <th>Wins</th>
            <th>Losses</th>
            </tr>
            </thead>
        <tbody>
        {yearstandings.map((owner, id) =>(
             <tr>
             <td>{owner.name}</td>
             <td>{owner.wins}</td>
             <td>{owner.losses}</td>
           </tr>
        ))}
        </tbody>
      </table> </div>):( 
      <div className="standingsTable">
        <table className="table table-striped">
            <thead>
            <tr>
            <th>Owner</th>
            <th>Wins</th>
            <th>Losses</th>
            </tr>
            </thead>
        <tbody>
        {yearstandings.map((owner, id) =>(
             <tr>
             <td>{owner.name}</td>
             <td>{owner.wins}</td>
             <td>{owner.losses}</td>
           </tr>
        ))}
        </tbody>
      </table> </div>)}
            </>
    )
}