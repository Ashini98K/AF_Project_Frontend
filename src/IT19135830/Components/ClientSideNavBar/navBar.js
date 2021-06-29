import React, { Component } from 'react'
import navbarCss from'../../Stylesheets/navbar.css'
import decode from "jwt-decode";

class navBar extends Component {
    constructor(props) {
        super(props);
        this.loginLogoutToggle = this.loginLogoutToggle.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            btn :''
        }

        const loginstate = this.state.btn;
    }

    componentDidMount() {
        const token = localStorage.getItem('UserToken');

        if(token){
            const decodedToken = decode(token);
            
            if(decodedToken.exp * 1000 < new Date().getTime()){
                this.logout(e);
            }
        }
    }

    loginLogoutToggle(e) {
        if(localStorage !== null){
            this.state.btn = "Logout";
        }
        else{
            this.state.btn = "Login";
        }

    }

    loginClick(e){
        if(localStorage !== null){
            localStorage.clear();
            window.location('/');
        }
        else{
            window.location('/');
        }
    }

    logout(e){
        window.location('/');
    }



    render(){
        return(
            <div>

                <nav className="navbar navbar-expand-lg navbar-light " style={{background: 'black',color: '#FFFFFF'}}>
                    <div className=" container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around">
                            <ul className="navbar-nav navTitles">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand active" style={{color:'white'}} href="/home-page" >
                                        Home
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav navTitles">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle navbar-brand" style={{color:'white'}} href="/home" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Key Speakers
                                    </a>
                                    <ul className="dropdown-menu navTitles" aria-labelledby="navbarDarkDropdownMenuLink" style={{background:'black',outlineColor:'transparent' }}>
                                        <li><a className="dropdown-item navbar-brand" style={{color:'white', background:'#341E71'}}  href="/researchers">Researchers</a></li>
                                        <li><a className="dropdown-item navbar-brand " style={{color:'white', background:'#341E71'}} href="/presenters">Workshop Presenters</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active"  style={{color:'white'}} href="/user-login" >
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
                                        Research Titles
                                    </a>
                                </li>
                            </ul>


                            <ul className="navbar-nav navTitles" onClick={e => this.loginClick(e)}>
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{color:'white'}} href="/user-login"  >
                                        {this.state.btn}
                                    </a>
                                </li>
                            </ul>

                        <ul className="navbar-nav navTitles">
                            <li className="nav-item">
                                <a className="nav-link navbar-brand active" style={{color:'white'}} href="/register" >
                                        Register
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

export default navBar