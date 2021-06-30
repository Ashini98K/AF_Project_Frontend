import React, { Component } from 'react'
import navbarCss from '../../Stylesheets/navbar.css'
// import decode from "jwt-decode";
// import login from "../actions/auth";

class AdminNavBar extends Component {
    constructor(props) {
        super(props);
      

         

    }
 

    render(){
        return(
            <div>

                {/*navigation bar*/}
                <nav className="navbar navbar-expand-lg navbar-light " style={{background: 'black',color: '#FFFFFF'}}>
                    <div className=" container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around">
                            <ul className="navbar-nav navTitles">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand active" style={{color:'white'}} href="/dashboard" >
                                        Admin Dashboard
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav navTitles">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle navbar-brand" style={{color:'white'}} href="" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Add Events
                                    </a>
                                    <ul className="dropdown-menu navTitles" aria-labelledby="navbarDarkDropdownMenuLink" style={{background:'black',outlineColor:'transparent' }}>
                                        <li><a className="dropdown-item navbar-brand" style={{color:'white', background:'#341E71'}}  href="/add-back-panel-user">Add Users</a></li>
                                        <li><a className="dropdown-item navbar-brand " style={{color:'white', background:'#341E71'}} href="/back-panel-user-list">Back Panel User List</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active"  style={{color:'white'}} href="/add-agenda" >
                                        Agenda
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{color:'white'}} href="/user-login" >
                                        Workshops
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{color:'white'}} href="/user-login" >
                                        Researchearchers
                                    </a>
                                </li>
                            </ul>


                           
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{color:'white'}} href="/user-login"  >
                                      login
                                    </a>
                                </li>
                        

                        <ul className="navbar-nav navTitles">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand active" style={{color:'white'}} href="/register" >
                                        Workshops
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <hr/>
                </nav>
            </div>
        )
    }
}

export default AdminNavBar