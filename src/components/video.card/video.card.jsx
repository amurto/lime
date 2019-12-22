import React, { Fragment } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./video.card.css";
import thumb1 from "./thumbs/1.jpg";

const VideoCard = props => {
  return (
    <div onClick={props.onClick}>
      <Card>
        <CardImg top width="100%" src={props.thumbnail} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default VideoCard;
