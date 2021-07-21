
import React from 'react'
import CadastroService from '../app/service/cadastroService'
import LocalStorageService from '../app/service/localStorageService'
import  'primereact/api';

import Tab from '../components/tab'

class Home extends React.Component{ 
    state = {
            id: null,
		    nomeCompleto: '',
		    nomeUsuario:  '',
		    email: '',
		    senha: '',
		    dataNasc: '',
		    cpf: ''
        
    }
  

    constructor(){
        super()
        this.cadastroService = new CadastroService();
    }
    

    componentDidMount(){
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado') 
        const usuarioLogadoString = localStorage.getItem('_usuario_logado')       
         JSON.parse(usuarioLogadoString)

       this.cadastroService
           .obterSaldoPorCadastro(usuarioLogado.id)
        .then(response => {
            this.setState({saldo: 100})
        }).catch( error =>{
            console.error(error.response)
        })
    }


    render(){
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado') 
        return (
            <>
              <div className="row m-5">
                <div className="row  mb-5 header-dash borderDiv"> 
                    <div className ="col col-lg-2">
                        <a href="#"><img src = "/assets/img/logo.fw.png" alt =""/></a>
                    </div>                    
                    <div className="col col-lg-7">                   
                      Olá, {usuarioLogado.nomeUsuario } Seja Bem vindo ao <h4>DASHBOARD</h4>                      
                    </div>
                    <div className="col col-lg-3 ">                   
                   <i className="pi pi-sign-out"></i>&nbsp;&nbsp;Sair                    
                    </div>
            
                </div>

                <div className="row borderDiv">       
                    <Tab />                
                </div>
            </div>
          </>
            
        )
    }

}

export default Home