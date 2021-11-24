
import React from "react";
import baseService from '../app/service/baseService';
import UploadFilesService from '../app/service/UploadFilesService';
import { Button } from 'primereact/button';
import Footer from '../components/footer';





class ListarFiles extends React.Component{
  
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

render(){
    return(
        <> 
        
        <div className="row table-responsive pt-3">
            <table className ="table ">
              <thead className="thead-dark">
                <tr className="text-center">
                        <th scope="col" >Documento</th>
                        <th scope="col">Data</th>
                        <th className="text-center" scope="col">Baixar</th>                        
                </tr>
              </thead>
                { this.state.filesbyorder.map( index =>
                <tr key = {index.id} className="text-center">
                        <td >{index.name}</td>
                        <td >teste</td>
                        <td >
                        <div className ="col">
                           <a href={index.url} class="btn btn-primary btn-md active" role="button" aria-pressed="true">
                           <i className ="pi pi-cloud-download" style={{'fontSize': '2em'}}></i></a>                                
                        </div>
                        </td>
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
        
        </>
    )  
}


}export default ListarFiles