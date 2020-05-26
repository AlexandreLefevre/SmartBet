import React,  {Component} from 'react'
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
}  from 'react-router-dom'
import { Provider } from "react-redux"
import { createStore, compose } from "redux"
import rootReducer from "./reducers/rootReducer"
import { CookiesProvider} from 'react-cookie'



//components
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import LoginPage from './components/pages/loginPage'
import DonneesJeux from './components/pages/donneesJeux'
import Histo from './components/pages/histo'
import RegisterPage from './components/pages/registerPage'
import Profile from './components/pages/profile'
import Commu from './components/pages/commu'
import Tournois from './components/pages/tournois'
import cache from './components/pages/cache'
import Faq from './components/pages/faq'
import Termandprivacy from './components/pages/termandprivacy'
import VerifEmail from './components/pages/verifEmail'
import createTournament from './components/pages/createTournament'
import Middleware from './components/middleware/index'
import TournoisPool from './components/pages/tournoiPool'


//include
import 'antd/dist/antd.css'
import { initialize, set, pageview } from 'react-ga'
import './CSS/_config.css'

const store = createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

initialize('UA-161704283-1', {
  debug: false,
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
       <Provider store ={store}>
       <CookiesProvider>
       <Router >
       <div className="App">
        <Middleware>
         <Header />
         <Route path="/" component={logPageView} />
         <Switch>
         <Route exact path='/' component= {Homepage} />
         <Route exact path='/login' component= {LoginPage} />
         <Route exact path='/register' component= {RegisterPage} />
         <Route exact path='/donneesJ' component= {DonneesJeux} />
         <Route exact path='/histo' component= {Histo} />
         <Route exact path='/profile' component= {Profile} />
         <Route exact path='/commu' component= {Commu} />
         <Route exact path='/tournois' component= {Tournois} />
         <Route exact path='/tournois/:id' component={TournoisPool} />
         <Route exact path='/cache' component= {cache} />
         <Route exact path='/faq' component= {Faq} />
         <Route exact path='/tandp' component= {Termandprivacy} />
         <Route exact path='/verifEmail' component= {VerifEmail} />
         <Route exact path='/createTournament' component= {createTournament} />
         </Switch>


         <Footer />
         </Middleware>
       </div>

       </Router>
       </CookiesProvider>
       </Provider>
     );
  }
}

export default App;
