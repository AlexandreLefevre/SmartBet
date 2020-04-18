import React,  {Component} from 'react'
import { connect } from "react-redux"
import axios from 'axios'
import { Radio, Checkbox, Select, Button, Input} from 'antd'


const mapStateToProps = state => {
    return {
      user: state.user
    }
}

class CreateTournament extends Component {
    state = {
        nom: "",
        jeu : "",
        nbr_participants : "",
        nbr_matchs : "",
        divisions :"",
      }
      

      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };

      updatName = (e) => {
        //console.log(e.target.value);
        this.setState({nom: e.target.value});
      }

      updatJeu = (e) => {
        //console.log(e.target.value);
        this.setState({jeu: e.target.value});
      }
    
      updatNbrParticipants = (e) => {
        //console.log(e.target.value);
        this.setState({nbr_participants: e.target.value});
      }
    
      updatNbrMatchs = (e) => {
        //console.log(e.target.value);
        this.setState({nbr_matchs: e.target.value});
      }
    
      updatDivisions = (e) => {
        this.setState({divisions: e.target.value})
      }
    
      creatTournament = (e) => {
        e.preventDefault()
        console.log("création de tournoi", this.state.nom, this.state.jeu, this.state.nbr_participants, this.state.nbr_matchs, this.state.divisions);
        axios({
          method: 'post',
          url: 'http://localhost:4000/creatTournament',
          data: {
            nom: this.state.nom,
            jeu: this.state.jeu,
            nbr_participants: this.state.nbr_participants,
            nbr_matchs: this.state.nbr_matchs,
            divisions: this.state.divisions,
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
        return (
            <body>
                <div className="container-fluid">

                <form handleSubmit={this.creatTournament}>
                <div class="container">
                <p>Choisissez un nom pour votre tournoi (celui-ci doit être différent des autres tournois existant déjà).</p>
                    <Input type="textarea" placeholder="Nom de votre tournoi." name="nomTournoi" required onChange={this.updatName} />
                <p>Choisissez un jeu pour votre tournoi.</p>
                    <Radio.Group onChange={this.updatJeu} value={this.state.value}>
                      <Radio value={"SC2"}>Starcraf 2</Radio>
                      <Radio value={"RL"}>Rocket League</Radio>
                      <Radio value={"CSGO"}>Counter-Strike Global Offensive </Radio>
                      <Radio value={"LOL"}>League of Legends </Radio>
                      <Radio value={"VL"}>Valorant  </Radio>
                    </Radio.Group>
                <br />
                <p>Choisissez le nombre de participants ou d'équipes participantes maximum.</p>
                    <Select style={{width:"100px"}} name="participants" id="nbr_participants" require onChange={this.updatNbrParticipants}>
                        <Select.Option value ={"4"}>4</Select.Option>
                        <Select.Option value = "8">8</Select.Option>
                        <Select.Option value = "16">16</Select.Option>
                        <Select.Option value = "32">32</Select.Option>
                        <Select.Option value = "64">64</Select.Option>
                        <Select.Option value = "128">128</Select.Option>
                    </Select>
                <br />
                <br />
                <p>Les matchs se déroulent en BO1 par défaut, vous pouvez choisir à partir de quel round ceux-ci passent en BO3, BO5. </p>

                <br />
                {this.state.jeu === "SC2" && (<div>
                  <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" name="level" value="Bronze" onChange={this.updatDivisions}/> Bronze 
                    <Checkbox type="checkbox" name="level" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" name="level" value="Gold" onChange={this.updatDivisions}/> Or 
                    <Checkbox type="checkbox" name="level" value="Platine" onChange={this.updatDivisions}/> Platine 
                    <Checkbox type="checkbox" name="level" value="Diamand" onChange={this.updatDivisions}/> Diamand 
                    <Checkbox type="checkbox" name="level" value="Master" onChange={this.updatDivisions}/> Maître 
                    <Checkbox type="checkbox" name="level" value="GM" onChange={this.updatDivisions}/> Grand maître 
                </div>)}
                <br />
                {this.state.jeu === "LOL" && (<div>
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" name="level" value="Bronze" onChange={this.updatDivisions}/> Bronze 
                    <Checkbox type="checkbox" name="level" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" name="level" value="Gold" onChange={this.updatDivisions}/> Or 
                    <Checkbox type="checkbox" name="level" value="Platine" onChange={this.updatDivisions}/> Platine 
                    <Checkbox type="checkbox" name="level" value="Diamand" onChange={this.updatDivisions}/> Diamand 
                    <Checkbox type="checkbox" name="level" value="Master" onChange={this.updatDivisions}/> Maître 
                    <Checkbox type="checkbox" name="level" value="GM" onChange={this.updatDivisions}/> Grand maître 
                    <Checkbox type="checkbox" name="level" value="Challenger" onChange={this.updatDivisions}/> Challenger 
                  </div>)}
                <br />
                {this.state.jeu === "CSGO" && (<div>
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" name="level" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" name="level" value="Nova" onChange={this.updatDivisions}/> Nova 
                    <Checkbox type="checkbox" name="level" value="AK" onChange={this.updatDivisions}/> AK 
                    <Checkbox type="checkbox" name="level" value="DL_AK" onChange={this.updatDivisions}/> Double AK 
                    <Checkbox type="checkbox" name="level" value="Master" onChange={this.updatDivisions}/> Master Guardian 
                    <Checkbox type="checkbox" name="level" value="Eagle" onChange={this.updatDivisions}/> Eagle 
                    <Checkbox type="checkbox" name="level" value="Supreme" onChange={this.updatDivisions}/> Suprême 
                    <Checkbox type="checkbox" name="level" value="Global" onChange={this.updatDivisions}/> Global 
                  </div>)}
                <br />
                {this.state.jeu === "RL" && (<div>
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <Checkbox type="checkbox" name="level" value="Bronze" onChange={this.updatDivisions}/> Bronze 
                    <Checkbox type="checkbox" name="level" value="Argent" onChange={this.updatDivisions}/> Argent 
                    <Checkbox type="checkbox" name="level" value="Gold" onChange={this.updatDivisions}/> Or 
                    <Checkbox type="checkbox" name="level" value="Platine" onChange={this.updatDivisions}/> Platine 
                    <Checkbox type="checkbox" name="level" value="Diamand" onChange={this.updatDivisions}/> Diamand 
                    <Checkbox type="checkbox" name="level" value="Champion" onChange={this.updatDivisions}/> Champion 
                    <Checkbox type="checkbox" name="level" value="Grand_Champ" onChange={this.updatDivisions}/> Grand Champion 
                  </div>)}
                <br />
                <p>Nous vous laissons le choix de définir le map pool dans la description de votre événement ci dessous. </p>
                <br />
                <Button type="primary" htmlType="submit" onClick={this.creatTournament}>Créer le tournoi</Button>
                </div>
                </form>
                </div>
            </body>
        )
    }
}

export default connect (mapStateToProps) (CreateTournament);