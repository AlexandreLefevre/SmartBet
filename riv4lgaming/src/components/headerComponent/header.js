import React,  {Component} from 'react';

class Header extends Component {
  render() {
     return(

      <header>
        <div className="logo">
          LOGO
        </div>
        <nav>
          <ul>
            <li className="Acceuil">
              <a href="#">Acceuil</a>
            </li>
            <li className="Equipe">
              <a href="#">Equipe</a>
            </li>
            <li className="Contact">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

     );
  }
}

export default Header;