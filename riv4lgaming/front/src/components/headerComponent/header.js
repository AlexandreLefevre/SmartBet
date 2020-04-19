import React,  {Component} from 'react'
import{ Link }  from 'react-router-dom'
import { PageHeader, Menu } from "antd"

class Header extends Component {
  render() {
     return(

      <PageHeader>
        <Menu mode="horizontal">
            <Menu.Item>  
              <Link to="/">Accueil</Link> 
            </Menu.Item>
            <Menu.Item>
              <Link to="/forum">Forum</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/tournois">Tournois</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">Login / Register</Link>
            </Menu.Item>
        </Menu>
      </PageHeader>
 
     );
  }
}

export default Header;