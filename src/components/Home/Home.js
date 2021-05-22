import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  let profile_img_src =
    "https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_384,h_384,al_c,q_80,usm_0.66_1.00_0.01/gettyimages-1284121212-2048x2048_edited_.webp";

  const [bg1, setbg1] = useState(false);
  const [bg2, setbg2] = useState(false);
  const [bg3, setbg3] = useState(false);

  return (
    <>
      <div className="page">
        <div className="card profile border-0">
          <div className="row no-gutters">
            <div className="col-md-6 col-img">
              <img
                src={profile_img_src}
                className="card-img  img-fluid rounded-circle mx-auto"
                alt="..."
              />
            </div>
            <div className="col-md-4 col-text">
              <div className="card-body mt-5 pl-4">
                <h2 className="card-title home-title">Hello</h2>
                <h3 className="card-subtitle">A Bit About Me</h3>
                <p className="home-text">
                  I am a paragraph. Click here to add your own text and edit me.
                  I am a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
                <Link
                  exact
                  to="/resume"
                  className="btn home-btn rounded-circle"
                  onMouseEnter={() => setbg1(true)}
                  onMouseLeave={() => setbg1(false)}
                  style={{ backgroundColor: bg1 ? "transparent" : "#EEA302" }}
                >
                  Resume
                </Link>
                <Link
                  exact
                  to="/projects"
                  className="btn home-btn rounded-circle"
                  onMouseEnter={() => setbg2(true)}
                  onMouseLeave={() => setbg2(false)}
                  style={{ backgroundColor: bg2 ? "transparent" : "#FF3B25" }}
                >
                  Projects
                </Link>
                <Link
                  exact
                  to="/contact"
                  className="btn home-btn rounded-circle"
                  onMouseEnter={() => setbg3(true)}
                  onMouseLeave={() => setbg3(false)}
                  style={{ backgroundColor: bg3 ? "transparent" : "#80D8DA" }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
