import React from 'react'
import CadastroService from '../app/service/cadastroService'
import LocalStorageService from '../app/service/localStorageService'

class Home2 extends React.Component{ 
    state = {
        saldo: 0
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
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo a sala de aula SEDIN!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"
                    href="https://bootswatch.com/flatly/#" role="button">
                        <i className="fa fa-users"></i> Cadastrar Usuário</a>
                    <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" 
                    role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
                </p>
          </div>
            
        )
    }

}

export default Home2