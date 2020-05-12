import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Checkbox, Row, Col, Typography } from "antd"
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Title } = Typography;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
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
          </Col>
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
                          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                          <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
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
        </Row>
      </body>
     );
  }
}

export default Tournois;