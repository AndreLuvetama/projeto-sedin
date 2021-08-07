import React from 'react'
import AuthService from '../app/service/authService'

const deslogar = () => {
    AuthService.removerUsuarioAutenticado();
}
function NavbarItem(props){
   return(
    <li className="nav-item">
        <a onClick= {deslogar} className="nav-link"  href={props.href}>{props.label}</a>    
    </li>
   )
}

export default NavbarItem