import React,  {Component} from 'react';

class Homepage extends Component {
  render() {
     return (
       <body>
        <div className="container-fluid">
          <h1 class="riv4l"><span id="black">Riv4l</span><span id="orange">Gaming</span></h1>
            <div>
              <h2>
                <p class="niveau1">Bienvenue sur Riv4lGaming ! </p>
                <p class="niveau1">Qu'est ce que Riv4lGaming ? </p>
              </h2>
                <p>Riv4lGaming est un site vous permettant de trouver des partenaires avec qui jouer sur vos différents jeu en ligne. 
                  Mais ce n'est pas tout, Riv4lGaming vous propose aussi de participer à des tounois sur différents jeux. Ces tournois sont créés soit
                  par Riv4lGaming ou par sa communauté. <br />
                  Cela vous tente ? Alors n'hésitez plus foncez !
                </p>
            </div>
            <div>
              <h2>
                <p class="niveau1">Forum</p>
              </h2>
                <p>Comment cette partie du site fonctionne ?<br />
                C'est très simple, vous créez votre annonce en indiquant ce que vous recherchez par exemple : <br />
                "[LOL Mid Gold] Recherche teammates pour ranked."<br />
                Vous indiquez le jeu auquel votre annonce correspond, votre niveau sur ce jeu, et la position que vous jouez(certains jeux ne reprennent pas toutes les carastériques montrées),
                et pour finir le titre de votre annonce résumant pourquoi vous la créée.
                </p>
            </div>
                <h2>
                  <p class="niveau1">Tournoi</p>
                </h2>
                  <p>Comment cette partie du site fonctionne ?<br />
                  Vous retrouverez sur cette partie du site différents tournois.<br />
                  Les tournois seront mis à dispositions de tous.<br />
                  Chaque tournoi sera différent en fonction de son créateur. N'importe qui pourra créer un tournoi et définir les paramètres de celui-ci. 
                  Les paramètres sélectionnables sont les suivants :<br />
                    - avec ou sans loser bracket(Qu'est ce qu'un loser bracket ?)<br />
                    - avec ou sans restriction de niveau(tournoi autorisé à tout le monde ou que à certains "rang" sur le jeu)<br />
                    - nombre de participants maximum<br />
                    - les types de BO en fonction du round dans le tournoi<br />
                    - avec ou sans cash prize<br />
                  Les jeux disponibles sont les suivants : <br />
                  </p>
                  <div class="row">
                  <div class="column">
                    <a href="https://starcraft2.com/fr-fr/">
                      < img src="https://c4.wallpaperflare.com/wallpaper/636/601/259/queen-of-blades-sarah-kerrigan-starcraft-starcraft-ii-wallpaper-preview.jpg" alt="sc2" class="jeu"></img>
                    </a>
                  </div>
                  <div class="column">
                    <a href="https://play.euw.leagueoflegends.com/fr_FR">
                      <img src="https://img.lemde.fr/2018/05/22/0/218/1164/582/1440/0/60/0/7fbe49a_10861-9kwk39.j7dht.jpg" alt="LoL" class="jeu"></img>
                    </a>
                  </div>  
                  <div class="column">
                    <a href="https://blog.counter-strike.net/">
                      <img src="https://image.jeuxvideo.com/medias-md/153573/1535728452-9770-card.jpg" alt="CSGO" class="jeu"></img>
                    </a>
                  </div>
                  <div class="column">
                    <a href="https://www.rocketleague.com/">
                      <img src="https://image.jeuxvideo.com/medias-md/154823/1548225017-2830-card.jpg" alt="RL" class="jeu"></img>
                    </a>
                  </div>
                </div>
        </div>
    </body>

     );
  }
}

export default Homepage;