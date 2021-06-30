import React, { Component } from 'react'
import navbarCss from'../../Stylesheets/navbar.css'
import decode from "jwt-decode";
import login from "../actions/auth";

class navBar extends Component {
    constructor(props) {
        super(props);
        this.loginLogoutToggle = this.loginLogoutToggle.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            login :'Login',
            userToken : '',

        }

    }

    componentDidMount() {
        const token = localStorage.getItem('UserToken');

        this.state.userToken = token;

        if(token){
            const decodedToken = decode(token);
            
            if(decodedToken.exp * 1000 < new Date().getTime()){
                this.logout(e);
            }
        }

        if(token){
            this.state.login='Logout';
            this.setState(login());
            console.log(this.state.login);
        }
        else {
            this.state.login='Login';
            console.log(this.state.login);
        }
    }


    loginLogoutToggle(e) {
        if(this.state.userToken !== null){
            localStorage.clear();
            window.location('/');
        }
        else{

        }



    }



    logout(e){
        window.location('/');
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


                            <ul className="navbar-nav navTitles" onClick={e => this.loginLogoutToggle(e)}>
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{color:'white'}} href="/user-login"  >
                                        {this.state.login}
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