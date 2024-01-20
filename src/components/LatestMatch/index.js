// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedMatchDetails

  return (
    <div className="latest-match-title-details">
      <p className="latest-match-title">Latest Matches</p>
      <ul className="latest-match-details">
        <li className="logo-team-match-details">
          <div>
            <p className="competing-team">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="match-info">{venue}</p>
            <p className="match-info">{result}</p>
          </div>
          <img
            className="competing-team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </li>
        <li className="additional-match-info-container">
          <p className="additional-match-info-heading">First Innings</p>
          <p className="match-info">{firstInnings}</p>
          <p className="additional-match-info-heading">Second Innings</p>
          <p className="match-info">{secondInnings}</p>
          <p className="additional-match-info-heading">Man Of The Match</p>
          <p className="match-info">{manOfTheMatch}</p>
          <p className="additional-match-info-heading">Umpires</p>
          <p className="match-info">{umpires}</p>
        </li>
      </ul>
    </div>
  )
}

export default LatestMatch
