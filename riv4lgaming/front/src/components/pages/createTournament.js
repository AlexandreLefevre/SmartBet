import React,  {Component} from 'react';
import { connect } from "react-redux"; 

const mapStateToProps = state => {
    return {
      user: state.user
    }
}

class CreateTournament extends Component {
    render(){
        return (
            <body>
                <div>
                    Choisissez un jeu pour votre tournoi.
                    <input type="radio" name="tournoi" value="SC2" /> Starcraf 2
                    <input type="radio" name="tournoi" value="RL" /> Rocket League
                    <input type="radio" name="tournoi" value="CSGO" /> Counter-Strike Global Offensive
                    <input type="radio" name="tournoi" value="LOL" /> League of Legends
                    <input type="radio" name="tournoi" value="Valorant" /> Valorant
                </div>
                <div>
                    <p>Choisissez le nombre de participants ou d'équipes participantes maximum.</p>
                    <input type="radio" name="participants" value="4" /> 4
                    <input type="radio" name="participants" value="8" /> 8
                    <input type="radio" name="participants" value="16" /> 16
                    <input type="radio" name="participants" value="32" /> 32
                    <input type="radio" name="participants" value="64" /> 64
                </div>
                <div>
                    <p>Les matchs se déroulent en BO1 par défaut, vous pouvez choisir à partir de quel round ceux-ci passent en BO3, BO5. </p>
                </div>
                <div name="SC2"> 
                    <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="radio" name="level" value="Bronze" /> Bronze
                    <input type="radio" name="level" value="Argent" /> Argent
                    <input type="radio" name="level" value="Gold" /> Or
                    <input type="radio" name="level" value="Platine" /> Platine
                    <input type="radio" name="level" value="Diamand" /> Diamand
                    <input type="radio" name="level" value="Master" /> Maître
                    <input type="radio" name="level" value="GM" /> Grand maître
                </div>
                <div name="LOL">
                    <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="radio" name="level" value="Bronze" /> Bronze
                    <input type="radio" name="level" value="Argent" /> Argent
                    <input type="radio" name="level" value="Gold" /> Or
                    <input type="radio" name="level" value="Platine" /> Platine
                    <input type="radio" name="level" value="Diamand" /> Diamand
                    <input type="radio" name="level" value="Master" /> Maître
                    <input type="radio" name="level" value="GM" /> Grand maître
                    <input type="radio" name="level" value="Challenger" /> Challenger
                </div>
                <div name="CSGO">
                    <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="radio" name="level" value="Argent" /> Argent
                    <input type="radio" name="level" value="Nova" /> Nova
                    <input type="radio" name="level" value="AK" /> AK
                    <input type="radio" name="level" value="DL_AK" /> Double AK
                    <input type="radio" name="level" value="Master" /> Master Guardian
                    <input type="radio" name="level" value="Eagle" /> Eagle
                    <input type="radio" name="level" value="Supreme" /> Suprême
                    <input type="radio" name="level" value="Global" /> Global
                </div>
                <div name="RL">
                    <p>Veuillez sélectionner les divisions qui pourront participer à votre tournoi.</p>
                    <input type="radio" name="level" value="Bronze" /> Bronze
                    <input type="radio" name="level" value="Argent" /> Argent
                    <input type="radio" name="level" value="Gold" /> Or
                    <input type="radio" name="level" value="Platine" /> Platine
                    <input type="radio" name="level" value="Diamand" /> Diamand
                    <input type="radio" name="level" value="Champion" /> Champion
                    <input type="radio" name="level" value="Grand_Champ" /> Grand Champion
                </div>
                <div>
                    <p>Nous vous laissons le choix de définir le map pool dans la description de votre événement. </p>
                </div>
            </body>
        )
    }
}

export default connect (mapStateToProps) (CreateTournament);