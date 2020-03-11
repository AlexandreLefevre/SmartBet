import React,  {Component} from 'react';
import{
  Link 
}  from 'react-router-dom';

class Header extends Component {
  render() {
     return(

      <header>
        <div className="logo">

        </div>
        <nav>
          <ul>
            <li className="first">
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
            <li>
              <Link to="/tournois">Tournois</Link>
            </li>
            <li className="last">
              <Link to="/login">Login / Register</Link>
            </li>
          </ul>
        </nav>
      </header>
 
     );
  }
}

export default Header;