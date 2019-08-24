import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as $ from 'jquery';
//import '../ScriptStyle/scripts/index.js';
import './Navbar'
export default class Navigation extends Component{
    componentDidMount(){
     // Sidebar link
    $('.sidebar .sidebar-menu li a').on('click', function() {
      const $this = $(this);

      if ($this.parent().hasClass('open')) {
        $this
          .parent()
          .children('.dropdown-menu')
          .slideUp(200, () => {
            $this.parent().removeClass('open');
          });
      } else {
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('.dropdown-menu')
          .slideUp(200);

        $this
          .parent()
          .parent()
          .children('li.open')
          .children('a')
          .removeClass('open');

        $this
          .parent()
          .parent()
          .children('li.open')
          .removeClass('open');

        $this
          .parent()
          .children('.dropdown-menu')
          .slideDown(200, () => {
            $this.parent().addClass('open');
          });
      }
    });
 
   };
    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-inner">
                    <div className="sidebar-logo">
                        <div className="peers ai-c fxw-nw">
                            <div className="peer peer-greed">
                                <Link className="sidebar-link td-n" to="#">
                                    <div className="peers ai-c fxw-nw">
                                        <div className="peer">
                                            <div className="logo"></div>
                                        </div>
                                        <div className="peer peer-greed">
                                            <h5 className="lh-1 mB-0 logo-text">Proyecto</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="peer">
                                <div className="mobile-toggle sidebar-toggle">
                                    <Link to="#" className="td-n">
                                        <i className="ti-arrow-circle-left"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="sidebar-menu scrollable pos-r">
                        <li className="nav-item mT-30 actived">
                            <Link className="sidebar-link" to="#">
                                <span className="icon-holder">
                                    <i className="c-blue-500 ti-home"></i>
                                </span>
                                <span className="title">Inicio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="sidebar-link" to="#">
                                <span className="icon-holder">
                                    <i className="c-indigo-500 ti-bar-chart"></i>
                                </span>
                                <span className="title">Items</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="sidebar-link" to="#">
                                <span className="icon-holder">
                                    <i className="c-light-blue-500 ti-pencil"></i>
                                </span>
                                <span className="title">Items</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="dropdown-toggle" to="#">
                                <span className="icon-holder">
                                    <i className="c-orange-500 ti-layout-list-thumb"></i>
                                </span>
                                <span className="title">Reportes</span>
                                <span className="arrow">
                                    <i className="ti-angle-right"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="sidebar-link" to="#">Laboratorio</Link></li>
                                <li><Link className="sidebar-link" to="#">Cuestionario</Link></li>
                                <li><Link className="sidebar-link" to="#">Materias</Link></li>
                                <li><Link className="sidebar-link" to="#">Estados</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
