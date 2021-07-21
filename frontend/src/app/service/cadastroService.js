import ApiService from "../apiservice";

class CadastroService extends ApiService{
    constructor(){
        super('/cadastros')
       }


       autenticar(credenciais){
           return this.post('/autenticar', credenciais)
       }

       obterSaldoPorCadastro(id){
           return this.get(`/${id}/saldo`);
       }

       salvar(cadastros){
           return this.post('/', cadastros);
       }


}

export default CadastroService