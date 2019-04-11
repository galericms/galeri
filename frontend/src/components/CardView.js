import React from "react";
import { Card, Row, Col } from "antd";

const CardView = props => {
    const cards = props.cardData.map(cardItem => {
        return (
            <Col
                xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={6}
                key={cardItem.id}
                style={{ marginBottom: "16px" }}
            >
                <Card
                    key={cardItem.id}
                    title={cardItem.title}
                    extra={cardItem.author}
                    hoverable={true}
                    onClick={() =>
                        window.alert(`${cardItem.id} has been clicked`)
                    }
                >
                    {cardItem.summary}
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
export default CardView;
