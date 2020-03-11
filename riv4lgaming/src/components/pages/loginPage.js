import React,  {Component} from 'react';

class LoginPage extends Component {
  render() {
     return (
      <body class="loginbody">
      <div className="container-fluid">
       
      <h1 class="titre">Connection</h1>
 
 <form>
   <div class="container">
     <p>Connection</p>
     <p>Pseudo</p>
     <input type="text" placeholder="username" name="username" required></input>
     <p>Mot de passe</p>
     <input type="password" placeholder="Enter Password" name="psw" required></input>
     <p>Enregistrer un nouveau membre :  <a href="/register" >Enregistrement</a>.</p>
 
     </div>
 </form>
        </div>
        </body>

     );
  }
}

export default LoginPage;