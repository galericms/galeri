import React from "react";
import { Card } from "antd";

const CardView = props => (
    <div>
    {props.cardData}
        <Card title='Project 1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
    </div>
);

export default CardView;
