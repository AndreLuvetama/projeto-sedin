
import { withRouter } from 'react-router-dom'
import React from 'react'
import Navbar from '../components/navbar'
import CadastroService from '../app/service/cadastroService'
import baseService from "../app/service/baseService";
import { ButtonGroup } from "reactstrap";
import { mensagemErro, mensagemSucesso } from '../components/toastr';

import $ from 'jquery'; 
import Footer from '../components/footer';


class LancarPresenca extends React.Component{
    constructor(props){
        super(props)
        this.cadastroService = new CadastroService();  

        this.state = {
            cadastros: []
        }  
        
    }      
    
   
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

    marcarPresenca(id){
            return this.props.history.push(`/marcarPresenca/${id}`);
    }

    

render(){
    return(
          <>
             <Navbar />   
             <div className ="container paddinTop">
            
                    <div className="alert alert-primary text-center" role="alert">
                        <h4>Lancar Presença</h4>
                    </div>
                    <div className="table-responsive">
                <table className="table" id ="tablejq">
                <thead>
                  <tr className="text-center">
                    <th scope="col">Num usuario</th>
                    <th scope="col">Nome de usuario</th>               
                    <th scope="col">Cpf</th>                  
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.cadastros.map(
                       index => 
                           <tr key = {index.id} className="text-center">
                               <td>{index.id}   </td>                         
                               <td>{index.nomeCompleto}</td>   
                               <td> {index.cpf}</td>                                                                                                                                                                                   
                                 <td><ButtonGroup>
                                 <button onClick={() => this.marcarPresenca(index.id)}
                                  className="btn btn-success">Marcar</button>
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
