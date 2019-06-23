import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProjCard = props => {
    return (
        <Card
            onClick={() => props.history.push(`/projects/${props.project.id}`)}
        >
            <Card.Header>{props.project.title}</Card.Header>
            <Card.Body>
                <Card.Text>{props.project.summary}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                - {props.project.creator.name}
            </Card.Footer>
        </Card>
    );
};

export default withRouter(ProjCard);
