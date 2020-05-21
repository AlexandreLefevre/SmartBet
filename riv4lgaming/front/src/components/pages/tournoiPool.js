import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Checkbox, Row, Col, Typography, Button } from "antd"
import { List, Avatar, Space } from 'antd';
import { UserAddOutlined, UserOutlined, UserDeleteOutlined } from '@ant-design/icons';
import axios from 'axios'
import { connect } from "react-redux"
import { Bracket, BracketGenerator } from 'react-tournament-bracket';
import { ReactTournament } from 'react-tournament';
const { Title } = Typography;

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


const IconText = ({ icon, text }) => (
  <Space>
  {React.createElement(icon)}
  {text}
  </Space>
);
const data = [
  // 1st round
  [
    // 1st pair
    [
      // 1st person
      {
        user: 'yankouskia',
        userLink: 'https://github.com/yankouskia',
        score: 87,
        scoreLink: 'https://github.com/yankouskia/react-tournament',
        isWinner: true,
      },
      // 2nd person
      {
        user: 'Alex',
        userLink: 'https://github.com/yankouskia',
        score: 32,
        scoreLink: 'https://github.com/yankouskia/react-tournament',
      }
    ],
    // 2nd pair
    [
      // 3rd person
      {
        user: 'yankouskia',
        userLink: 'https://github.com/yankouskia',
        score: 56,
        scoreLink: 'https://github.com/yankouskia/react-tournament',
        isWinner: true,
      },
      // 4th person
      {
        user: 'Alex',
        userLink: 'https://github.com/yankouskia',
        score: 54,
        scoreLink: 'https://github.com/yankouskia/react-tournament',
      }
    ]
  ],
  // 2nd round
  [
    // 1st pair
    [
      // 1st person
      {
        user: 'yankouskia',
        userLink: 'https://github.com/yankouskia',
        score: 34,
        scoreLink: 'https://github.com/yankouskia/react-tournament',
      },
      // 2nd person
      {
        user: 'Alex',
        userLink: 'https://github.com/yankouskia',
        score: 98,
        scoreLink: 'https://github.com/yankouskia/react-tournament',
      }
    ]
  ],
];

const generateGames = (players) => {
  /* 1v1 */
  const nbrPlayer = players.length
  const nbrOfRound = Math.log2(nbrPlayer)
  let demiByRound = nbrPlayer / 2
  const data = []
  let y = 0
  for (let t = 0; t < nbrOfRound; t++) {
    if (t === 0) {

    for (let i = 0; i < players.length - 1; i += 2) {
      if (i === 0) {
          const tmpRound = [[{
            user: players[i].pseudo,
            userLink: '',
            score: NaN,
            scoreLink: ''},
          { user: players[i +1].pseudo,
          userLink: '',
          score: NaN,
          scoreLink: ''}]]
        data.push(tmpRound)
      } else {
        data[0].push([{
          user: players[i].pseudo,
          userLink: '',
          score: NaN,
          scoreLink: '',
        },
        {
          user: players[i + 1].pseudo,
          userLink: '',
          score: NaN,
          scoreLink: '',
        }
      ])
      }
    }
  } else {
    for (let p = 0; p < demiByRound; p += 1) {

      if (p === 0) {
        const tmpRound = [[{
          user: 'No player yet',
          userLink: '',
          score: NaN,
          scoreLink: '',
        },
        {
          user: 'No player yet',
          userLink: '',
          score: NaN,
          scoreLink: '',
        },]]
      data.push(tmpRound)
    } else {
      data[y].push([
        {
          user: 'No player yet',
          userLink: '',
          score: NaN,
          scoreLink: '',
        },
        {
          user: 'No player yet',
          userLink: '',
          score: NaN,
          scoreLink: '',
        }
    ])
    }
  }
}
demiByRound = demiByRound / 2
y++
  }

  return data
}

class TournoiPool extends Component {

  state = {
    tournament: {},
  }
  async  componentDidMount() {
    try {
      const { match: { params } } = this.props;
      console.log(params);
        const response = await axios({
          method: 'get',
          url: `http://localhost:4000/getTournament?tournoi=${params.id}`,
        })
        console.log('Res =>',response.data);

        this.setState({tournament: response.data.tournament})
      } catch (e) {
          console.log(e);
      }
    }




  updatJeu = (e) => {
    console.log(e.target.value);
    this.setState({jeu: e.target.value});
  }

  render() {
    const { tournament } = this.state
    return (
      <body>
        <Row>
          <Col flex="100px"></Col>
          <Col flex="auto">
            <div>
            <Title level={1}>{tournament.name}</Title>
              <Title level={2}>{tournament.description}</Title>
              {tournament && tournament.participants && (
              <ReactTournament
               aspectRatio={5}
                data={generateGames(tournament.participants)}
                width={'auto'}
              />
            )}
            </div>
        </Col>
        </Row>
      </body>
    );
  }
}

export default connect(mapStateToProps)(TournoiPool);
