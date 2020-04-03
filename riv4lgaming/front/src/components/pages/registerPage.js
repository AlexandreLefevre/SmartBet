import React,  {Component} from 'react'
import axios from 'axios'

class RegisterPage extends Component {
  state = {
    email : "",
    password : "",
    pseudo : "",
  }

  updatEmail = (e) => {
    //console.log(e.target.value);
    this.setState({email: e.target.value});
  }

  updatPseudo = (e) => {
    //console.log(e.target.value);
    this.setState({pseudo: e.target.value});
  }

  updatPassword = (e) => {
    //console.log(e.target.value);
    this.setState({password: e.target.value});
  }

  updatPasswordVerify = (e) => {
    this.setState({passwordVerify: e.target.value})
  }

  creatAccount = (e) => {
    e.preventDefault()
    console.log("création account", this.state.email, this.state.pseudo);
    axios({
      method: 'post',
      url: 'http://localhost:4000/createAccount',
      data: {
        email: this.state.email,
        password: this.state.password,
        pseudo: this.state.pseudo,
        passwordVerify: this.state.passwordVerify,
      }
    })
  .then((response) => {
    console.log(response)
    this.setState({error: ""})
  })
  .catch(r => {
    if (r.response){
        this.setState({
        error: r.response.data
        })
      }
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
    <input type="password" placeholder="Répéter votre mot de passe" name="psw-repeat" required onChange={this.updatPasswordVerify}></input>
    <div class="clearfix">
      <button type="submit" class="signupbtn" onClick={this.creatAccount}>Enregistrement</button>
    </div>
    <p style={{color: "red"}}>{this.state.error}</p>
    <p>En créant un compte vous acceptez nos <a href="/tandp" >Terms & Privacy</a>.</p>
    <p>Connectez vous pour lancer votre session : <a href="/login" >Connexion</a>.</p> 
    


    </div>
</form>
       </div>
       </body>
     );
  }
}
/*
sendEmail (name, email, message) {
  fetch('/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then((res) => res.json())
  .then((res) => {
    console.log('here is the response: ', res);
  })
  .catch((err) => {
    console.error('here is the error: ', err);
  })
 }
*/
export default RegisterPage;