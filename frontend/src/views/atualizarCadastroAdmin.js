import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/cards'
import FormGroup from '../components/form-groups'
import CadastroService from '../app/service/cadastroService'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import InputMask from 'react-input-mask';
import DatePicker from 'react-date-picker'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


class AtualizarCadastroAdmin extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            nomeCompleto : '',
            email : '',
            dataNasc : '',
            cpf : '',
            nomeUsuario : '',
            senha : '',
            senhaRepeticao : ''
    }
        
    this.cadastroService = new CadastroService();
}


    state ={
        dataNasc: new Date()
    }
   initialState = { date: new Date()}
         
        componentDidMount(){
          
            
            this.cadastroService.getUsuarioPorId(this.state.id).then( (res) =>{
                let cadastro = res.data;
                console.log(cadastro)
                console.log(this.state.id)
                this.setState({nomeCompleto: cadastro.nomeCompleto,
                    email: cadastro.email,
                    nomeUsuario : cadastro.nomeUsuario,
                    cpf : cadastro.cpf
                });
            });
        }

        handleChange = (event) =>{
            const value = event.target.value;
            const name = event.target.name;

            this.setState({[name] : value})
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

    

    cancelar = () => {
        this.props.history.push('/admin')
    }


    editar = () =>{
      
        let cadastro = {nomeCompleto: this.state.nomeCompleto, email: this.state.email, nomeUsuario : this.state.nomeUsuario,
        cpf: this.state.cpf, dataNasc: this.state.dataNasc, id : this.state.id};

        this.cadastroService.atualizarCadastro(cadastro, this.state.id).then(response =>
            {
                mensagemSucesso('Cadastro atualizado com sucesso!!')
            }).catch(error => {
                mensagemErro('Cadastro não atualizado, tente de novo')
            })
        
    }

    render(){
        
        return (
               <>
                <Navbar/>   
             <div className ="container paddinTop">            
                    <div className="alert alert-primary text-center" role="alert">
                        <h4>Atualizar Cadastro</h4>
                    </div>
             
                    <Card>
                        <div className="row">
                            <div className = "col-lg-6">
                                <FormGroup label = "Nome completo" htmlFor="inputNomeCompleto">
                                        <input type ="text" id= "inputNomeCompleto" name ="nomeCompleto"
                                        className="form-control"
                                        value = {this.state.nomeCompleto}
                                        onChange={this.handleChange}/>
                                    </FormGroup>
                            </div>
                            <div className ="col-lg-5">
                                <FormGroup label = "Email" htmlFor="inputEmail"> <input type ="text" id= "inputEmail"
                                            name ="email" className="form-control"
                                            value = {this.state.email}
                                            onChange={this.handleChange}/>
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
                                            value = {this.state.cpf}
                                            onChange={this.handleChange}/>
                                            
                            </FormGroup>  
                                
                                
                              </div>

                        <div className = "col-lg-4">
                            <FormGroup label = "Nome de usuário" htmlFor="inputNomeUsuario">
                                        <input type ="text" id= "inputNomeUsuario" name ="nomeUsuario"                                   className="form-control"
                                        value = {this.state.nomeUsuario}
                                        onChange={this.handleChange}/>
                            </FormGroup>
                        </div>

                        <div className ="col-lg-4">
                                <FormGroup label = "Senha" htmlFor="inputSenha">
                                    <input type ="password"
                                    id= "inputSenha"
                                    name ="senha"
                                    className="form-control"
                                    value = {this.state.senha}
                                    onChange={this.handleChange}/>
                                </FormGroup>
                        </div>     
                        
                        <div className ="col-lg-4">
                                <FormGroup label = "Repita a senha" htmlFor="inputSenhaRepeticao">
                                    <input type ="password"
                                    id= "inputSenhaRepeticao"
                                    name ="senhaRepeticao"
                                    className="form-control"
                                    value = {this.state.senhaRepeticao}
                                            onChange={this.handleChange}/>
                                </FormGroup>
                        </div>      

                        
                        </div>
                        <div className="row p-2">
                               <div className ="col-lg-6">
                                    <button onClick={this.editar} className="btn btn-success">Atualizar</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={this.cancelar} className="btn btn-danger" >Voltar</button>
                               </div>
                        </div>

                    </Card>
                    </div>
                    <div className ="row paddinTop">
                        <Footer/>
                    </div>
                </>
        )
    }
}
export default withRouter(AtualizarCadastroAdmin)