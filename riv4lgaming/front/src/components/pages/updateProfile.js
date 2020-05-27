import React, {Component} from 'react'
import { Drawer, Form, Button, Col, Row, Input, Upload, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

class updateProfile extends Component {
    state = { visible: true };

  state = {
    nom: this.state.nom || "",
    prenom: this.state.prenom || "",
    pseudo: this.state.pseudo || "",
    nationalite: this.state.nationalite || "",
    ville: this.state.ville || "",
    description: this.state.description || "",
}

shouldComponentUpdate(nextProps, nextState) {
  if(this.props.user !== nextProps.user){
    this.setState({nom: this.state.nom || "",
    prenom: this.state.prenom || "",
    pseudo: this.state.pseudo || "",
    nationalite: this.state.nationalite || "",
    ville: this.state.ville || "",
    description: this.state.description || "",})
  }
  return true
}


onClose = () => {
  this.setState({
    visible: false,
  });
};

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  updatNom = (e) => {
    //console.log(e.target.value);
    this.setState({nom: e.target.value});
  }

  updatPrenom = (e) => {
    //console.log(e.target.value);
    this.setState({prenom: e.target.value});
  }

  updatPseudo = (e) => {
    //console.log(e.target.value);
    this.setState({pseudo: e.target.value});
  }

  updatNationalite = (e) => {
    //console.log(e.target.value);
    this.setState({nationalite: e.target.value});
  }

  updatVille = (e) => {
    //console.log(e.target.value);
    this.setState({ville: e.target.value});
  }

  updatDescription = (e) => {
    //console.log(e.target.value);
    this.setState({description: e.target.value});
  }

  updateUser = (e) => {
    e.preventDefault()
    //console.log("user update");
    axios({
      method: 'put',
      url: 'http://35.180.238.11:4000/profile',
      data: {
        email: this.props.user.email,
        nom: this.state.nom,
        prenom: this.state.prenom,
        pseudo: this.state.pseudo,
        nationalite: this.state.nationalite,
        ville: this.state.ville,
        description: this.state.description,
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

render () {
    return (
        <Drawer
          title="Modifier vos information"
          width={720}
          onClose={this.props.onClose}
          visible={this.props.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={this.onClose}
                style={{ marginRight: 8 }}
              >
              Fermer
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark initialValues={{
            nom: this.state.nom,
            prenom: this.state.prenom,
            pseudo: this.state.pseudo,
            nationalite: this.state.nationalite,
            ville: this.state.ville,
            description: this.state.description,
          }}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nom"
                  label="Nom"
                  rules={[{ required: true, message: 'Entrer votre Nom' }]}
                >
                  <Input placeholder="Entrer votre Nom" value={this.state.nom} onChange={this.updatNom} />
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                  name="prenom"
                  label="Prénom"
                  rules={[{ required: true, message: 'Entrer votre prénom' }]}
                >
                  <Input placeholder="Entrer votre prénom" onChange={this.updatPrenom}/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nationalite"
                  label="Nationalité"
                  rules={[{ required: true, message: 'Entrer votre nationalité' }]}
                >
                  <Input placeholder="Entrer votre nationalité" onChange={this.updatNationalite}/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="ville"
                  label="Ville"
                  rules={[{ required: true, message: 'Entrer votre lieu de résidence' }]}
                >
                  <Input placeholder="Entrer votre lieu de résidence" onChange={this.updatVille} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="pseudo"
                  label="Pseudo"
                  rules={[{ required: true, message: 'Entrer votre pseudo' }]}
                >
                  <Input placeholder="Entrer votre pseudo" onChange={this.updatPseudo}/>
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
                  ]}
                > 
                  <Input.TextArea rows={4} placeholder="Entrer une description du style de joueur que vous êtes." onChange={this.updatDescription} />
                  <Button type="primary" htmlType="submit" onClick={this.updateUser}>Mettre à jour le profil.</Button>
                </Form.Item>
              </Col>
            </Row>
        </Form>
    </Drawer>
        );
    }
}

export default updateProfile