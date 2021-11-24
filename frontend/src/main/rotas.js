import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import CadastroUsuario from '../views/cadastroUsuario'
import Login from '../views/login'
import Home from '../views/home'
import CadastrarCurso from '../views/cadastrarCurso'
import AuthService from '../app/service/authService'
import Admin from '../views/admin/admin'
import LancarPresenca from '../views/lancarPresenca'
import AtualizarPerfil from '../views/atualizarPerfil'
import AtualizarCadastro from '../views/atualizarCadastro'
import AtualizarCurso from '../views/atualizarCurso'
import ListarCadastroAdmin from '../views/listarCadastroAdmin'
import AtualizarCadastroAdmin from '../views/atualizarCadastroAdmin'
import Relatorios from '../views/relatorios/relatorios'
import FileUpload from '../views/fileUpload'
import MarcarPresenca from '../views/marcarPresenca'


function RotaAutenticada({component: Component, ...props}){
    return(
        <Route {...props} render = {(componentProps) =>{
            if(AuthService.isUsuarioAutenticado()){
                return ( 
                    <Component {...componentProps} />
                    )
                   } else{
                       return(
                        <Redirect to={ { pathname: '/login', state : {from: componentProps.location } } } />    
                       )
                   }
            
               }
        
            }
        
        />

    )
} 

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                
                <Route path="/login" component={Login} />
                <Route path="/cadastroUsuario" component={CadastroUsuario} />
                
                <RotaAutenticada path="/home" component={Home} />
                <RotaAutenticada path="/admin/cadastrarCurso" component={CadastrarCurso} />
                <RotaAutenticada path="/admin" component={Admin} />
                <RotaAutenticada path="/lancarPresenca" component={LancarPresenca} />
                <RotaAutenticada path="/fileUpload" component={FileUpload} />
                <RotaAutenticada path="/atualizarPerfil" component={AtualizarPerfil} />
                <RotaAutenticada path="/marcarPresenca/:id" component={MarcarPresenca} />
                <RotaAutenticada path="/admin/atualizarCadastro/:id" component={AtualizarCadastro} />
                <RotaAutenticada path="/atualizarCurso/:id" component={AtualizarCurso} />
                <RotaAutenticada path="/lancarPresenca" component={LancarPresenca} />
                <RotaAutenticada path="/listarCadastroAdmin" component={ListarCadastroAdmin} />
                <RotaAutenticada path="/atualizarCadastroAdmin/:id" component={AtualizarCadastroAdmin} />
                <RotaAutenticada path="/relatorios" component={Relatorios} />
            </Switch>
        </HashRouter>
    )
}
export default Rotas