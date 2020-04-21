import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Checkbox, Row, Col } from "antd"

class Tournois extends Component {
  render() {
     return (
      <body>
        <Row>
          <Col flex="100px"></Col>
          <Col flex="auto">
          <div>
            <h1>Tournoi</h1>
                <p><Link to="/createTournament"> CLiquez ici pour créer votre tournoi.</Link></p>
                <div>
                  <p>Choisissez les jeux pour lesquels vous voulez voir les tournois.</p>
                  <Checkbox type="checkbox" name="tournoi" value="SC2" /> Starcraf 2
                  <Checkbox type="checkbox" name="tournoi" value="RL" /> Rocket League
                  <Checkbox type="checkbox" name="tournoi" value="CSGO" /> Counter-Strike Global Offensive
                  <Checkbox type="checkbox" name="tournoi" value="LOL" /> League of Legends
                  <Checkbox type="checkbox" name="tournoi" value="Valorant" /> Valorant
                </div><br />
              <p>Liste des tournois</p>
          </div>
          </Col>
        </Row>
      </body>
     );
  }
}

export default Tournois;