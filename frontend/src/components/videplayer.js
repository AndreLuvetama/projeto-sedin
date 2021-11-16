
import React from 'react'
import ReactPlayer from 'react-player/youtube';
import baseService from '../app/service/baseService';
import CursoService from '../app/service/cursoService';


class Videoplayer extends React.Component{


    constructor(props){
      super(props)
      this.cursoService = new CursoService();     
      this.state = {
          urlCurso: '',
          dataCurso: '',
          nomeCurso: '',
          qtdeHoras: ''
   
      }  
    }       

    async  componentDidMount(){
      const  imprimir = await baseService.get('/cursos/ultimoCurso');      
     this.setState({urlCurso: imprimir.data.urlCurso})
     this.setState({nomeCurso: imprimir.data.nomeCurso})
      
    }  

 
  render (){
        return(
          <div className ="row d-flex ">
               <div className="sm-12 embed-responsive embed-responsive-16by9">  
              <h4 className="pb-2">{this.state.nomeCurso} </h4>            
                <ReactPlayer className="videoBox justify-content-center" url ={this.state.urlCurso} controls ={true}/>          

               </div>

               
          </div>

            
        )
             
    
    }

}
export default Videoplayer