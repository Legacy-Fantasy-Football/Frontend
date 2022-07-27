
export default function LegacyPoints({leagueData}){
    console.log(leagueData)

    const LegacyPoints = []

    for (const key in leagueData) {
            const obj = {
                owner: key,
                legacypoints: leagueData[key].legacypoints
            }
            console.log(`${key}: ${leagueData[key].legacypoints}`);
            LegacyPoints.push(obj)
    }

    const sortedLegacyPoints = LegacyPoints.sort(({legacypoints:a}, {legacypoints:b}) =>b-a)



    return(
        <>
        <h1>Legacy Points</h1>
        {sortedLegacyPoints.map((owner,id) =>(
            <div>{owner.owner}: {owner.legacypoints}</div>
        ))}
        </>
    )
}