import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Checkbox, Row, Col, Typography, Button,  Popover } from "antd"
import { List, Avatar, Space } from 'antd';
import { UserAddOutlined, UserOutlined, UserDeleteOutlined } from '@ant-design/icons';
import axios from 'axios'
import { connect } from "react-redux"

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

class Tournois extends Component {

  state = {
    tournaments: [],
  }
  async  componentDidMount() {
    try {

        const response = await axios({
          method: 'get',
          url: 'http://35.180.238.11:4000/getAllTournaments',
        })
        this.setState({tournaments: response.data.tournaments})
      } catch (e) {
          console.log(e);
      }
    }

    async joinTournament (tournoi) {
      const response = await axios({
            method: 'put',
            url: `http://35.180.238.11:4000/joinTournament?user=${this.props.user._id}&tournoi=${tournoi._id}`,
          })
      console.log('response ==>',response);

    }
    async leaveTournament (tournoi) {
      const response = await axios({
            method: 'put',
            url: `http://35.180.238.11:4000/leaveTournament?user=${this.props.user._id}&tournoi=${tournoi._id}`,
          })
      console.log('response ==>',response);

    }



  updatJeu = (e) => {
    console.log(e.target.value);
    this.setState({jeu: e.target.value});
  }

  render() {
    const { tournaments } = this.state
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
      <div>
      <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={tournaments}
      renderItem={item => (
        <List.Item
        key={item.title}
        actions={[

          <Popover title="Pour voir le bracket il faut que tous les joueurs soient inscris">
 <Link disabled={!(item.participants.length === item.nbr_participants_max)} to={`/tournois/${item._id}`}>Voir le tournois </Link>,
 </Popover>,
            <Button onClick={()=> {this.joinTournament(item)}} icon={<UserAddOutlined/>}>Rejoindre le tournois</Button>,
            <Button onClick={()=> {this.leaveTournament(item)}} icon={<UserDeleteOutlined/>}>Quitter le tournois</Button>,
            <IconText icon={UserOutlined} text={`${item && item.participants ? item.participants.length :  0} nbr participant`} key="list-vertical-star-o" />,

        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src= {item.image}
          />
        }
        >
        <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
        title={<a href={item.href}>{item.name}</a>}
        description={'jeu : ' + item.jeu + '   |  ' + 'division : ' + item.divisions + '   |  ' + item.description + '  |  Nombre de particpant max  :  ' + item.nbr_participants_max} 
        />
        {item.content}
        </List.Item>
      )}
      />,
      </div>
      </Col>
      </Row>
      </body>
    );
  }
}

export default connect(mapStateToProps)(Tournois);
