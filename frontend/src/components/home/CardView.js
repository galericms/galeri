import React from "react";

import { Row, Col } from "react-bootstrap";

import ProjCard from "./ProjCard";

const CardView = props => {
    const cards = props.projects.map(project => {
        return (
            <Col
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                key={project.id}
                style={{ marginBottom: "16px" }}
            >
                <ProjCard project={project} />
            </Col>
        );
    });

    return (
        <div>
            <Row>{cards}</Row>
        </div>
    );
};
export default CardView;
