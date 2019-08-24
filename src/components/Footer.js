import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
           <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
               <span>Fundacion de Software Libre © 2019 
                   <Link to="http://www.uatf.edu.bo" target='_blank' title="Colorlib">U.A.T.F.</Link> Ingenieria de Sistemas.
               </span>
           </footer>
        )
    }
}
