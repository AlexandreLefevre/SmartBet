import React,  {Component} from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

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
        <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Nom-Prénom"
                  rules={[{ required: true, message: 'Entrer votre Nom Prenom' }]}
                >
                  <Input placeholder="Entrer votre Nom Prenom" />
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                  name="username"
                  label="Pseudo"
                  rules={[{ required: true, message: 'Entrer votre pseudo' }]}
                >
                  <Input placeholder="Entrer votre pseudo" />
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
                  <Input placeholder="Entrer votre nationalité" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="ville"
                  label="Ville"
                  rules={[{ required: true, message: 'Entrer votre lieu de résidence' }]}
                >
                  <Input placeholder="Entrer votre lieu de résidence" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="tel"
                  label="Téléphone"
                  rules={[{ required: true, message: 'Entrer votre numéro de téléphone' }]}
                >
                  <Input placeholder="Entrer votre numero de téléphone" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateNaissance"
                  label="Date de naissance"
                  rules={[{ required: true, message: 'Entrer votre date de naissance' }]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    
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
                  <Input.TextArea rows={4} placeholder="Entrer une description du style de joueur que vous êtes." />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        <Button type="primary" onClick={this.showDrawer}>
           Modifier
        </Button>
        <Drawer
          title="Modifier vos information"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
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
                  name="name"
                  label="Nom-Prénom"
                  rules={[{ required: true, message: 'Entrer votre Nom Prenom' }]}
                >
                  <Input placeholder="Entrer votre Nom Prenom" />
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item
                  name="username"
                  label="Pseudo"
                  rules={[{ required: true, message: 'Entrer votre pseudo' }]}
                >
                  <Input placeholder="Entrer votre pseudo" />
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
                  <Input placeholder="Entrer votre nationalité" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="ville"
                  label="Ville"
                  rules={[{ required: true, message: 'Entrer votre lieu de résidence' }]}
                >
                  <Input placeholder="Entrer votre lieu de résidence" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="tel"
                  label="Téléphone"
                  rules={[{ required: true, message: 'Entrer votre numéro de téléphone' }]}
                >
                  <Input placeholder="Entrer votre numero de téléphone" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateNaissance"
                  label="Date de naissance"
                  rules={[{ required: true, message: 'Entrer votre date de naissance' }]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    
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
                  <Input.TextArea rows={4} placeholder="Entrer une description du style de joueur que vous êtes." />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </Col>
      </Row>
      </body>
    );
  }
}

export default Profile;