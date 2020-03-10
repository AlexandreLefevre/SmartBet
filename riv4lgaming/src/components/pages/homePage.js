import React,  {Component} from 'react';

class Homepage extends Component {
  render() {
     return (
       <div className="container-fluid">

        <h1 class="titleriv4l">Riv4lGaming</h1>

        <img src="./src/images/riv4lgaming.png" alt="logo"></img>
        <div>
          <p>Bienvenu sur Riv4lGaming ! <br />
            Vous désirez de nouvelles aventures tout démarre ici.
          </p>
        </div>
        <div >
          <p>Explication forum + image</p>
        </div>
        <div>
          <p>Explication tournoi + image de jeu possible en tournoi</p>
        </div>

       </div>

     );
  }
}

export default Homepage;