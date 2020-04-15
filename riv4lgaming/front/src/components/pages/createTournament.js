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
                    <input type="radio" name="tournoi" value="SC2"> Starcraf 2</input>
                    <input type="radio" name="tournoi" value="RL"> Rocket League</input>
                    <input type="radio" name="tournoi" value="CSGO"> Counter-Strike Global Offensive</input>
                    <input type="radio" name="tournoi" value="LOL"> League of Legends</input>
                    <input type="radio" name="tournoi" value="Valorant"> Valorant</input>
                </div>
                <div>
                </div>
            </body>
        )
    }
}

export default connect (mapStateToProps) (CreateTournament);