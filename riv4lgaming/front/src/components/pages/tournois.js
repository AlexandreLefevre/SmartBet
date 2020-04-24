import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Checkbox, Row, Col } from "antd"



class Tournois extends Component {
  updatJeu = (e) => {
    console.log(e.target.value);
    this.setState({jeu: e.target.value});
  }

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
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="SC2" /> Starcraf 2
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="RL" /> Rocket League
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="CSGO" /> Counter-Strike Global Offensive
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="LOL" /> League of Legends
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="Valorant" /> Valorant
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