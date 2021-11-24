import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/cards'
import FormGroup from '../components/form-groups'
import CadastroService from '../app/service/cadastroService'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import InputMask from 'react-input-mask';
import DatePicker from 'react-date-picker'
import LocalStorageService from '../app/service/localStorageService'
import PresencaService from '../app/service/presencaService'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import baseService from '../app/service/baseService'

class MarcarPresenca extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            nomeCompleto : '',
            nomeUsuario : '',
           
    }
        this.cadastroService = new CadastroService();  
        this.presencaService = new PresencaService();   

       
        
    } 
        
    
    state = {
        id : '',
        nomeCompleto : '',
        dataCurso : '',
        idCurso : '',
        idCadastro : ''
        
       
    };

    state ={
        dataCurso: new Date()
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
        
   

        voltar = () => {
        this.props.history.push('/lancarPresenca')
    }
    validar(){          

        const msgs = []
            if(!this.state.idCurso){
                msgs.push('Informa o id do curso');
            }
           
            if(!this.state.dataCurso){
                msgs.push('Informe a data do curso');
            }
           

        return msgs;
    }

    cadastrarPresenca = (id) =>{
      

        const msgs = this.validar();
        if(msgs && msgs.length > 0){
            msgs.forEach( (msg, index)  => {
                mensagemErro(msg)
            });
            return false;
            
        }
        const presenca = {
		    idCadastro: id,
		    idCurso:  this.state.idCurso,
		    dataPresenca: this.state.dataCurso
		
        }
            
          this.presencaService.salvar(presenca)
        .then(response => {
            console.log(presenca);
            mensagemSucesso(`Presença cadastrada com sucesso.`)
            this.props.history.push('/lancarPresenca')
        }).catch( error =>{
            const { data } = error.response;
           console.log(presenca);
           mensagemErro(data.message)
          // alert(data.message);
        })
        
    }

    render(){
        
        return (
               <>
               <Navbar/>  
               <div className ="container paddinTop">    
               <div className ="alert alert-dark text-center">
                        <h4> Cadastrar Presença</h4>
               </div>
                    <Card>
                        <div className="row">
                            <div className = "col-lg-4">
                                <FormGroup label = "Nome completo" htmlFor="inputNomeCompleto">
                                        <input type ="text" id= "inputNomeCompleto" name ="nomeCompleto"
                                        className="form-control"
                                        value = {this.state.nomeCompleto}
                                         disabled={true}/>
                                    </FormGroup>
                            </div>
                            <div className ="col-lg-2">
                                <FormGroup label = "Id Cadastro" htmlFor="id"> <input type ="text" id= "id"
                                            name ="id" className="form-control"
                                            value = {this.state.id}
                                            disabled={true}/>
                                </FormGroup>
                            </div>

                            <div className = "col-lg-3" >                        
                                <FormGroup label = "Informe a data do curso" htmlFor="inputDataCurso"> 
                                    <DatePicker id= "inputDataCurso" 
                                            name ="date" className="form-control"                                         
                                            value ={this.state.dataCurso}                                           
                                            onChange = {value => this.setState({dataCurso: value})}  />                                                
                                </FormGroup>               
                            </div>

                        <div className = "col-lg-3">
                            <FormGroup label = "Informe o Id Curso" htmlFor="inputIdCurso">
                                        <input type ="text" id= "inputIdCurso" name ="inputIdCurso" className="form-control"
                                        value = {this.state.idCurso}
                                        onChange={e => this.setState({idCurso: e.target.value})}/>
                            </FormGroup>
                        </div>                          

                        
                        </div>
                        <div className="row p-2">
                               <div className ="col-lg-6">
                                    <button  onClick = { () => this.cadastrarPresenca(this.state.id)} className="btn btn-success">Cadastrar Presença
                                    </button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={this.voltar} className="btn btn-danger" >Voltar</button>
                               </div>
                        </div>

                    </Card>

                    <div className ="row paddinTop">
                        <Footer/>
                    </div>
                    </div>
                </>
        )
    }
}
export default withRouter(MarcarPresenca)