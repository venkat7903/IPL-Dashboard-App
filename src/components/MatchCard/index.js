// Write your code here
import './index.css'

function getUpdateData(details) {
  const updatedData = {
    umpires: details.umpires,
    result: details.result,
    manOfTheMatch: details.man_of_the_match,
    id: details.id,
    date: details.date,
    venue: details.venue,
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    firstInnings: details.first_innings,
    secondInnings: details.second_innings,
    matchStatus: details.match_status,
  }
  return updatedData
}

const MatchCard = props => {
  const {recentMatchesDetails} = props
  const updatedRecentMatches = getUpdateData(recentMatchesDetails)
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = updatedRecentMatches
  return (
    <div className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-info">{result}</p>
      <p className={`match-card-info ${matchStatus.toLowerCase()}`}>
        {matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
