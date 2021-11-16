import React from 'react'
import { withRouter } from 'react-router-dom';
import baseService from '../../app/service/baseService';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';


class Relatorios extends React.Component{
    constructor(props){
        super(props)
       
        this.state = {
            numCadastros: ''
        }  
        
    }

    curso = () => {
        this.props.history.push('/admin/cadastrarCurso')
    }
    presenca = () => {
        this.props.history.push('/lancarPresenca')
    }

    listarCadastros = () => {
        this.props.history.push('/listarCadastroAdmin')
    }
    home = () => {
        this.props.history.push('/admin')
    }


    async  componentDidMount(){
        const  imprimir = await baseService.get('/cadastros/numUsuarios');      
       this.setState({numCadastros: imprimir.data})
        
    }  

render(){
    return(
          <>
                   
            <Navbar />   
            
             <div className ="container">
             <div className ="row adminRow">
            
            <div className="alert alert-primary text-center" role="alert">
                        <h4>Relatórios</h4>
                    </div>


                <div className ="col col-md-2 bg-primary m-2">
                <div className="card-header text-center">Cursos relizados</div>
                <div className="card-body  pt-2">
                    <p className="card-title"> Participação nos cursos e certificados</p>
                    <button type="button" className="btn btn-dark"  onClick={this.curso}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar <span className="badge badge-light" ></span>
                        </button>
                   
                </div>
                </div>
                <div className ="col col-md-2 bg-danger m-2">
                <div className="card-header text-center">Cursos lançados</div>
                <div className="card-body pt-2">
                    <p className="card-title">Cursos</p>
                    <button type="button" class="btn btn-primary"  onClick={this.presenca}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar 
                        </button>
                
                </div>
                </div>
                <div className ="col col-md-2 bg-primary m-2">
                    <div className="card-header text-center">Cadastros</div>
                    <div className="card-body pt-2">
                        <p className="card-title">Listar todos usuários</p>
                        <button type="button" className="btn btn-dark"  onClick={this.listarCadastros}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar
                        </button>
                    </div>
                
                </div>
                <div className ="col col-md-2 bg-danger m-2">
                    <div className="card-header text-center">Documentos</div>
                    <div className="card-body">
                        <p className="card-title">Documentos postados</p>
                        <button type="button" className="btn btn-primary"  onClick={this.homeUsuario}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar
                        </button>
                    </div>
                
                </div>
                <div className ="col col-md-2 bg-primary m-2">
                    <div className="card-header text-center">Num. de cadastro</div>
                    <div className="card-body pt-3">
                        <p className="card-title">Número total de cadastros no sistema: {this.state.numCadastros}</p>
                        
                    </div>
                
                </div>
               

            </div>

             </div>
             <div className ="row">
             <Footer/>
             </div>
            
        </>
    )
}


 } export default withRouter(Relatorios)
