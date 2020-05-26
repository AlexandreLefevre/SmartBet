import React,  {Component} from 'react'
import { Radio, Select, Button, Input, Col, Row, Form, Card, Spin } from 'antd'
import axios from "axios"
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class DonneesJeux extends Component {
  state = {
    joueurVL: this.props.user.joueurVL || false,
    joueurSC2: this.props.user.joueurSC2 || false,
    joueurLOL: this.props.user.joueurLOL || false,
    joueurCSGO: this.props.user.joueurCSGO || false,
    joueurRL: this.props.user.joueurRL || false,
    divisionSC2: this.props.user.divisionSC2 ||"",
    raceSC2: this.props.user.raceSC2 ||"",
    divisionLOL: this.props.user.divisionLOL ||"",
    roleLOL: this.props.user.roleLOL ||"",
    divisionVL: this.props.user.divisionVL ||"",
    divisionCSGO: this.props.user.divisionCSGO ||"",
    divisionRL: this.props.user.divisionRL ||"",  
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.user !== nextProps.user){
      this.setState({joueurVL: this.props.user.joueurVL || false,
        joueurSC2: nextProps.user.joueurSC2 || false,
        joueurLOL: nextProps.user.joueurLOL || false,
        joueurCSGO: nextProps.user.joueurCSGO || false,
        joueurRL: nextProps.user.joueurRL || false,
        divisionSC2: nextProps.user.divisionSC2 ||"",
        raceSC2: nextProps.user.raceSC2 ||"",
        divisionLOL: nextProps.user.divisionLOL ||"",
        roleLOL: nextProps.user.roleLOL ||"",
        divisionVL: nextProps.user.divisionVL ||"",
        divisionCSGO: nextProps.user.divisionCSGO ||"",
        divisionRL: nextProps.user.divisionRL ||"",})
    }
    return true
  }

  updatJoueurSC2 = (e) => {
    //console.log(e.target.value);
    this.setState({joueurSC2: e.target.value });
  }

  updatJoueurLOL = (e) => {
    //console.log(e.target.value);
    this.setState({joueurLOL: e.target.value});
  }

  updatJoueurCSGO = (e) => {
    //console.log(e.target.value);
    this.setState({joueurCSGO: e.target.value});
  }

  updatJoueurRL = (e) => {
    //console.log(e.target.value);
    this.setState({joueurRL: e.target.value});
  }

  updatJoueurVL = (e) => {
    //console.log(e.target.value);
    this.setState({joueurVL: e.target.value});
  }

  updatDivisionSC2 = (e) => {
    //console.log(e.target.value);
    this.setState({divisionSC2: e.target.value});
  }

  updatDivisionLOL = (e) => {
    //console.log(e.target.value);
    this.setState({divisionLOL: e.target.value});
  }

  updatDivisionCSGO = (e) => {
    //console.log(e.target.value);
    this.setState({divisionCSGO: e.target.value});
  }

  updatDivisionVL = (e) => {
    //console.log(e.target.value);
    this.setState({divisionVL: e.target.value});
  }

  updatDivisionRL = (e) => {
    //console.log(e.target.value);
    this.setState({divisionRL: e.target.value});
  }

  updatRaceSC2 = (e) => {
    //console.log(e.target.value);
    this.setState({raceSC2: e.target.value});
  }

  updatRoleLOL = (e) => {
    //console.log(e.target.value);
    this.setState({roleLOL: e.target.value});
  }

  updateUserJeu = (e) => {
    e.preventDefault()
    console.log("user update");
    axios({
      method: 'put',
      url: 'http://35.180.238.11:4000/donneesj',
      data: {
        email: this.props.user.email,
        joueurSC2: this.state.joueurSC2,
        divisionSC2: this.state.divisionSC2,
        raceSC2: this.state.raceSC2,
        joueurLOL: this.state.joueurLOL,
        divisionLOL: this.state.divisionLOL,
        roleLOL: this.state.roleLOL,
        joueurVL: this.state.joueurVL,
        divisionVL: this.state.divisionVL,
        joueurCSGO: this.state.joueurCSGO,
        divisionCSGO: this.state.divisionCSGO,
        joueurRL: this.state.joueurRL,
        divisionRL: this.state.divisionRL, 
      }
    })
  .then((response) => {
    console.log(response)
    this.setState({error: ""})
  })
  .catch(r => {
    if (r.response){
        this.setState({
        error: r.response.data
        })
      }
    })
  }

  render() {
    if(!this.props.user){
      return (<Spin />)
    }
    else {
     return (
      <Form handleSubmit={this.updateUserJeu} initialValues={{ 
        joueurVL: this.state.joueurVL,
        divisionVL: this.state.divisionVL,
        joueurRL: this.state.joueurRL,
        divisionRL: this.state.divisionRL,
        joueurCSGO: this.state.joueurCSGO,
        divisionCSGO: this.state.divisionCSGO,
        joueurLOL: this.state.joueurLOL,
        divisionLOL: this.state.divisionLOL,
        roleLOL: this.state.roleLOL,
        joueurSC2: this.state.joueurSC2,
        divisionSC2: this.state.divisionSC2,
        raceSC2: this.state.raceSC2,
        }} >
        <div style={{background: "#ececec", padding: "30px"}}>
          <Row gutter={[16, 30]}>
            <Col span={8}>
              <Card title="Valorant" bordered={false}>
                <p>Jouez vous à Valorant ?</p>
                  <Radio.Group onChange={this.updatJoueurVL} value={this.state.joueurVL}>
                    <Radio value= {true}>Oui</Radio>
                    <Radio value= {false}>Non</Radio>
                  </Radio.Group>
                <p>Choisissez votre division sur le jeu.</p>
                  <Radio.Group onChange={this.updatDivisionVL} value={this.state.divisionVL} disabled={!this.state.joueurVL}>
                    <Radio value="Fer"> Fer </Radio>
                    <Radio value="Bronze"> Bronze </Radio>
                    <Radio value="Argent"> Argent </Radio>
                    <Radio value="Or"> Or </Radio>
                    <Radio value="Platine"> Platine </Radio>
                    <Radio value="Diamand"> Diamand </Radio>
                    <Radio value="Immortel"> Immortel </Radio>
                    <Radio value="Valorant"> Valorant </Radio>
                  </Radio.Group>  
              </Card>
              </Col>
              <Col span={8}>
              <Card title="Rocket League" bordered={false}>
                <p>Jouez vous à Rocket League ?</p>
                  <Radio.Group onChange={this.updatJoueurRL} value={this.state.joueurRL}>
                    <Radio value= {true}>Oui</Radio>
                    <Radio value= {false}>Non</Radio>
                  </Radio.Group>
                <p>Choisissez votre division sur le jeu.</p>
                  <Radio.Group onChange={this.updatDivisionRL} value={this.state.divisionRL} disabled={!this.state.joueurRL}>
                    <Radio value="Bronze"> Bronze </Radio>
                    <Radio value="Argent"> Argent </Radio>
                    <Radio value="Or"> Or </Radio>
                    <Radio value="Platine"> Platine </Radio>
                    <Radio value="Diamand"> Diamand </Radio>
                    <Radio value="Champion"> Champion </Radio>
                    <Radio value="GrandChamp"> Grand Champion </Radio>
                  </Radio.Group>
              </Card>
              </Col> 
              <Col span={8}>
              <Card title="Counter Strike GO" bordered={false}>
                <p>Jouez vous à Counter-Strike Global Offensive ?</p>
                  <Radio.Group onChange={this.updatJoueurCSGO} value={this.state.joueurCSGO}>
                    <Radio value= {true}>Oui</Radio>
                    <Radio value= {false}>Non</Radio>
                  </Radio.Group>
                <p>Choisissez votre division sur le jeu.</p>
                  <Radio.Group onChange={this.updatDivisionCSGO} value={this.state.divisionCSGO} disabled={!this.state.joueurCSGO}>
                    <Radio value="Argent"> Argent </Radio>
                    <Radio value="Nova"> Nova </Radio>
                    <Radio value="AK"> AK </Radio>
                    <Radio value="DoubleAK"> Double AK </Radio>
                    <Radio value="MasterGuardian"> Master Guardian </Radio>
                    <Radio value="Eagle"> Eagle </Radio>
                    <Radio value="Supreme"> Suprême </Radio>
                    <Radio value="Global"> Global </Radio>
                  </Radio.Group>
              </Card>
              </Col>
              <Col span={12}>
              <Card title="League of Legends" bordered={false}>
                <p>Jouez vous à League of Legends ?</p>
                  <Radio.Group onChange={this.updatJoueurLOL} value={this.state.joueurLOL}>
                    <Radio value= {true}>Oui</Radio>
                    <Radio value= {false}>Non</Radio>
                  </Radio.Group>
                <p>Choisissez votre division sur le jeu.</p>
                  <Radio.Group onChange={this.updatDivisionLOL} value={this.state.divisionLOL} disabled={!this.state.joueurLOL}>
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
                  <Radio.Group onChange={this.updatRoleLOL} value={this.state.roleLOL} disabled={!this.state.joueurLOL}>
                    <Radio value="Support" > Support </Radio>
                    <Radio value="ADC" > AD Carry </Radio>
                    <Radio value="Mid" > Mid Lane </Radio>
                    <Radio value="Jungle" > Jungle </Radio>
                    <Radio value="Top" > Top Lane </Radio>
                  </Radio.Group>
              </Card>
              </Col>    
              <Col span={12}>
              <Card title="Starcraft 2" bordered={false}>
                <p>Jouez vous à Starcraft 2 ?</p>
                  <Radio.Group onChange={this.updatJoueurSC2} value={this.state.joueurSC2}> 
                    <Radio value= {true}>Oui</Radio>
                    <Radio value= {false}>Non</Radio>
                  </Radio.Group>
                <p>Choisissez votre division sur le jeu.</p>
                  <Radio.Group onChange={this.updatDivisionSC2} value={this.state.divisionSC2} disabled={!this.state.joueurSC2}>
                    <Radio value="Bronze" > Bronze </Radio>
                    <Radio value="Argent" > Argent </Radio>
                    <Radio value="Gold" > Or </Radio>
                    <Radio value="Platine" > Platine </Radio>
                    <Radio value="Diamand" > Diamand </Radio>
                    <Radio value="Master" > Maître </Radio>
                    <Radio value="GM" > Grand maître </Radio>
                  </Radio.Group>
                <p>Quelle est la race que vous jouez principalement sur le jeu ?</p>
                  <Radio.Group onChange={this.updatRaceSC2} value={this.state.raceSC2} disabled={!this.state.joueurSC2}>
                    <Radio value="Terran" > Terran </Radio>
                    <Radio value="Zerg" > Zerg </Radio>
                    <Radio value="Protoss" > Protoss </Radio>
                    <Radio value="Aleatoire" > Aléatoire </Radio>
                  </Radio.Group>
              </Card>
            </Col> <br /><br />
          <Button type="primary" htmlType="submit" onClick={this.updateUserJeu}>Modifier mes données.</Button>
        </Row>
      </div>  
    </Form>
    );}
  }
}

export default connect (mapStateToProps) (DonneesJeux);