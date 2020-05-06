import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Checkbox, Row, Col, Typography } from "antd"

const { Title } = Typography;

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
            <Title level={1} >Tournoi</Title>
              <p> <Link to="/createTournament"> CLiquez ici pour créer votre tournoi.</Link></p>
                <div>
                  <p>Choisissez les jeux pour lesquels vous voulez voir les tournois.</p>
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="SC2" /> Starcraf 2
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="RL" /> Rocket League
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="CSGO" /> Counter-Strike Global Offensive
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="LOL" /> League of Legends
                  <Checkbox type="checkbox" onChange={this.updatJeu} value="Valorant" /> Valorant
                </div><br />
                <div>
                  <Title level={2} >Liste des tournois </Title>
                </div>
          </div>
          </Col>
        </Row>
      </body>
     );
  }
}

export default Tournois;