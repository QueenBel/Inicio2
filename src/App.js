import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import * as $ from 'jquery';
import './ScriptStyle/scripts/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScriptStyle/styles/index.css';

import Sidebar from './components/Navigation';
import HeaderNavbsr from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/MainContent';

function App(){
 
    return (
    <div className="app">
      <Router>
        <Sidebar/>
        <div className="page-container">
          <HeaderNavbsr/>
          <main className="main-content bgc-grey-100">
            <Route path="/" exact component={Main}/>
          </main>
          <Footer/>
        </div>
      </Router> 
    </div>
  );
  
}

export default App;
