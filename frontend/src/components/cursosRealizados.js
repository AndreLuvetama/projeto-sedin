
import axios from "axios"
import React  from 'react'
import { ButtonGroup } from "reactstrap";
import baseService from "../app/service/baseService";
import CursoService from '../app/service/cursoService'
import { Button } from 'primereact/button';
import '../custom.css'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import ReactPlayer from "react-player";
import Videoplayer from "./videplayer";




export default class CursosRealizados extends React.Component {
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
                            <th scope ="col"> Baixar Certificados</th>

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
                                        <td> 
                                       
                                        <ReactPlayer className='react-player'url ={index.urlCurso} controls ={true}
                                        width='150px'
                                        height='150px'/>
                                       


                                        </td>
                                        <td></td>
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