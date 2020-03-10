import React,  {Component} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link 
}  from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import LoginPage from './components/pages/loginPage';
import RegisterPage from './components/pages/registerPage';
import Profile from './components/pages/profile';
import Forum from './components/pages/forum';
import Tournois from './components/pages/tournois';
import cache from './components/pages/cache';
import Faq from './components/pages/faq';


//include
import "./Assets/CSS/default.css";
import "./Assets/CSS/footer.css";
import "./Assets/CSS/body.css";
import "./Assets/CSS/cache.css";

class App extends Component {
  render() {
     return (
       <Router>
       <div className="App">

         <Header />

         <Route exact path='/' component= {Homepage} />      
         <Route exact path='/login' component= {LoginPage} />
         <Route exact path='/register' component= {RegisterPage} />
         <Route exact path='/profile' component= {Profile} />
         <Route exact path='/forum' component= {Forum} />
         <Route exact path='/tournois' component= {Tournois} />
         <Route exact path='/cache' component= {cache} />
         <Route exact path='/faq' component= {Faq} />

         <Footer />

       </div>
       </Router>
     );
  }
}

export default App;
