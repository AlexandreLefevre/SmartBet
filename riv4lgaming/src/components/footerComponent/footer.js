import React,  {Component} from 'react';

class Footer extends Component {
  render() {
     return (
        <section class="lockfoot">
      <footer class="footer-distributed">

      <div class="footer-left">

         <h3>Riv4l<span>Gaming</span></h3>

         <p class="footer-links">
            <a href="#" class="link-1">Acceuil</a>
            
            <a href="#">Forum</a>
         
            <a href="#">Tournoi</a>
         
            <a href="#">A propos</a>
            
            <a href="#">Faq</a>
            
            <a href="#">Contact</a>
         </p>

         <p class="footer-company-name">Riv4lGaming © 2020</p>
      </div>

      <div class="footer-center">

         <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Rue ciseaux</span> Louvain La Neuve, Belgique</p>
         </div>

         <div>
            <i class="fa fa-phone"></i>
            <p>0470.34.16.01</p>
         </div>

         <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@Riv4lGaming.com</a></p>
         </div>

      </div>

      <div class="footer-right">

         <p class="footer-company-about">
            <span>A propos</span>
            Riv4lGaming est un projet étudiant qui à pour objectif de créer un site web sur le thème des tournois de jeux vidéos.
         </p>

         <div class="footer-icons">

            <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
            <a href="https://twitter.com"><i class="fa fa-twitter"></i></a>
            <a href="https://fr.linkedin.com/"><i class="fa fa-linkedin"></i></a>
            <a href="https://github.com/AlexandreLefevre/SmartBet"><i class="fa fa-github"></i></a>

         </div>

      </div>

   </footer>
    </section>
     );
  }
}

export default Footer;