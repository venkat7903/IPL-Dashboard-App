// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedDataList = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamsList: updatedDataList,
      isLoading: false,
    })
  }

  renderTeamCards = () => {
    const {teamsList} = this.state

    return (
      <div className="sub-ipl-app-container">
        <div className="ipl-logo-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-app-title">IPL Dashboard</h1>
        </div>
        <ul className="teams-list">
          {teamsList.map(each => (
            <TeamCard key={each.id} teamDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-app-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#fff" width={50} height={50} />
          </div>
        ) : (
          this.renderTeamCards()
        )}
        <p className="designer-name">Design By</p>
        <p className="designer-name">Venkat</p>
      </div>
    )
  }
}

export default Home
