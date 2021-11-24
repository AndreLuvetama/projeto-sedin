
import React  from 'react'
import { ButtonGroup } from "reactstrap";
import baseService from "../app/service/baseService";
import CursoService from '../app/service/cursoService'
import { Button } from 'primereact/button';
import '../custom.css'
import {  withRouter } from 'react-router-dom';

import $ from 'jquery'; 

import { mensagemSucesso, mensagemErro} from '../components/toastr'




 class ListarCursos extends React.Component {
    constructor(props){
        super(props)
        this.cursoService = new CursoService();     
        this.state = {
            cursos: []
        }  
        this.editar = this.editar.bind(this);
    }       
 
     async  componentDidMount(){
        const  imprimir = await baseService.get('/cursos');      
       this.setState({cursos: imprimir.data})


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
   
  
 editar(id){
    return this.props.history.push(`/atualizarCurso/${id}`);
}

    deletar = (id) =>{
        this.cursoService.deletarCurso(id).then(
            response =>{
                  mensagemSucesso('Curso excluido com sucesso')
                  }
                  ).catch(
                      error => {
                          mensagemErro('Curso não excluido, contactar o admin')
                        }
                  )
            }
       

        render () {
          
               return(
                <div className ="table-responsive">
                <table className ="table table-hover " id ="tablejq" class="display">
                    <thead className ="thead-light">
                        <tr className="text-center"> 
                            <th scope ="col"> Num. </th>
                            <th scope ="col"> Data de realização </th>
                            <th scope ="col"> Curso </th>
                            <th scope ="col"> Qtde Horas </th>
                            <th scope ="col"> Ação</th>

                        </tr>
                    </thead>

                    <tbody> 
                            {
                                this.state.cursos.map(
                                    index => 
                                    <tr key = {index.id} className="text-center">
                                        <td>{index.id}</td>
                                        <td>{index.dataCurso}</td>
                                        <td>{index.nomeCurso}</td>
                                        <td>{index.qtdeHoras}</td>                                        
                                        <td><ButtonGroup>
                                            
                                            <Button icon="pi pi-pencil" iconPos="right" className="pr-2"  
                                            onClick = { () => this.editar(index.id)} />&ensp; 
                                            <Button icon="pi pi-times" iconPos="right" className="p-button-danger btn"
                                                    onClick ={() => window.confirm("Tem certeza que vai excluir?") && this.deletar(index.id) } />
                                            </ButtonGroup> </td>
                                     </tr>
                
                                )
                            }                   
                       
                    </tbody>
            
              </table>
              <div>
             </div>
                 
              </div>



               )
          }
      } export default withRouter ( ListarCursos )