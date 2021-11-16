import { withRouter } from "react-router";
import ApiService from "../apiservice";

class UploadFilesService extends ApiService{
  constructor(){
    super('/upload')
   }

 
  postFiles(){
    return ApiService.post("/postUploads");
  }

  getFiles() {
    return ApiService.get("/files");
  }

  getFilesByOrdem() {
    return this.get("/filesbyorder");
  }

  deleteArquivo(id){
    return this.delete(`/${id}`);
}
}

export default UploadFilesService;