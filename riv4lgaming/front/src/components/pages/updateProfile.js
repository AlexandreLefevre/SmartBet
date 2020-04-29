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
    nom: "",
    prenom: "",
    pseudo: "",
    nationalite: "",
    ville: "",
    dateNaissance: "",
    description: "",
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

  updatDateNaissance = (e) => {
    //console.log(e.target.value);
    this.setState({dateNaissance: e.target.value});
  }

  updatDescription = (e) => {
    //console.log(e.target.value);
    this.setState({description: e.target.value});
  }

  updateUser = (e) => {
    e.preventDefault()
    console.log("user update");
    axios({
      method: 'put',
      url: 'http://localhost:4000/profile',
      data: {
        nom: this.state.nom,
        prenom: this.state.prenom,
        pseudo: this.state.pseudo,
        nationalite: this.state.nationalite,
        ville: this.state.ville,
        dateNaissance: this.state.dateNaissance,
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
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nom"
                  label="Nom"
                  rules={[{ required: true, message: 'Entrer votre Nom' }]}
                >
                  <Input placeholder="Entrer votre Nom" onChange={this.updatNom} />
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
              <Col span={12}>
                <Form.Item
                  name="dateNaissance"
                  label="Date de naissance"
                  rules={[{ required: true, message: 'Entrer votre date de naissance' }]}
                >
                  <DatePicker
                    style={{ width: '100%' }} onChange={this.updatDateNaissance}
                  />
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
                </Form.Item>
                <Form.Item
        name="avatar"
        label="Avatar"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="insérer une image de profil"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </Drawer>
        );
    }
}

export default updateProfile