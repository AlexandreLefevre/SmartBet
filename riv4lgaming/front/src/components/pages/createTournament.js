import React,  {Component} from 'react'
import { connect } from "react-redux"
import axios from 'axios'

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

      updatName = (e) => {
        //console.log(e.target.value);
        this.setState({nom: e.target.value});
      }

      updatJeu = (e) => {
        //console.log(e.target.value);
        this.setState({jeu: e.target.value});
      }
    
      updatNbr_Participants = (e) => {
        //console.log(e.target.value);
        this.setState({nbr_participants: e.target.value});
      }
    
      updatNbr_Matchs = (e) => {
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
                    <input type="text" placeholder="Nom de votre tournoi." name="nomTournoi" required onChange={this.updatName} />
                <p>Choisissez un jeu pour votre tournoi.</p>
                    <input type="checkbox" name="tournoi" value="SC2" /> Starcraf 2 
                    <input type="checkbox" name="tournoi" value="RL" /> Rocket League 
                    <input type="checkbox" name="tournoi" value="CSGO" /> Counter-Strike Global Offensive 
                    <input type="checkbox" name="tournoi" value="LOL" /> League of Legends 
                    <input type="checkbox" name="tournoi" value="Valorant" /> Valorant 
                <br />
                <p>Choisissez le nombre de participants ou d'équipes participantes maximum.</p>
                    <select name="participants" id="nbr_participants" require onChange={this.updatNbr_Participants}>
                        <option value = "4">4</option>
                        <option value = "8">8</option>
                        <option value = "16">16</option>
                        <option value = "32">32</option>
                        <option value = "64">64</option>
                        <option value = "128">128</option>
                    </select>
                <br />
                <p>Les matchs se déroulent en BO1 par défaut, vous pouvez choisir à partir de quel round ceux-ci passent en BO3, BO5. </p>
                <br />
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="checkbox" name="level" value="Bronze" /> Bronze 
                    <input type="checkbox" name="level" value="Argent" /> Argent 
                    <input type="checkbox" name="level" value="Gold" /> Or 
                    <input type="checkbox" name="level" value="Platine" /> Platine 
                    <input type="checkbox" name="level" value="Diamand" /> Diamand 
                    <input type="checkbox" name="level" value="Master" /> Maître 
                    <input type="checkbox" name="level" value="GM" /> Grand maître 
                <br />
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="checkbox" name="level" value="Bronze" /> Bronze 
                    <input type="checkbox" name="level" value="Argent" /> Argent 
                    <input type="checkbox" name="level" value="Gold" /> Or 
                    <input type="checkbox" name="level" value="Platine" /> Platine 
                    <input type="checkbox" name="level" value="Diamand" /> Diamand 
                    <input type="checkbox" name="level" value="Master" /> Maître 
                    <input type="checkbox" name="level" value="GM" /> Grand maître 
                    <input type="checkbox" name="level" value="Challenger" /> Challenger 
                <br />
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="checkbox" name="level" value="Argent" /> Argent 
                    <input type="checkbox" name="level" value="Nova" /> Nova 
                    <input type="checkbox" name="level" value="AK" /> AK 
                    <input type="checkbox" name="level" value="DL_AK" /> Double AK 
                    <input type="checkbox" name="level" value="Master" /> Master Guardian 
                    <input type="checkbox" name="level" value="Eagle" /> Eagle 
                    <input type="checkbox" name="level" value="Supreme" /> Suprême 
                    <input type="checkbox" name="level" value="Global" /> Global 
                <br />
                <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="checkbox" name="level" value="Bronze" /> Bronze 
                    <input type="checkbox" name="level" value="Argent" /> Argent 
                    <input type="checkbox" name="level" value="Gold" /> Or 
                    <input type="checkbox" name="level" value="Platine" /> Platine 
                    <input type="checkbox" name="level" value="Diamand" /> Diamand 
                    <input type="checkbox" name="level" value="Champion" /> Champion 
                    <input type="checkbox" name="level" value="Grand_Champ" /> Grand Champion 
                <br />
                <p>Nous vous laissons le choix de définir le map pool dans la description de votre événement ci dessous. </p>
                <br />
                <button type="submit" onClick={this.creatTournament}>Créer</button>
                </div>
                </form>
                </div>
            </body>
        )
    }
}

export default connect (mapStateToProps) (CreateTournament);