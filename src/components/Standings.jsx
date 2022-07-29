import { useEffect, useState } from "react";
import "./Standings.css"

export default function Standings({standings}){
    const[yearstandings, setYearStandings] = useState()
    const[lastyearstandings, setLastYearStandings] = useState([])

    let standingsArr = []
    let thisyear = []
    let lastyear = []

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
        
    }, [])


    return(
        <>
        <h1>Standings</h1>
        <div className="yearrow">{standingsArr.map((year, id)=>(
            <h1 className="year" onClick={getyear}>{year.year}</h1>
        ))}</div>
        {yearstandings ? (
        <>
        <table>
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
      </table> </>):( 
      <>
        <table>
            <thead>
            <tr>
            <th>Owner</th>
            <th>Wins</th>
            <th>Losses</th>
            </tr>
            </thead>
        <tbody>
        {lastyearsorted.map((owner, id) =>(
             <tr>
             <td>{owner.name}</td>
             <td>{owner.wins}</td>
             <td>{owner.losses}</td>
           </tr>
        ))}
        </tbody>
      </table> </>)}
            </>
    )
}