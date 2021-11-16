import ApiService from "../apiservice";

class CursoService extends ApiService{
    constructor(){
        super('/cursos')
       }

       obterSaldoPorCadastro(id){   
           return this.get(`/${id}/cursos`);
       }

       salvar(cursos){
           return this.post('/', cursos);
       }
      
       getCursoPorId(id){
           return this.get(`/cursoId/${id}`)
       }

      updateCursos(curso){
           return this.put(`/${curso.id}`, curso)
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