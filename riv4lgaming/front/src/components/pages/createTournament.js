import React,  {Component} from 'react'
import { connect } from "react-redux"
import axios from 'axios'
import { Radio, Checkbox, Select, Button, Input, Col, Row, DatePicker, TimePicker} from 'antd'
import Form from 'antd/lib/form/Form';
import moment from 'moment';

const format = 'HH:mm';
const { Option} = Select;
const { TextArea } = Input;
const mapStateToProps = state => {
    return {
      user: state.user
    }
}

class CreateTournament extends Component {
    state = {
        name: "",
        jeu : "",
        nbr_participants_max : "",
        divisions :[],
        image: "",
      }
      
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };

      updatName = (e) => {
        //console.log(e.target.value);
        this.setState({name: e.target.value});
      }

      updatJeu = (e) => {
        //console.log(e.target.value);
        this.setState({jeu: e.target.value});
      }
    
      updatNbrParticipants = (e) => {
        //console.log(e);
        this.setState({nbr_participants_max: e});
      }
    
      updatNbrMatchs = (e) => {
        //console.log(e.target.value);
        this.setState({nbr_matchs: e.target.value});
      }
    
      updatDivisions = (e) => {
        //console.log(e.target.value);
        this.setState({divisions: [...this.state.divisions, e.target.value]})
      }
    
      updatDescription = (e) => {
        //console.log(e.target.value);
        this.setState({description: e.target.value});
      }

      updatImage = (e) => {
        //console.log(e.target.value);
        this.setState({image: e.target.value});
      }

      creatTournament = (e) => {
        e.preventDefault()
        //console.log("création de tournoi", this.state.name, this.state.jeu, this.state.nbr_participants_max, this.state.nbr_matchs, this.state.divisions, this.state.description);
        axios({
          method: 'post',
          url: 'http://35.180.238.11:4000/createTournament',
          data: {
            name: this.state.name,
            jeu: this.state.jeu,
            nbr_participants_max: this.state.nbr_participants_max,
            nbr_matchs: this.state.nbr_matchs,
            divisions: this.state.divisions,
            description: this.state.description,
            image: this.state.image,
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
    
    render(){
      console.log(this.state.divisions);
        return (
          <Row>
            <Col flex="100px"></Col>
            <Col flex="auto">
              <Form handleSubmit={this.creatTournament}>
                <div>
                <p>Choisissez un nom pour votre tournoi (celui-ci doit être différent des autres tournois existant déjà).</p>
                    <Input type="textarea" placeholder="Nom de votre tournoi." required onChange={this.updatName} /><br /><br />
                <p>Choississez la date et l'heure de votre tournoi.</p>
                <DatePicker  /> <TimePicker defaultValue={moment('12:08', format)} format={format} /><br />
                <p>Choisissez un jeu pour votre tournoi.</p>
                    <Radio.Group onChange={this.updatJeu} value={this.state.jeu}>
                      <Radio value={"SC2"}>Starcraf 2</Radio>
                      <Radio value={"RL"}>Rocket League</Radio>
                      <Radio value={"CSGO"}>Counter-Strike Global Offensive </Radio>
                      <Radio value={"LOL"}>League of Legends </Radio>
                      <Radio value={"VL"}>Valorant  </Radio>
                    </Radio.Group><br /><br />
                <p>Choisissez le nombre de participants ou d'équipes participantes maximum.</p>
                    <Select style={{ width: 200 }} required onChange={this.updatNbrParticipants}>
                        <Option value ={"4"}>4</Option>
                        <Option value ={"8"}>8</Option>
                        <Option value ={"16"}>16</Option>
                        <Option value ={"32"}>32</Option>
                        <Option value ={"64"}>64</Option>
                        <Option value ={"128"}>128</Option>
                    </Select><br /><br />

                {this.state.jeu === "SC2" && (<div>
                  <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" value="Bronze" onChange={this.updatDivisions}/> Bronze 
                    <Checkbox type="checkbox" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" value="Gold" onChange={this.updatDivisions}/> Or 
                    <Checkbox type="checkbox" value="Platine" onChange={this.updatDivisions}/> Platine 
                    <Checkbox type="checkbox" value="Diamand" onChange={this.updatDivisions}/> Diamand 
                    <Checkbox type="checkbox" value="Master" onChange={this.updatDivisions}/> Maître 
                    <Checkbox type="checkbox" value="GM" onChange={this.updatDivisions}/> Grand maître 
                </div>)}
                <br />
                {this.state.jeu === "LOL" && (<div>
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" value="Bronze" onChange={this.updatDivisions}/> Bronze 
                    <Checkbox type="checkbox" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" value="Gold" onChange={this.updatDivisions}/> Or 
                    <Checkbox type="checkbox" value="Platine" onChange={this.updatDivisions}/> Platine 
                    <Checkbox type="checkbox" value="Diamand" onChange={this.updatDivisions}/> Diamand 
                    <Checkbox type="checkbox" value="Master" onChange={this.updatDivisions}/> Maître 
                    <Checkbox type="checkbox" value="GM" onChange={this.updatDivisions}/> Grand maître 
                    <Checkbox type="checkbox" value="Challenger" onChange={this.updatDivisions}/> Challenger 
                  </div>)}
                <br />
                {this.state.jeu === "CSGO" && (<div>
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" value="Nova" onChange={this.updatDivisions}/> Nova 
                    <Checkbox type="checkbox" value="AK" onChange={this.updatDivisions}/> AK 
                    <Checkbox type="checkbox" value="DL_AK" onChange={this.updatDivisions}/> Double AK 
                    <Checkbox type="checkbox" value="Master" onChange={this.updatDivisions}/> Master Guardian 
                    <Checkbox type="checkbox" value="Eagle" onChange={this.updatDivisions}/> Eagle 
                    <Checkbox type="checkbox" value="Supreme" onChange={this.updatDivisions}/> Suprême 
                    <Checkbox type="checkbox" value="Global" onChange={this.updatDivisions}/> Global 
                  </div>)}
                <br />
                {this.state.jeu === "RL" && (<div>
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" value="Bronze" onChange={this.updatDivisions}/> Bronze 
                    <Checkbox type="checkbox" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" value="Gold" onChange={this.updatDivisions}/> Or 
                    <Checkbox type="checkbox" value="Platine" onChange={this.updatDivisions}/> Platine 
                    <Checkbox type="checkbox" value="Diamand" onChange={this.updatDivisions}/> Diamand 
                    <Checkbox type="checkbox" value="Champion" onChange={this.updatDivisions}/> Champion 
                    <Checkbox type="checkbox" value="Grand_Champ" onChange={this.updatDivisions}/> Grand Champion 
                  </div>)}
                  <br />
                  {this.state.jeu === "VL" && (<div>
                  <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" value="Fer" onChange={this.updatDivisions}/> Fer 
                    <Checkbox type="checkbox" value="Bronze" onChange={this.updatDivisions}/> Bronze
                    <Checkbox type="checkbox" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" value="Gold" onChange={this.updatDivisions}/> Or 
                    <Checkbox type="checkbox" value="Platine" onChange={this.updatDivisions}/> Platine 
                    <Checkbox type="checkbox" value="Diamand" onChange={this.updatDivisions}/> Diamand 
                    <Checkbox type="checkbox" value="Immortel" onChange={this.updatDivisions}/> Immortel
                    <Checkbox type="checkbox" value="Valorant" onChange={this.updatDivisions}/> Valorant  
                </div>)}

                  {this.state.jeu === "LOL" &&(<div>
                    <Checkbox type="checkbox" value="https://img.lemde.fr/2018/05/22/0/218/1164/582/1440/0/60/0/7fbe49a_10861-9kwk39.j7dht.jpg" onChange={this.updatImage}/> Image
                </div>)}

                {this.state.jeu === "SC2" &&(<div>
                    <Checkbox type="checkbox" value="https://c4.wallpaperflare.com/wallpaper/636/601/259/queen-of-blades-sarah-kerrigan-starcraft-starcraft-ii-wallpaper-preview.jpg" onChange={this.updatImage}/> Image
                </div>)}

                {this.state.jeu === "RL" &&(<div>
                    <Checkbox type="checkbox" value="https://image.jeuxvideo.com/medias-md/154823/1548225017-2830-card.jpg" onChange={this.updatImage}/> Image
                </div>)}

                {this.state.jeu === "CSGO" &&(<div>
                    <Checkbox type="checkbox" value="https://image.jeuxvideo.com/medias-md/153573/1535728452-9770-card.jpg" onChange={this.updatImage}/> Image
                </div>)}

                {this.state.jeu === "VL" &&(<div>
                    <Checkbox type="checkbox" value="https://img-4.linternaute.com/72AL5YjxNpGzkRWPKHkz9bOh5Yc=/1240x/smart/7c678e09bda44a0ba8c5badec236bbdb/ccmcms-linternaute/15846348.jpg" onChange={this.updatImage}/> Image
                </div>)}
                  
                <br /><br />
                <p>Nous vous laissons le choix de définir le map pool dans la description de votre événement ci dessous. </p>
                <TextArea rows={4} placeholder="Description de votre tournoi." onChange={this.updatDescription}/>
                <br /><br />
                <Button type="primary" htmlType="submit" onClick={this.creatTournament}>Créer le tournoi</Button>
                
              </div>
              </Form>
            </Col>
          </Row>
        )
    }
}

export default connect (mapStateToProps) (CreateTournament);