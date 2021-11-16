
import { withRouter } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/navbar'
import CadastroService from '../app/service/cadastroService'
import PresencaService from '../app/service/presencaService'
import baseService from "../app/service/baseService";
import { Button } from 'primereact/button';
import { ButtonGroup } from "reactstrap";
import FormGroup from '../components/form-groups'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import DatePicker from 'react-date-picker'

import $ from 'jquery'; 
import Footer from '../components/footer'

  
  

class LancarPresenca extends React.Component{
        
    constructor(props){
        super(props)
        this.cadastroService = new CadastroService();  
        this.presencaService = new PresencaService();   

        this.state = {
            cadastros: []
        }   
        
    } 
        
    
    state = {
        dataCurso : '',
        id_curso : '',
        id_cadastro : ''
        
       
    };

    state ={
        dataCurso: new Date()
    }
   initialState = { date: new Date()}


    async  componentDidMount(){
        const  imprimir = await baseService.get('/cadastros');     
       this.setState({cadastros: imprimir.data});

       $(document).ready(function () {
        $('#tablejq').DataTable({
            "language":{
                "paginate": {
                    "next": "Próximo",
                    "previous": "Anterior",
                    "first": "Primeiro",
                    "last": "Último"
                },
                "lengthMenu":"Mostrando _MENU_ registros por página",
                "emptyTable": "Nenhum registro encontrado",
               // "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "Mostrando 0 até 0 de 0 registros",
                "infoFiltered": "(Filtrados de _MAX_ registros)",
                "infoThousands": ".",
                "loadingRecords": "Carregando...",
                "processing": "Processando...",
                "zeroRecords": "Nenhum registro encontrado",
                "search": "Pesquisar",

            }
        });
    });  
        
    }      
    validar(){
           

        const msgs = []
            if(!this.state.curso){
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
		    cadastro: id,
		    curso:  this.state.curso,
		    dataPresenca: this.state.dataCurso
		
        }

          this.presencaService.salvar(presenca)
        .then(response => {
            console.log(presenca);
            mensagemSucesso(`Presença cadastrada com sucesso.`)
            this.props.history.push('/lancarPresenca')
        }).catch( error =>{
           console.log(presenca);
           mensagemErro('curso não atualizado, tente de novo')
        })
        
    }
render(){
    return(
          <>
             <Navbar />   
             <div className ="container paddinTop">
            
                    <div className="alert alert-primary text-center" role="alert">
                        <div className =""><h4>Lançar Presença</h4></div>
                      
                    </div>
                    <div className="table-responsive">
                <table className="table" id ="tablejq" class="display">
                <thead className ="table-dark">
                  <tr className="text-center">
                    <th scope="col" className="colunaT">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Data Curso</th>
                    <th scope="col" className="colunaT">Id Curso</th>
                    <th scope="col">Marcar Presença</th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.state.cadastros.map(
                        index => 
                            <tr key = {index.id} className="text-center">
                                 <td>
                                <FormGroup  htmlFor="inputIdCad" >
                                     <input 
                                     type ="text" id= "inputIdCurso"
                                         name ="inputIdCad" className="form-control"
                                        value ={index.id}
                                         onChange={e => this.setState({inputIdCad: e.target.value})} disabled={true}/>                                                
                                             </FormGroup>   
                                        </td>



                                        <td>{index.nomeCompleto}</td>
                                        <td>
                                        <FormGroup htmlFor="inputDataCurso"> 
                                        <DatePicker id= "inputDataCurso" 
                                                name ="date" className="form-control" 
                                                minDate = {new Date(1930, 0, 1)}
                                                value ={this.state.dataCurso}                                           
                                                onChange = {value => this.setState({dataCurso: value})} />                                                
                                         </FormGroup>  
                                        </td>                                       
            
                                        <td> <FormGroup  htmlFor="inputIdCurso" >
                                             <input 
                                             type ="text" id= "inputIdCurso"
                                                name ="curso" className="form-control"
                                                onChange={e => this.setState({curso: e.target.value})}/>                                                
                                             </FormGroup>   
                                            
                                        </td>
                                        <td><ButtonGroup>
                                            
                                            <Button icon="pi pi-pencil" label="Marcar" iconPos="right" className="pr-2"  
                                            onClick = { () => this.cadastrarPresenca(index.id)} />
                                           
                                            </ButtonGroup> </td>
                                     </tr>
                
                                )
                            }         
                </tbody>
              </table>
              </div>        

            </div>

            <div className ="row paddinTop">
             <Footer/>
             </div>
        </>
    )
}

} export default withRouter(LancarPresenca)
