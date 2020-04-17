import React,  {Component} from 'react'; 
import {Link} from 'react-router-dom';

class Tournois extends Component {
  render() {
     return (
       <body>
       <div>
         <h1>Tournoi</h1>
            <p><Link to="/createTournament"> CLiquez ici pour créer votre tournoi.</Link></p>
            <div>
              <p>Choisissez les jeux pour lesquels vous voulez voir les tournois.</p>
              <input type="checkbox" name="tournoi" value="SC2" /> Starcraf 2
              <input type="checkbox" name="tournoi" value="RL" /> Rocket League
              <input type="checkbox" name="tournoi" value="CSGO" /> Counter-Strike Global Offensive
              <input type="checkbox" name="tournoi" value="LOL" /> League of Legends
              <input type="checkbox" name="tournoi" value="Valorant" /> Valorant
            </div>
            <p>Liste des tournois</p>

       </div>
      </body>
     );
  }
}

export default Tournois;