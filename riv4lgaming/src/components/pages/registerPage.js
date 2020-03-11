import React,  {Component} from 'react';

class RegisterPage extends Component {
  render() {
     return ( 

<body class="loginbody">
     <div className="container-fluid">
      
<h1 class="titre">Enregistrement</h1>

<form>
  <div class="container">
    <p>Complétez ce formulaire pour créer un compte.</p>
    <p>Pseudo</p>
    <input type="text" placeholder="pseudo" name="pseudo" required></input>
    <p>Email</p>
    <input type="text" placeholder="Entrer Email" name="email" required></input>
    <p>Mot de passe</p>
    <input type="password" placeholder="Entrer Mot de passe" name="psw" required></input>
    <p>Mot de passe</p>
    <input type="password" placeholder="Répéter Mot de passe" name="psw-repeat" required></input>
    <div class="clearfix">
      <button type="submit" class="signupbtn">Enregistrement</button>
    </div>
    <p></p>
    <p>En créant un compte vous acceptez nos <a href="/tandp" >Terms & Privacy</a>.</p>
    <p>Connectez vous pour lancer votre session : <a href="/login" >Login</a>.</p> 
    


    </div>
</form>
       </div>
       </body>
     );
  }
}

export default RegisterPage;