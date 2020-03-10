import React,  {Component} from 'react';

class LoginPage extends Component {
  render() {
     return (
      <body class="loginbody">
      <div className="container-fluid">
       
      <h1 class="titre">Login</h1>
 
 <form>
   <div class="container">
     <p>Sign in to start your session.</p>
     <p>username</p>
     <input type="text" placeholder="username" name="username" required></input>
     <p>password</p>
     <input type="password" placeholder="Enter Password" name="psw" required></input>
     <p>Register a new membership <a href="/register" >Register</a>.</p>
 
     </div>
 </form>
        </div>
        </body>

     );
  }
}

export default LoginPage;