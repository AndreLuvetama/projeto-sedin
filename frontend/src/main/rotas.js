import { func } from 'prop-types'
import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import CadastroUsuario from '../views/cadastroUsuario'
import Login from '../views/login'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component= {Login}/>
                <Route path="/cadastroUsuario" component= {CadastroUsuario}/>
            </Switch>
        </HashRouter>
    )
}
export default Rotas