import React from "react";
import { Card } from "antd";

const CardView = props => {
    // console.log(props)
    const cards = props.cardData.map(cardItem => {
        return (
        <Card 
        key={cardItem.id} 
        title={cardItem.title}
        extra={cardItem.author}
        >
            {cardItem.summary}
        </Card>);
    });

    return (
    <div>
    {cards}
        {/* <Card title='Project 1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card> */}
    </div>
);
    }
export default CardView;
