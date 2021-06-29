import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const navigateToSingleView = (id) => {
    console.log(id)
}

const CardView = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{props.ResearchTitle}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.Description}</CardSubtitle>
                    <Button onClick={() => navigateToSingleView(props.id)}>View</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardView;