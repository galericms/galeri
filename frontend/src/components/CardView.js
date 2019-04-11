import React from "react";
import { Card, Row, Col } from "antd";

const CardView = props => {
    // console.log(props)
    const cards = props.cardData.map(cardItem => {
        return (
            <Col span={10} key={cardItem.id}>
                <Card
                    key={cardItem.id}
                    title={cardItem.title}
                    extra={cardItem.author}
                >
                    {cardItem.summary}
                </Card>
            </Col>
        );
    });

    return (
        <div>
            <Row type='flex' justify="center">
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
