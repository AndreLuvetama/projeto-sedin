
import { withRouter } from 'react-router-dom'
import React from 'react'


class LancarPresenca extends React.Component{

    curso = () => {
        this.props.history.push('/admin/lancarPresenca')
    }
    presenca = () => {
        this.props.history.push('/admin/lancarPresenca')
    }

    perfilUsuario = () => {
        this.props.history.push('/admin/atualizarPerfil')
    }
    cursos = () => {
        this.props.history.push('/admin/cadastrarCurso')
    }

render(){
    return(
          <>
            
            <div className ="row adminRow">
            
            <div className="alert alert-primary text-center" role="alert">
                        <h4>Lançar Presença</h4>
                    </div>


                <div className ="col col-md-3 bg-danger m-1">
             
                </div>
                <div className ="col col-md-3 bg-primary m-1">
                <div className="card-header text-center">Lançar Presença</div>
                <div className="card-body pt-5">
                    <h5 className="card-title">Lançar prensença e emitir Certificados</h5>
                    <button type="button" class="btn btn-dark"  onClick={this.presenca}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar <span class="badge badge-light" ></span>
                        </button>
                
                </div>
                </div>
                <div className ="col col-md-2 bg-danger m-1">
                    <div className="card-header text-center">Usuários</div>
                    <div className="card-body pt-5">
                        <h5 className="card-title">Atualizar perfil</h5>
                        <button type="button" class="btn btn-primary"  onClick={this.perfilUsuario}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar <span class="badge badge-light" ></span>
                        </button>
                    </div>
                
                </div>
                <div className ="col col-md-3 bg-primary m-1">
                    <div className="card-header text-center">Atualizar Senhas</div>
                    <div className="card-body pt-5">
                        <h5 className="card-title">Alterar senhas e nome de usuários</h5>
                        <button type="button" class="btn btn-dark"  onClick={this.cursos}>
                    <i className="pi pi-book p-mr-2"></i>&nbsp; Acessar <span class="badge badge-light" ></span>
                        </button>
                    </div>
                
                </div>
               

            </div>

            
        </>
    )
}

} export default withRouter(LancarPresenca)
