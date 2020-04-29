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
            Creez un compte discord
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Rejoignez le serveur discord
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Présentez vous 
          </Col>
        </Row>
        </body>
     );
  }
}

export default Forum;