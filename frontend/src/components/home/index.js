import React, { useState } from "react";
import CardView from "./CardView";
import DetaiView from "./DetailView";
import { Button } from "antd";

const Home = props => {
    const [isCardView, setIsCardView] = useState(true);

    return (
        <div style={{ maxWidth: "1280px", margin: "auto" }}>
            <div style={{ float: "left" }}>
                <h1>Home</h1>
            </div>
            <div style={{ float: "right" }}>
                <Button
                    onClick={() => setIsCardView(!isCardView)}
                    icon={isCardView ? "bars" : "appstore"}
                >
                    Change View
                </Button>
            </div>
            <div style={{ clear: "both", marginBottom: "15px" }} />

            {isCardView ? (
                <CardView projects={props.projects} />
            ) : (
                <DetaiView projects={props.projects} />
            )}
        </div>
    );
};
export default Home;
