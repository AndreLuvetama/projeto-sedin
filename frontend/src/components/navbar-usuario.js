import React from 'react'
import NavbarItem from './navbarItem'
import AuthService from '../app/service/authService'

const deslogar = () => {
    AuthService.removerUsuarioAutenticado();
}


function NavbarUsuario(){
    return(
        <div className="navbar navbar-expand-lg fixed-top headerBar" >
            <div className="container">
                <a href="#/admin" className="navbar-brand">SEDIN</a>
                <button className="navbar-toggler" type="button" 
                     data-toggle="collapse" data-target="#navbarResponsive" 
                     aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="#/admin" label="Home" />
                        <NavbarItem href="#/cadastroUsuario" label="Usuários" />
                        <NavbarItem href="#/admin/cadastrarCurso" label="Curso"/>
                        <NavbarItem   onClick ={deslogar} href="#/login" label="Sair"/>
                        <a className="btn btn-success" onClick ={deslogar} href="#/login"> sair</a>
                        
                    </ul>

                </div>
         </div>
      </div>

    )
}

export default NavbarUsuario