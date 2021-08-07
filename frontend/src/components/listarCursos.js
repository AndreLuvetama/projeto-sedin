
import axios from "axios"
import React  from 'react'
import { ButtonGroup } from "reactstrap";
import baseService from "../app/service/baseService";
import CursoService from '../app/service/cursoService'
import { Button } from 'primereact/button';
import '../custom.css'
import { mensagemSucesso, mensagemErro} from '../components/toastr'




export default class ListarCursos extends React.Component {
    constructor(props){
        super(props)
        this.cursoService = new CursoService();     
        this.state = {
            cursos: []
        }  
    }       
 
     state = {
         showConfirmDialog: true
     }
  async  componentDidMount(){
        const  imprimir = await baseService.get('/cursos');      
       this.setState({cursos: imprimir.data})
        
    }  

    editar = (id) =>{
        console.log('editar curso' , id)

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
                <table className ="table table-hover">
                    <thead className ="thead-light">
                        <tr className="text-center"> 
                            <th scope ="col"> Num. </th>
                            <th scope ="col"> Data de realização </th>
                            <th scope ="col"> Titulo do Curso </th>
                            <th scope ="col"> Qtde Horas </th>
                            <th scope ="col"> Curso</th>
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
                                        <td>{index.urlCurso}</td>
                                        <td><ButtonGroup>
                                            
                                            <Button icon="pi pi-pencil" iconPos="right" className="pr-2"  
                                                    onClick ={ e => this.editar(index.id) }/> &ensp; 
                                            <Button icon="pi pi-times" iconPos="right" className="p-button-danger btn"
                                                    onClick ={ e => window.confirm("Tem certeza que vai excluir?") && this.deletar(index.id) } />
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
      } 