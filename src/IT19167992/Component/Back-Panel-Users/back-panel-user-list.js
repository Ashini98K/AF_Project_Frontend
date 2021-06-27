import React, { Component } from 'react';
import axios from 'axios';

class BackPanelUserList extends Component{
    constructor(props) {
        super(props);
        this.navigateToEditBackPanelUser = this.navigateToEditBackPanelUser.bind(this);
        this.state = {
            backPanelUsers : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/back-panel-user/')
        .then(response => {
            this.setState({ backPanelUsers : response.data.data });
        })
    }

    navigateToEditBackPanelUser(e, backPanelUserId){
        window.location = `/edit-back-panel-user/${backPanelUserId}`
    }
    
    render(){
        return(
            <diV>
                 
                {this.state.backPanelUsers.length > 0 && this.state.backPanelUsers.map((item, index) => (
                    <div key ={index} className ='card mb-3'>
                        <div className ="p-3" onClick={e => this.navigateToEditBackPanelUser(e, item._id)}>
                        <h4>name : {item.name}</h4>
                        <h5>userName : {item.userName}</h5>
                        <h5>email : {item.email}</h5>
                        <h5>contactNumber : {item.contactNumber}</h5>
                        <h5>role : {item.role}</h5>
                        </div> 
                    </div>
                ))}
            </diV>
        )
    }
    
}

export default BackPanelUserList;