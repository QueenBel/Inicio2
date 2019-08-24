import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as $ from 'jquery';
//import '../ScriptStyle/scripts/index.js';
export default class Navbar extends Component{
    componentDidMount(){

        $('.search-toggle').on('click', e => {
        $('.search-box, .search-input').toggleClass('active');
        $('.search-input input').focus();
        e.preventDefault();
        });
        // ٍSidebar Toggle
        $('.sidebar-toggle').on('click', e => {
        $('.app').toggleClass('is-collapsed');
        e.preventDefault();
        });
    };
    render(){
        return(
            <div className="header navbar">
                <div className="header-container">
                    <ul className="nav-left">
                        <li>
                            <Link id="sidebar-toggle" className="sidebar-toggle" to="#">
                                <i className="ti-menu"></i>
                            </Link>
                        </li>
                        <li className="search-box">
                            <Link className="search-toggle no-pdd-right" to="#">
                                <i className="search-icon ti-search pdd-right-10"></i> 
                                <i className="search-icon-close ti-close pdd-right-10"></i>
                            </Link>
                        </li>
                        <li className="search-input">
                            <input className="form-control" type="text" placeholder="Search..."/>
                        </li>
                    </ul>
                    <ul className="nav-right">
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                                <div className="peer">
                                    <span className="fsz-sm c-grey-900">isabel isabel</span>
                                </div>
                            </Link>
                            <ul className="dropdown-menu fsz-sm">
                                <li>
                                    <Link to="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                        <i className="ti-user mR-10"></i>
                                        <span>Perfil</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                        <i className="ti-email mR-10"></i>
                                        <span>Mensages</span>
                                    </Link>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                    <Link to="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                        <i className="ti-power-off mR-10"></i>
                                        <span>Cerrar</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
