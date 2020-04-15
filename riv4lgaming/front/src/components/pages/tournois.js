import React,  {Component} from 'react';

class Tournois extends Component {
  render() {
     return (
       <div className="container-fluid">
         <h1>Tournoi</h1>
            <p>Tournoi</p>
            <p>Création de tournoi</p>
            <div>
              <p>Liste des tournois</p>
              <p>Choisissez les jeux que vous voulez.</p>
              <input type="checkbox" name="tournoi" value="SC2"> Starcraf 2</input>
              <input type="checkbox" name="tournoi" value="RL"> Rocket League</input>
              <input type="checkbox" name="tournoi" value="CSGO"> Counter-Strike Global Offensive</input>
              <input type="checkbox" name="tournoi" value="LOL"> League of Legends</input>
              <input type="checkbox" name="tournoi" value="Valorant"> Valorant</input>
            </div>

       </div>

     );
  }
}

export default Tournois;