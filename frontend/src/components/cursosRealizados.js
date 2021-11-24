
import axios from "axios"
import React  from 'react'
import { ButtonGroup } from "reactstrap";
import baseService from "../app/service/baseService";
import CursoService from '../app/service/cursoService'
import { Button } from 'primereact/button';
import '../custom.css'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import ReactPlayer from "react-player";

import $ from 'jquery'; 
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

    editar = (id) =>{
        console.log('editar curso' , id)

    }
    mensagem = (id) =>{
       
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
            const number = [0, 2, 1, 0 ]
               return(
                <div className ="table-responsive container">
                <table className ="table table-hover" id ="tablejq">
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
                                        <td>
                                        {number.includes(index.id) ? <button className="btn btn-success" 
                                                    onClick={this.gerarCertificado}> Certificado</button>: <button className="btn btn-danger" 
                                                    onClick ={() => window.confirm("Curso não realizado") }> Certificado</button> }                                           
                                             </td>
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