import React from 'react'
import NavbarItem from '../components/navbarItem'



class  Headernav extends React.Component{
    render(){
        return(
            
            <div className= "navbar navbar-expand-lg fixed-top  bg-primary text-white">
               
               <div className="container">
                <a href="https://bootswatch.com/" className="navbar-brand">SEDIN</a>
                <button className="navbar-toggler" type="button" 
                     data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="#/admin" label="Home" />
                        <NavbarItem href="#/cadastroUsuario" label="Usuários" />
                        <NavbarItem href="#/admin/cadastrarCurso" label="Lançar curso"/>
                        <NavbarItem href="#/login" label="Sair"/>
                        
                    </ul>

                </div>
         </div>
            </div>
          
    
        )
    }
}

export default Headernav