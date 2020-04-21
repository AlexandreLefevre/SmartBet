import React,  {Component} from 'react'
import{ Link }  from 'react-router-dom'
import { PageHeader, Menu } from "antd"
import { MailOutlined, AppstoreOutlined, SettingOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

class Header extends Component {
  render() {
     return(
      <PageHeader>
        <Menu mode="horizontal">
            <Menu.Item>  
              <Link to="/">Accueil</Link> 
            </Menu.Item>
            <Menu.Item>
              <Link to="/commu">Communauté</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/tournois">Tournois</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">Login / Register</Link>
            </Menu.Item>
            <SubMenu title={<>
                <UserOutlined />
                   Profil
                </>
            }>
                
                  <Menu.Item key="setting:1"><Link to="/profile">Profil</Link></Menu.Item>
                  <Menu.Item key="setting:2"><Link to="/donneesJ">Données Jeux</Link></Menu.Item>
                  <Menu.Item key="setting:3"><Link to="/histo">Historique</Link></Menu.Item>
                  <Menu.Item key="setting:4"><LoginOutlined />Déconnexion</Menu.Item>
            </SubMenu>
        </Menu>
      </PageHeader>
 
     );
  }
}

export default Header;