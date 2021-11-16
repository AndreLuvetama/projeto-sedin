import ApiService from "../apiservice";

class PresencaService extends ApiService{
    constructor(){
        super('/presenca')
       }

       salvar(presenca){
           return this.post('/', presenca)
       }     

}

export default PresencaService