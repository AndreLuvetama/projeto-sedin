import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/cards'
import FormGroup from '../components/form-groups'
import cursoService from '../app/service/cursoService'
import { mensagemSucesso, mensagemErro} from '../components/toastr'
import DatePicker from 'react-date-picker'
import ListarCursos from '../components/listarCursos'


import Navbar from '../components/navbar'
import Footer from '../components/footer'


class AtualizarCurso extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nomeCurso : '',
            urlCurso : ''
           // qtdeHoras : '',
            

        }

       
     this.service = new cursoService();
      
    }

    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name] : value})
    }
      

    state ={
        dataCurso: new Date()
    }
   initialState = { date: new Date()}        

          componentDidMount(){
            this.service.getCursoPorId(this.state.id).then( (res) =>{
                let curso  = res.data;
                console.log(res.data)
                this.setState({
                    nomeCurso: curso.nomeCurso,
                    id : curso.id,
                    urlCurso: curso.urlCurso,
                    qtdeHoras : curso.qtdeHoras,
                    dataCurso : curso.dataCurso
                });
            });
        }
    

        validar(){           

            const msgs = []
                if(!this.state.nomeCurso){
                    msgs.push('O campo curso é obrigatorio');
                }

                if(!this.state.urlCurso){
                    msgs.push('O campo url é obrigatorio');
                }

                if(!this.state.qtdeHoras){
                    msgs.push('O campo quantida de horas é obrigatorio');
                }

                if(!this.state.dataCurso){
                    msgs.push('O campo data do curso é obrigatorio');
                }


            return msgs;
        }

        validarCursos = () =>{
        const msgs = this.validar();
        if(msgs && msgs.length > 0){
            msgs.forEach( (msg, index)  => {
                mensagemErro(msg)
            });
            return false;
            
        }

       
      }

        atualizarCurso = () =>{  
            
            let curso = {nomeCurso: this.state.nomeCurso, urlCurso: this.state.urlCurso, qtdeHoras : this.state.qtdeHoras,
                dataCurso: this.state.dataCurso, id: this.state.id};   
                console.log(curso); 
                console.log(this.state.id); 

            this.service.updateCursos(curso, this.state.id).then(response =>
                {
                    mensagemSucesso('Curso atualizado com sucesso!!')
                    this.props.history.push('/admin/cadastrarCurso')
                }).catch(error => {
                    mensagemErro('curso não atualizado, tente de novo')
                })           
        }  

      

    cancelar = () => {
        this.props.history.push('/login')
    }
    render(){
        
        const cursos = []
        return (
           
                 <>
                 <Navbar />   
                    <div className ="container paddinTop">
                    <div className ="row pb-5">
                    <div className="alert alert-primary text-center" role="alert">
                        <h4>Atualizar Curso</h4>
                    </div>
                    <Card className = "bg-danger pt-5">
                            

                        <div className="row">
                            <div className = "col-lg-6">
                                <FormGroup label = "Curso" htmlFor="inputNomeCurso">
                                        <input type ="text" id= "inputNomeCurso" name ="nomeCurso"
                                        className="form-control"
                                        value = {this.state.nomeCurso}
                                        onChange={e => this.setState({nomeCurso: e.target.value})}/>
                                    </FormGroup>
                            </div>
                            <div className ="col-lg-5">
                                <FormGroup label = "Url" htmlFor="inputUrlCurso"> <input type ="urlCurso" id= "inputUrlCurso"
                                            name ="urlCurso" className="form-control"
                                            value = {this.state.urlCurso}
                                           onChange={e => this.setState({urlCurso: e.target.value})}/>
                                </FormGroup>
                            </div>

                            <div className = "col-lg-3" >                        
                                <FormGroup label = "Data do curso" htmlFor="inputDataCurso"> 
                                    <DatePicker id= "inputDataCurso"                                             
                                             name ="date" className="form-control" 
                                             value ={this.state.dataCurso}                                           
                                             onChange = {value => this.setState({dataCurso: value})} 
                                            isClearrable
                                            showYearDrpdown
                                            scrollableMonthDropdown

                                            />                                                
                                </FormGroup>               
                            </div>

                            <div className = "col-lg-4">                                                       
                                <FormGroup label = "Quantidade de horas" htmlFor="inputQtdeHoras"> <input 
                                    type ="text" id= "inputQtdeHoras"
                                                name ="qtdeHoras" className="form-control"
                                                value = {this.state.qtdeHoras}
                                                onChange={e => this.setState({qtdeHoras: e.target.value})}/>
                                                
                                </FormGroup>                              
                              </div>


                        </div>
                        <div className="row p-2">
                               <div className ="col-lg-6">
                                    <button onClick={this.atualizarCurso} className="btn btn-success">Atualizar Curso</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={this.cancelar} className="btn btn-danger" >Cancelar</button>
                               </div>
                        </div>
                    
                        <div className="row">
                                <div className ="col-md-12">
                                    <div className ="bs-component" >
                                        <h4 className ="pt-3"> Cursos Lançados</h4>
                                    <ListarCursos cursos={cursos} />
                                    </div>
                                </div>
                        </div>

                    </Card>
                    </div>
                    </div>
                    <div className ="row pt-5"></div>
                    <Footer/>
                </>
        )
    }
}
export default withRouter(AtualizarCurso)