import React, { useState } from "react";
import CardView from "./CardView";
import DetaiView from "./DetailView";
import { Button } from "antd";


const Home = (props) => {
    const [isCardView, setIsCardView] = useState(1)

    return (
        <div style={{ maxWidth: "1280px", margin: "auto" }}>
            <div style={{ float: "left" }}>
                <h1>Home</h1>
                todo: Add cookie to save view preference
            </div>
            <div style={{ float: "right" }}>
                <Button
                    onClick={() => { isCardView ? setIsCardView(0) : setIsCardView(1); }}
                    icon={isCardView ? 'bars' : 'appstore'}
                >
                    Change View
                </Button>
            </div>
            <div style={{ clear: "both", marginBottom: '15px' }} />

            {
                isCardView ?
                    <CardView cardData={props.cardData} /> :
                    <DetaiView cardData={props.cardData} />
            }
        </div>
    );
}
export default Home;
