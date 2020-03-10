import React,  {Component} from 'react';
import{
  Link 
}  from 'react-router-dom';

class Header extends Component {
  render() {
     return(

      <header>
        <div className="logo">
          <img src="./src/images/riv4lgaming2.png" alt="logo"></img>
        </div>
        <nav>
          <ul>
            <li className="first">
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/111">111</Link>
            </li>
            <li>
              <Link to="/222">222</Link>
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