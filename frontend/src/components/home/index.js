import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";

import { Button, Row, Col } from "react-bootstrap";
import { GridTwoUpIcon, ListIcon } from "react-open-iconic-svg";

import ProjCard from "./ProjCard";
import { getAllProjects } from "../../APIService";

const CardView = props => {
    return (
        <Row>
            {props.projects.map(project => (
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                    key={project.id}
                    style={{ marginBottom: "16px" }}
                >
                    <ProjCard project={project} />
                </Col>
            ))}
        </Row>
    );
};
const DetailView = props => {
    return (
        <Row>
            {props.projects.map(project => (
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
            ))}
        </Row>
    );
};

const Home = () => {
    const [isCardView, setIsCardView] = useState(true);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        getAllProjects().then(resp => {
            setProjects(resp);
        });
    }, []);

    return (
        <>
            {projects && (
                <>
                    <div className="clearfix mb-3" />
                    <Button
                        className="float-right"
                        variant="primary"
                        style={{
                            fill: "#fff",
                            transform: "scale(1.5)",
                            padding: "2px 12px"
                        }}
                        onClick={() => setIsCardView(!isCardView)}
                    >
                        {isCardView ? <ListIcon /> : <GridTwoUpIcon />}
                    </Button>
                    <h1 className="text-center">Home</h1>
                    <div className="clearfix mb-3" />

                    {isCardView ? (
                        <CardView projects={projects} />
                    ) : (
                        <DetailView projects={projects} />
                    )}
                </>
            )}
        </>
    );
};
export default withRouter(Home);
