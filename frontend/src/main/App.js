import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import Rotas from './rotas'
import Navbar from '../components/navbar';
import 'toastr/build/toastr.min.js'
import 'toastr/build/toastr.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Footer from '../components/footer';


class App extends React.Component {
 
  render() {
   return (
     <>
    <Navbar/>
      <div className="container">       
          <Rotas/>
      </div>
      <Footer/>
      </>
    )
  }
}

export default App;
