import React, { Component } from 'react'
import navbarCss from '../../Stylesheets/navbar.css'
import decode from "jwt-decode";
import login from "../actions/auth";

class navBar extends Component {
    constructor(props) {
        super(props);
        this.loginLogoutToggle = this.loginLogoutToggle.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
<<<<<<< HEAD
            login: 'Login',
            userToken: '',
=======
            login :'Login',
            userToken : '',
            click:'Register',
            user:''
>>>>>>> f36199a8e046b2e151d2f32df9ddcbc797af45c1

        }

    }

    componentDidMount() {
        const token = localStorage.getItem('UserToken');
        const user = localStorage.getItem('UserId');

        this.state.user = user;

        this.state.userToken = token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                this.logout(e);
            }
        }

<<<<<<< HEAD
        if (token) {
            this.state.login = 'Logout';
=======
        if(token){
            this.state.login='Logout';
            this.state.click='Profile';
>>>>>>> f36199a8e046b2e151d2f32df9ddcbc797af45c1
            this.setState(login());
            console.log(this.state.login);
        }
        else {
<<<<<<< HEAD
            this.state.login = 'Login';
=======
            this.state.login='Login';
            this.state.click='Register';
>>>>>>> f36199a8e046b2e151d2f32df9ddcbc797af45c1
            console.log(this.state.login);
        }
    }


    loginLogoutToggle(e) {
        if (this.state.userToken !== null) {
            localStorage.clear();
            window.location('/');
        }
        else {

        }



    }

    profile(e, id){
        if(this.state.click == 'Register'){
            window.location('/register');
        }
        else if(this.state.click == 'Profile') {
            window.location(`/profile`)
        }
    }



    logout(e) {
        window.location('/');
    }




    render() {
        return (
            <div>

                {/*navigation bar*/}
                <nav className="navbar navbar-expand-lg navbar-light " style={{ background: 'black', color: '#FFFFFF' }}>
                    <div className=" container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around">
                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/home-page" >
                                        Home
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav navTitles">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle navbar-brand" style={{ color: 'white' }} href="/view-keyspeakers" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Key Speakers
                                    </a>
                                    <ul className="dropdown-menu navTitles" aria-labelledby="navbarDarkDropdownMenuLink" style={{ background: 'black', outlineColor: 'transparent' }}>
                                        <li><a className="dropdown-item navbar-brand" style={{ color: 'white', background: '#341E71' }} href="/researchers">Researchers</a></li>
                                        <li><a className="dropdown-item navbar-brand " style={{ color: 'white', background: '#341E71' }} href="/presenters">Workshop Presenters</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/view-agenda" >
                                        Agenda
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/view-workshop" >
                                        Workshops
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/view-research" >
                                        Research Titles
                                    </a>
                                </li>
                            </ul>


                            <ul className="navbar-nav navTitles" onClick={e => this.loginLogoutToggle(e)}>
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/user-login"  >
                                        {this.state.login}
                                    </a>
                                </li>
                            </ul>

<<<<<<< HEAD
                            <ul className="navbar-nav navTitles">
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/registration" >
                                        Register
=======
                        <ul className="navbar-nav navTitles" onClick={e => this.profile(e, this.state.user)}>
                            <li className="nav-item">
                                <a className="nav-link navbar-brand active" style={{color:'white'}} href="/profile" >
                                    {this.state.click}
>>>>>>> f36199a8e046b2e151d2f32df9ddcbc797af45c1
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <hr />
                </nav>
            </div>
        )
    }
}

export default navBar