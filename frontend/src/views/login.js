import React from 'react'
import Card from '../components/cards'
import FormGroup from '../components/form-groups'
import { withRouter } from 'react-router-dom'
import CadastroService from '../app/service/cadastroService'
import LocalStorageService from '../app/service/localStorageService'
import { mensagemErro } from '../components/toastr'

class Login extends React.Component{
    state = {
        tipoCadastro: '',
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
            senha: this.state.senha,
            
        }).then(response => {
           LocalStorageService.adicionarItem('_usuario_logado', response.data)   
          console.log(response.data)         
         
            if(response.data.tipoCadastro === "ADMIN"){
             return this.props.history.push('/admin')
             
            }                
                return this.props.history.push('/home')
                
         
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
           
            <div className ="row box-shadow">
            <div className = "col-md-5">
                <div className ="row">
                    <img src = "/assets/img/logosedinctblapis.jpg" className="img-fluid img-thumbnail imgLog" />
                </div>
                    <div className ="row">
                        <span onClick={this.prepareCadastrar} className="text-center cursorPointer">
                            <h5>Cadastrar-se <i className="pi pi-user-plus" 
                            style={{'fontSize': '0.9em'}} ></i></h5></span>    
                    </div>

            </div>
                <div className ="col-md-7 col-sm-12 ">
                   <div className="card text-white loginBox" >
                                    <div className="card-header bg-primary text-center"><h3>Login</h3></div>
                                    <div className="card-body">
                                    <div className="col-sm-12">
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