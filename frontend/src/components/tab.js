import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Videoplayer from './videplayer';
import AtualizarPerfil from '../views/atualizarPerfil';

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
            <i className="pi pi-youtube"></i> Cursos realizados
          </NavLink>
        </NavItem>
        <NavItem className ="texto">
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
                <i className="pi pi-book"></i> Certificados
          </NavLink>
        </NavItem>

      </Nav>


      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="6">
            <Card body>
                <CardTitle>Titulo Aula</CardTitle>
                <CardText>
                 < Videoplayer />
                </CardText>
              </Card>
            </Col>

            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>Go somewhere</Button>
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
              <h4>A página “Produtos e serviços” é o âmago de seu site empresarial. Aqui, qualquer detalhe pode pesar bastante para a tomada de decisão do visitante.</h4>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row >
            <Col sm="12" >
            <Card body>
                <CardTitle>Casos de sucesso</CardTitle>
                <CardText>A página “Produtos e serviços” é o âmago de seu site empresarial. Aqui, qualquer detalhe pode pesar bastante para a tomada de decisão do visitante.
Tenha em mente que a maioria das pessoas não entende de jargões técnicos. Assim, especificar seu produto utilizando termos científicos demais pode ser uma péssima ideia — a não ser que seu público-alvo seja de especialistas em alguma área do conhecimento.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>


      
    </div>
  );
}

export default Tab;