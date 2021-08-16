import React from "react";

import PrimeReact from 'primereact/api';



class Sidebar extends React.Component{

    render(){
        return (
            <div className="text-white  sideBar">
                <nav id="sidebar">
                    <div className ="sidebar-header">
                            <header><h4>Dashboard</h4></header>
                            
                    </div>

                    <ul className= "list-unstyled components ">
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto">
                            <i className="pi pi-home p-mr-2"></i>&nbsp;&nbsp;Home</a>
                        </li>
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto">
                            <i className="pi pi-book p-mr-2"></i>&nbsp;&nbsp;Lançar Cursos</a>
                        </li>
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto "> 
                            <i className="pi pi-list p-mr-2"></i>&nbsp;&nbsp;Lançar Presença</a>
                        </li>
                        <li className = "sideBarItem">
                            <a href = "#" className ="text-decoration-none texto"> 
                            <i className="pi pi-users p-mr-2"></i>&nbsp;&nbsp;Meu Perfil</a>
                        </li>

                    </ul>
                    
                </nav>
            
               
            </div>
            
        )
    }

}

export default Sidebar