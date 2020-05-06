import React,  {Component} from 'react';
import { Radio, Select, Button, Input, Col, Row, Form} from 'antd'

class DonneesJeux extends Component {
  render() {
     return (
      <Row>
        <Col flex="100px"></Col>
        <Col flex="auto">
          <Form handleSubmit={this.updateUserJeu}>
          <p>Jouez vous à Starcraft 2 ?</p>
            <Radio.Group //onChange={this.updatJeuSC2} value={this.state.jeuSC2}
            >
              <Radio value= {true}>Oui</Radio>
              <Radio value= {false}>Non</Radio>
            </Radio.Group>
          <p>Choisissez votre division sur le jeu.</p>
            <Radio.Group >
              <Radio value="Bronze" > Bronze </Radio>
              <Radio value="Argent" > Argent </Radio>
              <Radio value="Gold" > Or </Radio>
              <Radio value="Platine" > Platine </Radio>
              <Radio value="Diamand" > Diamand </Radio>
              <Radio value="Master" > Maître </Radio>
              <Radio value="GM" > Grand maître </Radio>
            </Radio.Group>
          <p>Quelle est la race que vous jouez principalement sur le jeu ?</p>
            <Radio.Group >
              <Radio value="Terran" > Terran </Radio>
              <Radio value="Zerg" > Zerg </Radio>
              <Radio value="Protoss" > Protoss </Radio>
              <Radio value="Aleatoire" > Aléatoire </Radio>
            </Radio.Group>
          <p>Jouez vous à Rocket League ?</p>
            <Radio.Group //onChange={this.updatJeuRL} value={this.state.jeuRL}
            >
              <Radio value= {true}>Oui</Radio>
              <Radio value= {false}>Non</Radio>
            </Radio.Group>
          <p>Choisissez votre division sur le jeu.</p>
            <Radio.Group >
              <Radio value="Bronze"> Bronze </Radio>
              <Radio value="Argent"> Argent </Radio>
              <Radio value="Or"> Or </Radio>
              <Radio value="Platine"> Platine </Radio>
              <Radio value="Diamand"> Diamand </Radio>
              <Radio value="Champion"> Champion </Radio>
              <Radio value="GrandChamp"> Grand Champion </Radio>
            </Radio.Group>
          <p>Jouez vous à Counter-Strike Global Offensive ?</p>
            <Radio.Group //onChange={this.updatJeuCSGO} value={this.state.jeuCSGO}
            >
              <Radio value= {true}>Oui</Radio>
              <Radio value= {false}>Non</Radio>
            </Radio.Group>
          <p>Choisissez votre division sur le jeu.</p>
            <Radio.Group >
              <Radio value="Argent"> Argent </Radio>
              <Radio value="Nova"> Nova </Radio>
              <Radio value="AK"> AK </Radio>
              <Radio value="DoubleAK"> Double AK </Radio>
              <Radio value="MasterGuardian"> Master Guardian </Radio>
              <Radio value="Eagle"> Eagle </Radio>
              <Radio value="Supreme"> Suprême </Radio>
              <Radio value="Global"> Global </Radio>
            </Radio.Group>
          <p>Jouez vous à League of Legends ?</p>
            <Radio.Group //onChange={this.updatJeuLOL} value={this.state.jeuLOL}
            >
              <Radio value= {true}>Oui</Radio>
              <Radio value= {false}>Non</Radio>
            </Radio.Group>
          <p>Choisissez votre division sur le jeu.</p>
            <Radio.Group >
              <Radio value="Bronze"> Bronze </Radio>
              <Radio value="Argent"> Argent </Radio>
              <Radio value="Or"> Or </Radio>
              <Radio value="Platine"> Platine </Radio>
              <Radio value="Diamand"> Diamand </Radio>
              <Radio value="Master"> Maître </Radio>
              <Radio value="GrandMaster"> Grand maître </Radio>
              <Radio value="Challenger"> Challenger </Radio>
            </Radio.Group>
            <p>Quelle est le poste que vous jouez principalement sur le jeu ?</p>
            <Radio.Group >
              <Radio value="Support" > Support </Radio>
              <Radio value="ADC" > AD Carry </Radio>
              <Radio value="Mid" > Mid Lane </Radio>
              <Radio value="Jungle" > Jungle </Radio>
              <Radio value="Top" > Top Lane </Radio>
            </Radio.Group>
          <p>Jouez vous à Valorant ?</p>
            <Radio.Group //onChange={this.updatJeuVL} value={this.state.jeuVL}
            >
              <Radio value= {true}>Oui</Radio>
              <Radio value= {false}>Non</Radio>
            </Radio.Group>
          <p>Choisissez votre division sur le jeu.</p>
            <Radio.Group >
              <Radio value ="Bronze"> Bronze </Radio>
              <Radio value = "Argent"> Argent </Radio>
              <Radio value ="Or"> Or </Radio>
              <Radio value ="Platine"> Platine </Radio>
              <Radio value="Diamand" > Diamand </Radio>
              <Radio value="Maître"> Maître </Radio>
              <Radio value="Grand Maitre"> Grand maître </Radio>
            </Radio.Group><br /><br />
            <Button type="primary" htmlType="submit" onClick={this.updateUserJeu}>Modifier mes données.</Button>
          </Form>
        </Col>  
      </Row>
     );
  }
}

export default DonneesJeux;