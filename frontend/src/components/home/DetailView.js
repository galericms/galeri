import React from "react";
import { withRouter } from "react-router";

import { Row, Col } from "react-bootstrap";

import ProjCard from "./ProjCard";

const DetailView = props => {
    const cards = props.projects.map(project => {
        return (
            <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
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
export default withRouter(DetailView);
