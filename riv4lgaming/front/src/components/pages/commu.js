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
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Title level={3} >Rejoignez le serveur discord</Title>
          <a href="https://discord.gg/uY9gTF">
              < img src="https://github.com/GillesTimothy/timot/blob/master/discord-1200x630.png?raw=true" alt="sc2" style={{width:"80%", height:"80%"}}></img>
          </a>
        </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Title level={3} >Présentez vous </Title>
          </Col>
        </Row>
        </body>

     );
  }
}

export default Forum;