import React,  {Component} from 'react';
import "./header.css";
class Header extends Component {
  render() {
     return(
<header>
<div>
<h1>Simply The Best</h1>
<div class="overlay">
<h1>RIV4L GAMING</h1>
<h3>Reasons for Choosing US</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
<br></br>
	<button>ACCEUIL</button>  
  <button>EQUIPE</button>  
  <button>CONTACT</button>  
  <button>LOGIN / REGISTER</button>
</div>
</header>
     );
  }
}

export default Header;