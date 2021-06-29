import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class ResearchCard extends Component {
    constructor(porps) {
        super(props)
    }

    navigateToSingleViewPage() {

    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <row>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ResearchCard