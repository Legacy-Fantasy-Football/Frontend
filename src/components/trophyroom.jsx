import { useEffect, useState } from "react";

export default function TrophyRoom({ leagueData}) {
  console.log(leagueData);
  const [owners, setOwners] = useState([])

  const OwnersArr = [];

  let sortedOwners = []

  for (const key in leagueData) {
    const obj = {
      owner: key,
      years: leagueData[key].yearsPlayed,
      playoffs: leagueData[key].madePlayoffs,
      finals: leagueData[key].finals,
      champ: leagueData[key].champ,
    };
    OwnersArr.push(obj);
  }

  sortedOwners = OwnersArr.sort(
    ({ years: a }, { years: b }) => b - a
  );
  
  function sortByYear(){
    console.log("i was clicked")
    sortedOwners = OwnersArr.sort(
      ({ years: a }, { years: b }) => b - a
    );
    setOwners(sortedOwners)
  }
  function sortByPlayoffs(){
    console.log("i was clicked")
    sortedOwners = OwnersArr.sort(
      ({ playoffs: a }, { playoffs: b }) => b - a
    );
    setOwners(sortedOwners)
  }
  function sortByFinals(){
    console.log("i was clicked")
    sortedOwners = OwnersArr.sort(
      ({ finals: a }, { finals: b }) => b - a
    );
    setOwners(sortedOwners)
  }
  function sortByChamps(){
    console.log("i was clicked")
    sortedOwners = OwnersArr.sort(
      ({ champ: a }, { champ: b }) => b - a
    );
    setOwners(sortedOwners)
  }

  useEffect(()=>{
    setOwners(sortedOwners)
  },[])

  return (
    <>
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Owner</th>
          <th onClick={sortByYear}>Years</th>
          <th onClick={sortByPlayoffs}>Playoffs</th>
          <th onClick={sortByFinals}>Finals</th>
          <th onClick={sortByChamps}>Champs</th>
        </tr>
        </thead>
        <tbody>
          
          {owners[0]? (
            owners.map((owner, id) => (
              <tr>
                <td>{owner.owner}</td>
                <td>{owner.years}</td>
                <td>{owner.playoffs}</td>
                <td>{owner.finals}</td>
                <td>{owner.champ}</td>
              </tr>
            ))):
            sortedOwners.map((owner, id) => (
              <tr>
                <td>{owner.owner}</td>
                <td>{owner.years}</td>
                <td>{owner.playoffs}</td>
                <td>{owner.finals}</td>
                <td>{owner.champ}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
