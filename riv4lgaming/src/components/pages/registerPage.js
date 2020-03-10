import React,  {Component} from 'react';

class RegisterPage extends Component {
  render() {
     return ( 

<body class="loginbody">
     <div className="container-fluid">
      
<h1 class="titre">Enregistrement</h1>

<form>
  <div class="container">
    <p>Please fill in this form to create an account.</p>
    <p>username</p>
    <input type="text" placeholder="username" name="username" required></input>
    <p>email</p>
    <input type="text" placeholder="Enter Email" name="email" required></input>
    <p>password</p>
    <input type="password" placeholder="Enter Password" name="psw" required></input>
    <p>password</p>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
    <p></p>
    <p>By creating an account you agree to our <a href="/tandp" >Terms & Privacy</a>.</p>
    <p>Sign in to start your session <a href="/login" >Login</a>.</p> 
    


    </div>
</form>
       </div>
       </body>
     );
  }
}

export default RegisterPage;