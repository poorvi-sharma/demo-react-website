import React from "react";
import "./Projects.css";

const Cards = ({ title, content, imgsrc }) => {
  return (
    <div className="card prof-card border-0">
      <div className="row g-0">
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="prof-title">{title}</h5>
            <p className="prof-text">{content}</p>
          </div>
        </div>
        <div className="col-md-5 md-*">
          <img
            src={imgsrc}
            alt="random"
            class="rounded float-right img-fluid card-image"
            maxWidth="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
