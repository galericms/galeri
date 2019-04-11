import React from "react";
import { Card, Row, Col } from "antd";

const CardView = props => {
    // console.log(props)
    const cards = props.cardData.map(cardItem => {
        return (
            <Col xs={24} md={12} lg={8} key={cardItem.id} style={{marginBottom:"16px"}}>
                <Card
                    key={cardItem.id}
                    title={cardItem.title}
                    extra={cardItem.author}
                    hoverable={true}
                    onClick={() => window.alert(`${cardItem.id} has been clicked`)}
                >
                    {cardItem.summary}
                </Card>
            </Col>
        );
    });

    return (
        <div>
            {/* <Row type='flex' justify="space-around" > */}
            <Row gutter={16}>
                {cards}
            </Row>

            {/* <Card title='Project 1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card> */}
        </div>
    );
};
export default CardView;
