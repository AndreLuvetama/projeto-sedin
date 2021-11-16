import React, { Component } from 'react';


 class ArquivosEDownload extends React.Component {
        render (){
            return(
                <div className="table-responsive container">
                <table className="table">
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

 export default ArquivosEDownload
