import React,  {Component} from 'react'
import axios from 'axios'

class RegisterPage extends Component {
  state = {
    email : "",
    password : "",
    pseudo : "",
  }

  updatEmail = (e) => {
    console.log(e.target.value);
    this.setState({email:e.target.value});
  }

  updatPseudo = (e) => {
    console.log(e.target.value);
    this.setState({pseudo:e.target.value});
  }

  updatPassword = (e) => {
    console.log(e.target.value);
    this.setState({password:e.target.value});
  }

  creatAccount = (e) => {
    e.preventDefault()
    console.log("création account", this.state.email, this.state.password, this.state.pseudo);
    axios.get(`http://localhost:4000/createAccount?email=${this.state.email}&password=${this.state.pseudo}&pseudo=${this.state.password}`)
  .then((response) => {
    console.log(response);

  })
  }
  render() {
     return ( 

<body class="loginbody">
     <div className="container-fluid">
      
<h1 class="titre">Enregistrement</h1>

<form handleSubmit={this.creatAccount}>
  <div class="container">
    <p>Complétez ce formulaire pour créer un compte.</p>
    <p>Pseudo</p>
    <input type="text" placeholder="pseudo" name="pseudo" required onChange={this.updatPseudo}></input>
    <p>Email</p>
    <input type="text" placeholder="Entrer Email" name="email" required onChange={this.updatEmail}></input>
    <p>Mot de passe</p>
    <input type="password" placeholder="Entrer votre mot de passe" name="psw" required onChange={this.updatPassword}></input>
    <p>Confirmation Mot de passe</p>
    <input type="password" placeholder="Répéter votre mot de passe" name="psw-repeat" required></input>
    <div class="clearfix">
      <button type="submit" class="signupbtn" onClick={this.creatAccount}>Enregistrement</button>
    </div>
    <p></p>
    <p>En créant un compte vous acceptez nos <a href="/tandp" >Terms & Privacy</a>.</p>
    <p>Connectez vous pour lancer votre session : <a href="/login" >Connexion</a>.</p> 
    


    </div>
</form>
       </div>
       </body>
     );
  }
}

export default RegisterPage;

