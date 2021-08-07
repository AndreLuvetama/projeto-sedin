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

       getUsuarioPorId(id){
           return this.get(`/usuarioPorId/${id}`)
       }

       atualizarCadastro(cadastro){
           return this.put(`/${cadastro.id}`, cadastro)
       }
    


}

export default CadastroService