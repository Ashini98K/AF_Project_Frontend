import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.navigateToEditAgenda = this.navigateToEditAgenda.bind(this);
        this.state = {
             agenda :[]
         }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/agenda')
        .then(response => {
            this.setState({ agenda : response.data.data });
            console.log(this.state.agenda)
        })
    }

    navigateToEditAgenda(e, eventId){
         
        window.location = `/edit-agenda/${eventId}`
    }

    render(){
        return(
            <diV>
                 
                {this.state.agenda.length > 0 && this.state.agenda.map((item, index) => (
                    <div key ={index} className ='card mb-3'>
                        <div className ="p-3" onClick={e => this.navigateToEditAgenda(e, item._id)}>
                        <h4>event : {item.event}</h4>
                        <h5>person : {item.person}</h5>
                        <h5>date : {item.date}</h5>
                        <h5>startingTime : {item.startingTime}</h5>
                        <h5>endingTime : {item.endingTime}</h5>
                        <h5>venue : {item.venue}</h5>
                        </div> 
                    </div>
                ))}
            </diV>
        )
    }
}





export default Dashboard;