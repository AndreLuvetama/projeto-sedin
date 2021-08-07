import ApiService from "../apiservice";

class CursoService extends ApiService{
    constructor(){
        super('/cursos')
       }


       autenticar(credenciais){
           return this.post('/autenticar', credenciais)
       }

       obterSaldoPorCadastro(id){
           return this.get(`/${id}/cursos`);
       }

       salvar(cursos){
           return this.post('/', cursos);
       }

       getCursoPorId(id){
           return this.get(`/usuarioPorId/${id}`)
       }

       atualizarCadastro(cursos){
           return this.put(`/${cursos.id}`, cursos)
       }
    
       listarCursos(){
           return this.get(`/cursos`);
       }
       
       buscarUltimoCurso(){
           return this.get(`/ultimoCurso`)
       }
       deletarCurso(id){
        return this.delete(`/${id}`)
    }



}

export default CursoService