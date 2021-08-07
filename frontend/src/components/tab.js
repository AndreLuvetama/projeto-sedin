import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Videoplayer from './videplayer';
import AtualizarPerfil from '../views/atualizarPerfil';
import CursosRealizados from './cursosRealizados';
import CursosNaoRealizados from './cursosNaoRealizados';

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs className ="bg-primary">
        <NavItem className ="texto">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <p className ="text-"> <i className="pi pi-home"></i> Painel Principal</p>
          </NavLink>
        </NavItem>

        <NavItem className ="texto">        
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
             <i className="pi pi-user"></i> Meu Perfil
          </NavLink>
        </NavItem>

        <NavItem className ="texto">
        
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <i className="pi pi-youtube"></i>&nbsp;Cursos e Certificados
          </NavLink>
        </NavItem>
        <NavItem className ="texto">
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
                <i className="pi pi-book"></i> Cursos não realizados
          </NavLink>
        </NavItem>

      </Nav>


      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="8">
            <Card body>
                <CardText>
                 < Videoplayer />
                </CardText>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle><h5>Participa no chat</h5></CardTitle>
                <CardText>
                 <img src = "/assets/img/chat.jpg" className="img-fluid img-thumbnail" />
                </CardText>
                <Button>Envia a sua mensagem</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Card body>               
                     <AtualizarPerfil />
              </Card>
            </Col>
           
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="12">
             <CursosRealizados />
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row >
            <Col sm="12" >
            <CursosNaoRealizados />
            </Col>
          </Row>
        </TabPane>
      </TabContent>


      
    </div>
  );
}

export default Tab;