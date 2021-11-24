

import React  from 'react'

import '../custom.css'

import $ from 'jquery'; 



 class CursosNaoRealizados extends React.Component {
  
  async  componentDidMount(){
        $(document).ready(function () {
          $('#tableId').DataTable({
              "language":{
                  "paginate": {
                      "next": "Próximo",
                      "previous": "Anterior",
                      "first": "Primeiro",
                      "last": "Último"
                  },
                  "lengthMenu":"Mostrando _MENU_ registros por página",
                  "emptyTable": "Nenhum registro encontrado",
                 // "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                  "info": "Mostrando página _PAGE_ de _PAGES_",
                  "infoEmpty": "Mostrando 0 até 0 de 0 registros",
                  "infoFiltered": "(Filtrados de _MAX_ registros)",
                  "infoThousands": ".",
                  "loadingRecords": "Carregando...",
                  "processing": "Processando...",
                  "zeroRecords": "Nenhum registro encontrado",
                  "search": "Pesquisar",
  
              }
          });
      });  
  
      }




        render (){
            return(
                <div className="table-responsive container">
                <table className="table table-hover " id ="tableId"> 
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Data de realização</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Certificado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>2020-23-02</td>
                    <td> <div className ="col col-lg-2">
                            <a href="#"><img src = "/assets/img/youtube.png" alt =""/></a>
                         </div>
                    </td>
                    <td>
                        <div className ="col col-lg-2">
                                <a href="#"><img src = "/assets/img/pdf2.png" alt =""/></a>
                        </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>2020-23-02</td>
                    <td><div className ="col col-lg-2">
                                <a href="#"><img src = "/assets/img/clip.png" alt =""/></a>
                        </div>
                    </td>
                    <td><div className ="col col-lg-2">
                                <a href="#"><img src = "/assets/img/pdf2.png" alt =""/></a>
                        </div></td>
                  </tr>
                  
                  <tr>
                    <th scope="row">3</th>
                    <td>2020-23-02</td>
                    <td><div className ="col col-lg-2">
                                <a href="#"><img src = "/assets/img/multimedia.png" alt =""/></a>
                        </div>
                    </td>
                    <td><div className ="col col-lg-2">
                                <a href="#"><img src = "/assets/img/pdf2.png" alt =""/></a>
                        </div></td>
                  </tr>
                </tbody>
              </table>
              </div>
            );
        }
}

 export default CursosNaoRealizados
