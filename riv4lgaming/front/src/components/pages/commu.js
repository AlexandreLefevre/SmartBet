import React,  {Component} from 'react';
import { Row, Col, Typography  } from 'antd'

const style = {padding: '8px 30px'};
const { Title } = Typography;

class Forum extends Component {
  render() {
     return (
      <body>
         <Row>
          <Col flex="100px"></Col>
          <Title level={1} >Communauté</Title>
        <Col flex="auto">
        <Title level={2} >1) Créez un compte discord</Title>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <a href="https://discord.gg/uY9gTF">
              < img src="https://github.com/GillesTimothy/timot/blob/master/discord-1200x630.png?raw=true" alt="sc2" style={{width:"130%", height:"130%"}}></img>
          </a>
        </div>
        </Col>
      </Col>
      </Row>
      </body>
     );
  }
}

export default Forum;