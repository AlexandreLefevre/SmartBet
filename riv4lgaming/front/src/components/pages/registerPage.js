import React,  {Component} from 'react'
import axios from 'axios'
import { Form, Input, Button, Row, Col } from 'antd'

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
    //console.log("création account", this.state.email, this.state.pseudo);
    axios({
      method: 'post',
      url: 'http://35.180.238.11:4000/createAccount',
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
      <body>
        <div>
        <Row>
          <Col flex="100px"></Col>
          <Col flex="auto">
          <h1 >Enregistrement</h1>
            <Form handleSubmit={this.creatAccount}>
              <div >
                <p>Complétez ce formulaire pour vous créer un compte.</p>
                <p>Pseudo</p>
                <Input type="text" placeholder="pseudo" name="pseudo" required onChange={this.updatPseudo}></Input><br /><br />
                <p>Email</p>
                <Input type="text" placeholder="Entrer Email" name="email" required onChange={this.updatEmail}></Input><br /><br />
                <p>Mot de passe</p>
                <Input type="password" placeholder="Entrer votre mot de passe" name="psw" required onChange={this.updatPassword}></Input><br /><br />
                <p>Confirmation Mot de passe</p>
                <Input type="password" placeholder="Répéter votre mot de passe" name="psw-repeat" required onChange={this.updatPasswordVerify}></Input><br /><br />
                <div >
                  <Button type="primary" htmlType="submit" onClick={this.creatAccount}>Enregistrement</Button>
                </div>
                <p style={{color: "red"}}>{this.state.error}</p>
                <p>En créant un compte vous acceptez nos <a href="/tandp" >Terms & Privacy</a>.</p>
                <p>Connectez vous pour lancer votre session : <a href="/login" >Connexion</a>.</p> 
              </div>
            </Form>
          </Col>
        </Row>
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