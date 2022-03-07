import './App.css';
import React from 'react'
import TheContent from './components/TheContent';
import Header from './components/layout/header';
import { PageFooter } from './components/layout/footer';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {


  return (
    <div className="App" >
      <div class="boxed-page">
        <Header/>
      <TheContent />
      <PageFooter />
      </div>
           
    </div>
  );
}

export default App;
