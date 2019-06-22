import React, { useState, useEffect } from "react";

import { Button, Container } from "react-bootstrap";
import { GridTwoUpIcon, ListIcon } from "react-open-iconic-svg";

import CardView from "./CardView";
import DetaiView from "./DetailView";
import { getAllProjects } from "../../APIService";

const Home = () => {
    const [isCardView, setIsCardView] = useState(true);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        getAllProjects().then(resp => {
            console.log(resp);
            setProjects(resp);
        });
    }, []);

    return (
        <Container fluid>
            {projects ? (
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
                        <DetaiView projects={projects} />
                    )}
                </>
            ) : (
                <div />
            )}
        </Container>
    );
};
export default Home;
