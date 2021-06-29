import React, { Component } from "react";
import ResearchCard from './research-card'
import CardView from './research-card-view'
import axios from 'axios'

class ResearchReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            components: []
        }

        this.generateCards = this.generateCards.bind(this)
    }

    componentDidMount() {
        //make axios call to get data from the back end
        axios.get('http://localhost:5000/reviwer/view-posts-for-review').then(res => {
            console.log(res)

            this.generateCards(res.data)
        })

    }

    generateCards(data) {

        var componentList = []
        //generate cards from given data
        data.forEach(element => {
            componentList.push(<CardView ResearchTitle={element.tittle} Description={element.description} Documnet={element.document} id={element._id} />)
        });

        this.setState({
            components: componentList
        })
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                {this.state.components}
            </div>)
    }
}

export default ResearchReview