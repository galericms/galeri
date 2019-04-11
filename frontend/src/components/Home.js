import React from "react";
import CardView from "./CardView";

const Home = props => (
    <div>
        <div style={{float:'left'}}>
        <h1>Home</h1>
        </div>
        <div style={{float:'right'}}>Details | Card</div>
        <div style={{clear: 'both'}}/>
        <CardView cardData={props.sampleData} />
    </div>
);

export default Home;
