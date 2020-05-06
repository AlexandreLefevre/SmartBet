import React,  {Component} from 'react'
import {Link} from 'react-router-dom'
import { Row } from "antd"
import { Collapse } from 'antd';
import { Col } from "antd"
import { Descriptions, Badge } from 'antd';

const { Panel } = Collapse;
const text = ' Descriptif du tournois ....';

class Histo extends Component {

  render() {
     return (
      <body>
        <Row>
          <Col flex="100px"></Col>
          <Col flex="auto">
          <div>
          <p>Historique de vos participation aux tournois en fonction des jeux.</p>
          </div>
          </Col>
          </Row>
        <Row>
          
        <Collapse accordion>
    <Panel header="Starcraf 2" key="1">
      <p>{text}</p>
          <Descriptions title="Info Tournois" bordered>
              <Descriptions.Item label="Organisateur"> Nom Organisateur</Descriptions.Item>
              <Descriptions.Item label="Gagnant">Nom Gagnant</Descriptions.Item>
              <Descriptions.Item label="Nbr particiapnt">nbr</Descriptions.Item>
              <Descriptions.Item label="Date début">2018-04-24 18:00:00</Descriptions.Item>
              <Descriptions.Item label="Date fin" span={2}>
                2019-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={2}>
                <Badge status="processing" text="Running" />
              </Descriptions.Item>
              <Descriptions.Item label="Place">1er</Descriptions.Item>
          </Descriptions>
    </Panel>
    <Panel header="Rocket League" key="2">
      <p>{text}</p>
      <Descriptions title="Info Tournois" bordered>
              <Descriptions.Item label="Organisateur"> Nom Organisateur</Descriptions.Item>
              <Descriptions.Item label="Gagnant">Nom Gagnant</Descriptions.Item>
              <Descriptions.Item label="Nbr particiapnt">nbr</Descriptions.Item>
              <Descriptions.Item label="Date début">2018-04-24 18:00:00</Descriptions.Item>
              <Descriptions.Item label="Date fin" span={2}>
                2019-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={2}>
                <Badge status="processing" text="Running" />
              </Descriptions.Item>
              <Descriptions.Item label="Place">1er</Descriptions.Item>
          </Descriptions>
    </Panel>
    <Panel header="Counter-Strike Global Offensive" key="3">
      <p>{text}</p>
      <Descriptions title="Info Tournois" bordered>
              <Descriptions.Item label="Organisateur"> Nom Organisateur</Descriptions.Item>
              <Descriptions.Item label="Gagnant">Nom Gagnant</Descriptions.Item>
              <Descriptions.Item label="Nbr particiapnt">nbr</Descriptions.Item>
              <Descriptions.Item label="Date début">2018-04-24 18:00:00</Descriptions.Item>
              <Descriptions.Item label="Date fin" span={2}>
                2019-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={2}>
                <Badge status="processing" text="Running" />
              </Descriptions.Item>
              <Descriptions.Item label="Place">1er</Descriptions.Item>
          </Descriptions>
    </Panel>
    <Panel header="League of Legends" key="4">
      <p>{text}</p>
      <Descriptions title="Info Tournois" bordered>
              <Descriptions.Item label="Organisateur"> Nom Organisateur</Descriptions.Item>
              <Descriptions.Item label="Gagnant">Nom Gagnant</Descriptions.Item>
              <Descriptions.Item label="Nbr particiapnt">nbr</Descriptions.Item>
              <Descriptions.Item label="Date début">2018-04-24 18:00:00</Descriptions.Item>
              <Descriptions.Item label="Date fin" span={2}>
                2019-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={2}>
                <Badge status="processing" text="Running" />
              </Descriptions.Item>
              <Descriptions.Item label="Place">1er</Descriptions.Item>
          </Descriptions>
    </Panel>
    <Panel header="Valorant" key="5">
      <p>{text}</p>
      <Descriptions title="Info Tournois" bordered>
              <Descriptions.Item label="Organisateur"> Nom Organisateur</Descriptions.Item>
              <Descriptions.Item label="Gagnant">Nom Gagnant</Descriptions.Item>
              <Descriptions.Item label="Nbr particiapnt">nbr</Descriptions.Item>
              <Descriptions.Item label="Date début">2018-04-24 18:00:00</Descriptions.Item>
              <Descriptions.Item label="Date fin" span={2}>
                2019-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={2}>
                <Badge status="processing" text="Running" />
              </Descriptions.Item>
              <Descriptions.Item label="Place">1er</Descriptions.Item>
          </Descriptions>
    </Panel>
  </Collapse>,  
          
        </Row>
      </body>
      
    );
  }
}



export default Histo;