import React,  {Component} from 'react'
import { Form, Button, Col, Row, Input, DatePicker } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import UpdateProfile from "./updateProfile";


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class Profile extends Component {
  
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <body>
        <Row>
          <Col flex="100px"></Col>
          <Col flex="auto">
        <div>
           <Avatar size={64} icon={<UserOutlined />} />
        </div>
            <Form layout="vertical" hideRequiredMark  initialValues={{ 
              nom: this.state.nom,
              prenom: this.state.prenom,
              pseudo: this.state.pseudo,
              nationalite: this.state.nationalite,
              ville: this.state.ville,
              dateNaissance: this.state.dateNaissance,
              description: this.state.description,
               }} >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nom"
                  label="Nom"             
                  rules={[{ required: true, message: 'Entrer votre nom' }]} >
                  <Input placeholder="Entrer votre nom" disabled="disabled"/>
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                  name="prenom"
                  label="Prénom"
                  rules={[{ required: true, message: 'Entrer votre prénom' }]}>
                  <Input placeholder="Entrer votre prénom" disabled="disabled"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nationalite"
                  label="Nationalité"
                  rules={[{ required: true, message: 'Entrer votre nationalité' }]}>
                  <Input placeholder="Entrer votre nationalité" disabled="disabled"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="ville"
                  label="Ville"
                  rules={[{ required: true, message: 'Entrer votre lieu de résidence' }]}>
                  <Input placeholder="Entrer votre lieu de résidence" disabled="disabled"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="pseudo"
                  label="Pseudo"
                  rules={[{ required: true, message: 'Entrer votre pseudo' }]}>
                  <Input placeholder="Entrer votre pseudo" disabled="disabled"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateNaissance"
                  label="Date de naissance"
                  rules={[{ required: true, message: 'Entrer votre date de naissance' }]}>
                  <DatePicker style={{ width: '100%' }} disabled="disabled"/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'Entrer une description du style de joueur que vous êtes',
                    },
                  ]}>
                  <Input.TextArea rows={4} placeholder="Entrer une description du style de joueur que vous êtes." disabled="disabled"/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        <Button type="primary" onClick={this.showDrawer} >
           Modifier
        </Button>
        <UpdateProfile user={this.props.user} visible={this.state.visible} onClose={this.onClose} />
      </Col>
      </Row>
      </body>
    );
  }
}

export default connect (mapStateToProps) (Profile);