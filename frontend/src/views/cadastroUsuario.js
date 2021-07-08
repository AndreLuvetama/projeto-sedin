import React from 'react'
import Card from '../components/cards'
import FormGroup from '../components/form-groups'

class CadastroUsuario extends React.Component{
    state = {
        nome : '',
        email : '',
        senha : '',
        senhaRepeticao : ''
    }
    cadastrar = () =>{
        
    }
    render(){
        return (
                <div className ="container">
                    <Card title ="Cadastro de Usuário">
                        <div className="row">
                            <div className = "col-lg-12">
                                <FormGroup label = "Nome" htmlFor="inputNome">
                                    <input type ="text"
                                    id= "inputNome"
                                    name ="nome"
                                    className="form-control"
                                    onChange={e => this.setState({nome: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label = "Email" htmlFor="inputEmail">
                                    <input type ="email"
                                    id= "inputEmail"
                                    name ="email"
                                    className="form-control"
                                    onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label = "Senha" htmlFor="inputSenha">
                                    <input type ="password"
                                    id= "inputSenha"
                                    name ="senha"
                                    className="form-control"
                                    onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>

                                <FormGroup label = "Repita a senha" htmlFor="inputSenhaRepeticao">
                                    <input type ="password"
                                    id= "inputSenhaRepeticao"
                                    name ="senhaRepeticao"
                                    className="form-control"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                                </FormGroup>
                                <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                                <button className="btn btn-danger">Cancelar</button>
                           </div>
                        </div>
                    </Card>

                </div>

        )
    }
}
export default CadastroUsuario