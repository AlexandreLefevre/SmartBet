import React,  {Component} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch,
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
import Termandprivacy from './components/pages/termandprivacy';


//include
import "./Assets/CSS/default.css";
import "./Assets/CSS/footer.css";
import "./Assets/CSS/body.css";
import "./Assets/CSS/cache.css";
import "./Assets/CSS/login.css";
import { initialize, set, pageview } from 'react-ga';
initialize('UA-161704283-1', {
  debug: true,
  siteSpeedSampleRate: 100,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});
const logPageView = () => {
  set({ page: window.location.pathname });
  pageview(window.location.pathname);
  return null;
};

class App extends Component {
  render() {
    logPageView();
     return (
       <Router >
       <div className="App">

         <Header />
         <Route path="/" component={logPageView} />
         <Switch>
         <Route exact path='/' component= {Homepage} />      
         <Route exact path='/login' component= {LoginPage} />
         <Route exact path='/register' component= {RegisterPage} />
         <Route exact path='/profile' component= {Profile} />
         <Route exact path='/forum' component= {Forum} />
         <Route exact path='/tournois' component= {Tournois} />
         <Route exact path='/cache' component= {cache} />
         <Route exact path='/faq' component= {Faq} />
         <Route exact path='/tandp' component= {Termandprivacy} />
         </Switch>
        

         <Footer />

       </div>
       </Router>
     );
  }
}

export default App;
