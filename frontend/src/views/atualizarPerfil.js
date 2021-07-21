import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/cards'
import FormGroup from '../components/form-groups'
import CadastroService from '../app/service/cadastroService'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import InputMask from 'react-input-mask';
import DatePicker from 'react-date-picker'

class AtulizarPerfil extends React.Component{

        state = {
        nomeCompleto : '',
        email : '',
        dataNasc : '',
        cpf : '',
        nomeUsuario : '',
        senha : '',
        senhaRepeticao : ''
    };

    state ={
        dataNasc: new Date()
    }
   initialState = { date: new Date()}
  

        constructor(){
                super()
                this.service = new CadastroService();
        }
        handleChange = (event) =>{
            const value = event.target.value;
            const name = event.target.name;
        }
        validar(){
           

            const msgs = []
                if(!this.state.nomeCompleto){
                    msgs.push('O campo nome é obrigatorio');
                }

                if(!this.state.email){
                    msgs.push('O campo email é obrigatorio');
                }else if( !this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ){
                    msgs.push('Informe um email valido');
                }

                if(!this.state.nomeUsuario){
                    msgs.push('O campo nome de usuário é obrigatorio');
                }
                if(!this.state.senha || !this.state.senhaRepeticao){
                    msgs.push('Digite a senha 2x');
                }else if(this.state.senha !== this.state.senhaRepeticao){
                    msgs.push('Senhas diferente, tente de novo');
                }

            return msgs;
        }

    cadastrar = () =>{

        const msgs = this.validar();
        if(msgs && msgs.length > 0){
            msgs.forEach( (msg, index)  => {
                mensagemErro(msg)
            });
            return false;
            
        }
        const cadastros = {
		    nomeCompleto: this.state.nomeCompleto,
		    nomeUsuario:  this.state.nomeUsuario,
		    email: this.state.email,
		    senha: this.state.senha,
		    dataNasc: this.state.dataNasc,
		    cpf: this.state.cpf
        }
        this.service.salvar(cadastros)
        .then(response => {
            mensagemSucesso(`Cadastro realizado com sucesso, faça o login para acessar o sistema.`)
            this.props.history.push('/login')
        }).catch( error =>{
            mensagemErro(error.response.data)
        })
        
    }

    cancelar = () => {
        this.props.history.push('/login')
    }
    render(){
        return (
               <>
               <div className ="alert alert-dark text-center">
                        <h4> Atualizar Cadastro</h4>
               </div>
                    <Card>
                        <div className="row">
                            <div className = "col-lg-6">
                                <FormGroup label = "Nome completo" htmlFor="inputNomeCompleto">
                                        <input type ="text" id= "inputNomeCompleto" name ="nomeCompleto"
                                        className="form-control"
                                        onChange={e => this.setState({nomeCompleto: e.target.value})}/>
                                    </FormGroup>
                            </div>
                            <div className ="col-lg-5">
                                <FormGroup label = "Email" htmlFor="inputEmail"> <input type ="email" id= "inputEmail"
                                            name ="email" className="form-control"
                                            onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>
                            </div>

                            <div className = "col-lg-3" >                        
                                <FormGroup label = "Data de nascimento" htmlFor="inputDataNasc"> 
                                    <DatePicker id= "inputDataNasc" 
                                            name ="date" className="form-control" 
                                            minDate = {new Date(1930, 0, 1)}
                                            maxDate = {new Date(2004, 12, 1)}
                                            value ={this.state.dataNasc}                                           
                                            onChange = {value => this.setState({dataNasc: value})} />                                                
                                </FormGroup>               
                            </div>

                            <div className = "col-lg-4">                        
                                                       
                            <FormGroup label = "Cpf" htmlFor="inputDataNasc"> <InputMask  mask="999.999.999-99"  type ="text" id= "inputCpf"
                                            name ="cpf" className="form-control"
                                            onChange={e => this.setState({cpf: e.target.value})}/>
                                            
                            </FormGroup>  
                                
                                
                              </div>

                        <div className = "col-lg-4">
                            <FormGroup label = "Nome de usuário" htmlFor="inputNomeUsuario">
                                        <input type ="text" id= "inputNomeUsuario" name ="nomeUsuario"                                   className="form-control"
                                        onChange={e => this.setState({nomeUsuario: e.target.value})}/>
                            </FormGroup>
                        </div>

                        <div className ="col-lg-4">
                                <FormGroup label = "Senha" htmlFor="inputSenha">
                                    <input type ="password"
                                    id= "inputSenha"
                                    name ="senha"
                                    className="form-control"
                                    onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>
                        </div>     
                        
                        <div className ="col-lg-4">
                                <FormGroup label = "Repita a senha" htmlFor="inputSenhaRepeticao">
                                    <input type ="password"
                                    id= "inputSenhaRepeticao"
                                    name ="senhaRepeticao"
                                    className="form-control"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                                </FormGroup>
                        </div>      

                        
                        </div>
                        <div className="row p-2">
                               <div className ="col-lg-6">
                                    <button onClick={this.cadastrar} className="btn btn-success">Atualizar</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={this.cancelar} className="btn btn-danger" >Cancelar</button>
                               </div>
                        </div>

                    </Card>
                </>
        )
    }
}
export default withRouter(AtulizarPerfil)