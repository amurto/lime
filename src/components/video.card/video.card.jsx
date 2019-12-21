import React, { Fragment } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./video.card.css";
import thumb1 from "./thumbs/1.jpg";

const VideoCard = () => {
  return (
    <Fragment>
      <Card>
        <CardImg top width="100%" src={thumb1} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default VideoCard;
