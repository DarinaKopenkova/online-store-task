import React from "react";
import "./Cards.module.css";
import { Row, Col, Divider } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const Cards = (props) => {
  let productItems = props.dataItems.map((item) => (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img id={item.id} alt="Зеркальный фотоаппарат" src={item.imageUrl} />
        }
      >
        <Meta title={item.title} description={item.description} />
      </Card>
    </Col>
  ));

  return <Row gutter={[40, 16]}>{productItems}</Row>;
};

export default Cards;
