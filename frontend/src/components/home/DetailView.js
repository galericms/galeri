import React from "react";
import { withRouter } from "react-router";
import { Card, Row, Col } from "antd";

const DetailView = props => {
    const cards = props.projects.map(project => {
        return (
            <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                key={project.id}
                style={{ marginBottom: "16px" }}
            >
                <Card
                    key={project.id}
                    title={project.title}
                    extra={project.author}
                    hoverable={true}
                    onClick={() =>
                        props.history.push(`/projects/${project.id}`)
                    }
                >
                    {project.summary}
                </Card>
            </Col>
        );
    });

    return (
        <div>
            <Row gutter={16}>{cards}</Row>
        </div>
    );
};
export default withRouter(DetailView);
