import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <footer> 
                <div className="row footer p-3">
                    <div className="col col-md-6">
                       <p> Rua Apeninos, 429 – 7° Andar</p>
                         Conjs 704 ao 708 – Paraiso
                           Cep: 01533-000  
                    </div>
                    <div className="col col-md-6">
                        <p>Telefone: 11 3258-3878</p>
                        FALE COM A PRESIDENTE
                        E-mail: falepresidente@sedin.com.br
                    </div> 
                    <div className ="row bg-footer">

                   </div>                                                               
                </div>
               
            </footer>
        )
    }
}

export default Footer