import React from 'react'
import Card from '../components/cards'
import FormGroup from '../components/form-groups'
import { withRouter } from 'react-router-dom'
import CadastroService from '../app/service/cadastroService'
import LocalStorageService from '../app/service/localStorageService'
import { mensagemErro } from '../components/toastr'

class Login extends React.Component{
    state = {
        nomeUsuario: '',
        senha: '',
    }
    constructor(){
        super();
        this.service = new CadastroService();

    }
    entrar = () => {

         this.service.autenticar({
            nomeUsuario: this.state.nomeUsuario,
            senha: this.state.senha
        }).then(response => {
           LocalStorageService.adicionarItem('_usuario_logado', response.data)
           this.props.history.push('/home')
           console.log(response)
            
        }).catch( erro => {
            mensagemErro(erro.response.data.message)
            console.log(erro.response.data.message)
        })
     
    }
//Prepara o form de cadastro
//Navagação por botão
     prepareCadastrar = () =>{
            this.props.history.push('/cadastroUsuario')
     }
    render(){
        return(
           <>         

            <div className ="row">
            <div className ="col-md-6" style ={ {position : 'relative', left: '300px'} }>
            <div className="card text-white" >
                                <div className="card-header bg-primary text-center"><h3>Login</h3></div>
                                <div className="card-body">
                                <div className="col-lg-12">
                                       <div className="bs-components">
                                       <fieldset>
                                           <FormGroup label ="Usuário *" htmlFor="nomeUsuario">
                                               
                                 <input value={this.state.nomeUsuario} 
                                               onChange={e => this.setState({nomeUsuario: e.target.value})}
                                               type = "text" className ="form-control"
                                               aria-describedby="nomeUsuariolHelp" id = "nomeUsuarioId" 
                                               placeholder="Digite o nome de usuário"/>                                     
                                           </FormGroup>

                                           <FormGroup label ="Senha *" htmlFor ="passwordId">
                                               <input type = "password" 
                                                       value = {this.state.senha}
                                                        onChange = {e => this.setState({senha: e.target.value})}
                                                       className ="form-control"
                                                       id = "passwordId"
                                                       placeholder="password"/>                                     
                                           </FormGroup>
                                           <div className = "mt-3">
                                           <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                           &nbsp;&nbsp;&nbsp;   
                                           <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>
                                           </div>
                                        </fieldset>
                                       </div>
                                    </div>
                                </div>
                                </div>
            </div>
            </div>
       </>
        )
        
    }
}

export default withRouter ( Login )