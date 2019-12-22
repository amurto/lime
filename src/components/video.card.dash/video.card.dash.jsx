import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import insightsIcon from "../../images/icons/data-light.svg";
import "./video.card.dash.css";

const VideoCardDash = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.thumbnail} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardBody>

        <img
          src={insightsIcon}
          className="insights-icon"
          onClick={props.handleClick}
        />
      </Card>
    </div>
  );
};

export default VideoCardDash;
