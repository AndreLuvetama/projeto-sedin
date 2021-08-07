import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import CadastroUsuario from '../views/cadastroUsuario'
import Login from '../views/login'
import Home from '../views/home'
import CadastrarCurso from '../views/cadastrarCurso'
import AuthService from '../app/service/authService'


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
                <RotaAutenticada path="/cadastrarCurso" component={CadastrarCurso} />
            </Switch>
        </HashRouter>
    )
}
export default Rotas