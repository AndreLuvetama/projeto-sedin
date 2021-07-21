import React from "react";

import PrimeReact from 'primereact/api';



class Sidebar extends React.Component{

    render(){
        return (
            <div className="wrapper d-flex flex-column flex-shrink-0 text-white sideBar">
                <nav id="sidebar">
                    <div className ="sidebar-header">
                            <header><h4>Dashboard</h4></header>
                            
                    </div>

                    <ul className= "list-unstyled components ">
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto">
                            <i className="pi pi-users p-mr-2"></i> Meu Perfil</a>
                        </li>
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto"> Cursos realizados</a>
                        </li>
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto "> Cursos não realizados</a>
                        </li>
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto"> Certificados</a>
                        </li>

                    </ul>
                    
                </nav>
            
               
            </div>
            
        )
    }

}

export default Sidebar