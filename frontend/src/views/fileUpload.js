import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import React, { Component } from "react";
import baseService from '../app/service/baseService';
import UploadFilesService from '../app/service/UploadFilesService';
import { mensagemErro, mensagemSucesso } from '../components/toastr';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Button } from 'primereact/button';
import { ButtonGroup } from "reactstrap";



class FileUpload extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
        selectedFile:'',
        filesbyorder: [],
    }
    this.uploadService = new UploadFilesService();

    this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
    this.setState({
        selectedFile: event.target.files[0],
      })
}

async componentDidMount(){
    const imprimir = await baseService.get("upload/filesbyorder");
    this.setState({filesbyorder: imprimir.data});

}

deletar = (id) =>{
    let index = [...this.state.filesbyorder]
    this.uploadService.deleteArquivo(id).then(
        response =>{
              mensagemSucesso('Arquivo excluido com sucesso')
              index.splice(id, 1)
             this.setState({index: index})
             
              }
              ).catch(
                  error => {
                      mensagemErro('Arquivo não excluido, contactar o admin')
                    }
              )
        }


submit(){
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    console.warn(this.state.selectedFile);
    let url = "http://localhost:8080/upload/postUploads";
   

    axios.post(url, data, { 
    })
    .then(res => { 
        console.warn(res);
        mensagemSucesso(`upload feito com sucesso.`);
    }).catch( error =>{
        mensagemErro('Upload não realizado, contactar o admin')
    })

}

render(){
    return(
        <>
        <Navbar /> 
        <div className ="container paddinTop">
            
            <div className="alert alert-primary text-center" role="alert">
                <h4>Uplaod de arquivos</h4>
            </div>
       
        <div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <br />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="text-white">Select File :</label>
                                <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-row pt-3">
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Enviar arquivo</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
        <div className="row table-responsive pt-3">
            <table className ="table ">
              <thead className="thead-dark">
                <tr className="text-center">
                        <th scope="col" >Documento</th>
                        <th scope="col">Data Upload</th>
                        <th className="colunaT" scope="col">Tipo de documento</th>
                        <th scope="col">Excluir</th>
                </tr>
              </thead>
                { this.state.filesbyorder.map( index =>
                <tr key = {index.id} className="text-center">
                        <td >{index.name}</td>
                        <td >{index.id}</td>
                        <td  >{index.type}</td>
                        <td ><ButtonGroup>
                            <Button icon="pi pi-times"  onClick={ () => window.confirm("Tem certeza que vai excluir?") && this.deletar(index.id)} 
                                      label="Excluir" iconPos="right" className="p-button-danger"   />
                                      </ButtonGroup></td>
                </tr>
                
                    )
                    
                }

              
              <tbody>

              </tbody>

           </table>            
        </div>
        <div className ="row paddinTop">
             <Footer/>
             </div>  
         </div>
        </>
    )  
}


}export default withRouter(FileUpload)