
import axios from "axios"
import React  from 'react'
import { ButtonGroup } from "reactstrap";
import baseService from "../app/service/baseService";
import CursoService from '../app/service/cursoService'
import { Button } from 'primereact/button';
import '../custom.css'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import ReactPlayer from "react-player";

import jsPDF from "jspdf";
import { bold } from "chalk";





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

     gerarCertificado=()=>{
         var cert = new jsPDF('landscape', 'px', 'a4', 'false')
        
         cert.addPage()
         cert.setFont('helvertica', bold )
         cert.text(60, 60, 'Name')
         cert.text(60, 80, 'Email')
         cert.text(60, 100, 'Phone')
         cert.setFont('helvertica', bold )
         cert.text(100, 60, ': Name')
         cert.text(100, 80, ': Email')
         cert.text(120, 100, ': Phone')
         cert.save('certificado.pdf')
     }

       

        render () {
               return(
                <div className ="table-responsive container">
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
                                        <td> <button className="btn btn-success" onClick={this.gerarCertificado}> Certificado</button></td>
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