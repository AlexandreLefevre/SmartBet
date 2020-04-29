import React,  {Component} from 'react';
import { Row, Col, Typography  } from 'antd'

const style = {padding: '8px 30px'};

class Forum extends Component {
  render() {
     return (
      <body>
        <div style={{textAlign: "center"}}>
        <h1>Communauté</h1>
          <p>Comment ça marche et comment nous rejoindre ? </p>
          </div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <a href="https://discord.gg/uY9gTF">
              < img src="https://github.com/GillesTimothy/timot/blob/master/discord-1200x630.png?raw=true" alt="sc2" style={{width:"130%", height:"130%"}}></img>
          </a>
        </div>
      </Col>
      </Row>
      </body>
     );
  }
}

export default Forum;