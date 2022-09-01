import React from "react";
import Button from "./component/Button";

const CommentDetails = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        {/* <img alt='avatar' src={faker.image.avatar()} /> */}
        <img alt='avatar' src={props.avatar} />
      </a>
      <div className="comment">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.readerView}</div>
      </div>
      <Button>
        {props.buttonValue}
      </Button>
    </div>
  );
};

export default CommentDetails;
