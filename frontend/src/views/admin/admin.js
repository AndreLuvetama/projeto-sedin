import React from 'react'
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';


class Admin extends React.Component{

    curso = () => {
        this.props.history.push('/admin/cadastrarCurso')
    }
    presenca = () => {
        this.props.history.push('/lancarPresenca')
    }

    listarCadastros = () => {
        this.props.history.push('/listarCadastroAdmin' )
    }
    documentos = () => {
        this.props.history.push('/fileUpload' )
    }
    relatorios = () => {
        this.props.history.push('/relatorios')
    }

render(){
    return(
          <>
                   
            <Navbar />   
            
             <div className ="container">
             <div className ="row adminRow">
            
            <div className="alert alert-primary text-center" role="alert">
                        <h4>Painel do Administrador</h4>
                    </div>


                <div className ="col col-md-2 bg-danger m-2">
                <div className="card-header text-center">Lançar aula</div>
                <div className="card-body  pt-2">
                    <p className="card-title">Lançar e atualizar aulas</p>
                    <button type="button" className="btn btn-primary"  onClick={this.curso}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar <span className="badge badge-light" ></span>
                        </button>
                   
                </div>
                </div>
                <div className ="col col-md-2 bg-primary m-2">
                <div className="card-header text-center">Lançar Presença</div>
                <div className="card-body pt-2">
                    <p className="card-title">Presença e emitir Certificados</p>
                    <button type="button" class="btn btn-dark"  onClick={this.presenca}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar 
                        </button>
                
                </div>
                </div>
                <div className ="col col-md-2 bg-danger m-2">
                    <div className="card-header text-center">Usuários</div>
                    <div className="card-body pt-2">
                        <p className="card-title">Atualizar perfil dos usuários</p>
                        <button type="button" className="btn btn-primary"  onClick={this.listarCadastros}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar
                        </button>
                    </div>
                
                </div>
                <div className ="col col-md-2 bg-primary m-2">
                    <div className="card-header text-center">Documentos</div>
                    <div className="card-body">
                        <p className="card-title">Downlods e envio de materias</p>
                        <button type="button" className="btn btn-dark"  onClick={this.documentos}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar
                        </button>
                    </div>
                
                </div>
                <div className ="col col-md-2 bg-danger m-2">
                    <div className="card-header text-center">Relatórios</div>
                    <div className="card-body pt-3">
                        <p className="card-title">Participação nos cursos</p>
                        <button type="button" className="btn btn-primary"  onClick={this.relatorios}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar 
                        </button>
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


 } export default Admin
