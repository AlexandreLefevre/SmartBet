import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Checkbox, Row, Col, Typography } from "antd"
import { List, Avatar, Space } from 'antd';
import { UserAddOutlined, UserOutlined, UserDeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const listData = [];
for (let i = 0; i < 8; i++) {
  listData.push({
    title: `nom tournois ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'jeux, division(s) autorisée(s)',
    content:
      'description du tournois',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

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
                    dataSource={listData}
                    renderItem={item => (
                      <List.Item
                        key={item.title}
                        actions={[
                          <IconText icon={UserOutlined} text="nbr participant" key="list-vertical-star-o" />,
                          <IconText icon={UserAddOutlined} text="Rejoindre le tournois" key="list-vertical-like-o" />,
                          <IconText icon={UserDeleteOutlined} text="Quitter le tournois" key="list-vertical-message" />,
                        ]}
                        extra={
                          <img
                            width={272}
                            alt="logo"
                            src="https://img.lemde.fr/2018/05/22/0/218/1164/582/1440/0/60/0/7fbe49a_10861-9kwk39.j7dht.jpg"
                          />
                        }
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.avatar} />}
                          title={<a href={item.href}>{item.title}</a>} 
                          description={item.description}
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

export default Tournois;