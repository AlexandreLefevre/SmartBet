import React,  {Component} from 'react';
import { Row, Col, Typography  } from 'antd'

const style = {padding: '8px 30px'};
const { Title } = Typography;

class Forum extends Component {
  render() {
     return (
      <body>
      <div style={{textAlign: "center"}}>
         <Title level={1} >Communauté</Title>
         </div>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Title level={3} >Créez un compte discord</Title>
          <a href="https://discordapp.com/">
              < img src="data:image/png;base64,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" alt="sc2" style={{width:"80%", height:"80%"}}></img>
          </a>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Title level={3} >Rejoignez le serveur discord</Title>
          <a href="https://discord.gg/uY9gTF">
              < img src="https://github.com/GillesTimothy/timot/blob/master/discord-1200x630.png?raw=true" alt="sc2" style={{width:"80%", height:"80%"}}></img>
          </a>
        </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Title level={3} >Présentez vous </Title>
          <br></br>
          <p>Présentez vous sur le discord afin qu'un modérateur <br></br> vous donne les permissions d'accéder à tous les différents channel de discussions</p>
          </Col>
        </Row>
        </body>

     );
  }
}

export default Forum;