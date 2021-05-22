import React, { Component } from "react";
import Cards from "./Cards";
import PCData from "./PCData";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="card_list">
        <h1 className="heading">Projects</h1>
        <hr />
        {PCData.map((val) => {
          return (
            <Cards
              title={val.title}
              content={val.content}
              imgsrc={val.imgsrc}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
