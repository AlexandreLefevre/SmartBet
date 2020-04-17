import React,  {Component} from 'react'
import axios from 'axios'
import { connect } from "react-redux"; 
import { Cookies } from 'react-cookie'


class LoginPage extends Component {
  state = {
    email : "",
    password : "",
    error: "",
  }
  updatEmail = (e) => {
    console.log(e.target.value);
    this.setState({email:e.target.value});
  }

  updatPassword = (e) => {
    console.log(e.target.value);
    this.setState({password:e.target.value});
  }

  loginAccount = (e) => {
    e.preventDefault()
    console.log("login account", this.state.email, this.state.password);
    axios({
      method: 'get',
      url: `http://localhost:4000/loginAccount?email=${this.state.email}&password=${this.state.password}`,
    })
  .then((response) => {
    console.log(response);
    this.setState({error: ""})
    this.props.dispatch({
      type: "loginUser", 
      data: response.data.user,
    })       
    const cookies = new Cookies()
    cookies.set('token', response.data.token, {
    path: '/',
    httpOnly: false,
})
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
       
      <h1 class="titre">Connexion</h1>
 
 <form handleSubmit={this.loginAccount}>
   <div class="container">
     <p>Connexion</p>
     <p>Email</p>
     <input type="text" placeholder="Email" name="email" required onChange={this.updatEmail}></input>
     <p>Mot de passe</p>
     <input type="password" placeholder="Entrer mot de passe" name="psw" required onChange={this.updatPassword}></input>
     <p>Enregistrer un nouveau membre :  <a href="/register" >Enregistrement</a>.</p>
     <p style={{color: "red"}}>{this.state.error}</p>
    <button type="submit" onClick={this.loginAccount}>Connexion</button>
     </div>
 </form>
        </div>
        </body>

     );
  }
}

const mapDispatchToProps = dispatch => {
      return {dispatch}
}


export default connect (null, mapDispatchToProps) (LoginPage);
