
export default function LegacyPoints({leagueData}){
    console.log(leagueData)

    const LegacyPoints = []

    for (const key in leagueData) {
            const obj = {
                owner: key,
                legacypoints: leagueData[key].legacypoints.toFixed(2)
            }
            console.log(`${key}: ${leagueData[key].legacypoints}`);
            LegacyPoints.push(obj)
    }

    const sortedLegacyPoints = LegacyPoints.sort(({legacypoints:a}, {legacypoints:b}) =>b-a)



    return(
        <div className="LegacyPoints">
        <table>
            <thead>
            <tr>
                <th>Owner</th>
                <th>Legacy Points</th>
            </tr>
            </thead>
        
        <tbody>
        {sortedLegacyPoints.map((owner,id) =>(
            <tr>
                <td>
                    {owner.owner}
                </td>
                <td>
                    {owner.legacypoints}
                </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
    )
}