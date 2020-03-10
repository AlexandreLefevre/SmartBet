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
import Page111 from './components/pages/111Page';
import Page222 from './components/pages/222Page';



//include
import "./Assets/CSS/default.css";
import "./Assets/CSS/footer.css";
import "./Assets/CSS/body.css"

class App extends Component {
  render() {
     return (
       <Router>
       <div className="App">

         <Header />

         <Route exact path='/' component= {Homepage} />      
         <Route exact path='/login' component= {LoginPage} />
         <Route exact path='/111' component= {Page111} />
         <Route exact path='/222' component= {Page222} />

         <Footer />

       </div>
       </Router>
     );
  }
}

export default App;
