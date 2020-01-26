import React from "react";
import thekeBg from "../assets/projects/theke.png";
import echoBg from "../assets/projects/echo.png";
import weatherBg from "../assets/projects/weatherapp.png";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

const Projects = ({ stopGsap }) => {
  return (
    <div className="projects">
      <div className="xl ml">
        <Controller>
          <Scene
            triggerHook={"onCenter"}
            offset={-30}
            triggerElement={".ml"}
            reverse={false}
          >
            <Timeline>
              <Tween
                playState={stopGsap}
                from={{ delay: "0.4" }}
                to={{
                  css: {
                    opacity: 1,
                    transform: "translateY(0px)"
                  }
                }}
              >
                <div
                  style={{
                    opacity: "0",
                    transform: "translateY(100px)",
                    transition: "all 0.5s cubic-bezier(0.76, 0.08, 0.16, 0.68)"
                  }}
                >
                  <div className="wave-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 250 100"
                    >
                      <path d="M168.10656745 61.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875z M208.61041812 24.07551437l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M168.10656745 61.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875zM1.1065696 62.97637452L41.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M41.61042026 25.07550907l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M1.1065696 62.97637452L41.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M57.1065696 62.97637452L97.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M97.61042026 25.07550907l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M57.1065696 62.97637452L97.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M112.10656745 62.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875z M152.61041812 25.07551437l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M112.10656745 62.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875z" />
                    </svg>
                  </div>
                  <span>Pro</span>
                  <br />
                  <span>jects.</span>
                </div>
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </div>
      <div className="projects-section">
        <div className="txt-container">
          <h3>
            <span>explore</span> some of my last projects.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            magnam quidem quibusdam voluptatum ullam architecto dolore? Sunt
            ullam suscipit eligendi earum non deserunt neque
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <div className="cards-bg" />
          <div className="cards-container">
            <div className="wrapper">
              <div className="corner-shape to-top">
                <svg width="260" height="43">
                  <polygon
                    fill="#00000"
                    points="255.1,42.4 0,42.6 0,0 254.6,26.9 "
                  ></polygon>
                </svg>
              </div>
              <div
                className="card set-right card-top"
                style={{ backgroundImage: `url(${thekeBg})` }}
              >
                <div className="over-card">
                  <div className="card-title">
                    <span>title</span>
                  </div>
                  <div className="card-btns">
                    <button className="live">Live</button>
                    <button className="github">Github</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="corner-shape  to-top flip-right">
                <svg width="260" height="43">
                  <polygon
                    fill="#00000"
                    points="255.1,42.4 0,42.6 0,0 254.6,26.9 "
                  ></polygon>
                </svg>
              </div>
              <div
                className="card set-left card-top"
                style={{ backgroundImage: `url(${echoBg})` }}
              >
                <div className="over-card">
                  <div className="card-title">
                    <span>title</span>
                  </div>
                  <div className="card-btns">
                    <button className="live">Live</button>
                    <button className="github">Github</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="corner-shape to-top">
                <svg width="260" height="43">
                  <polygon
                    fill="#00000"
                    points="255.1,42.4 0,42.6 0,0 254.6,26.9 "
                  ></polygon>
                </svg>
              </div>
              <div
                className="card set-right card-top"
                style={{ backgroundImage: `url(${weatherBg})` }}
              >
                <div className="over-card">
                  <div className="card-title">
                    <span>title</span>
                  </div>
                  <div className="card-btns">
                    <button className="live">Live</button>
                    <button className="github">Github</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="corner-shape to-bottom">
                <svg width="260" height="43">
                  <polygon
                    fill="#00000"
                    points="255.1,42.4 0,42.6 0,0 254.6,26.9 "
                  ></polygon>
                </svg>
              </div>
              <div
                className="card set-left card-bottom"
                style={{ backgroundImage: `url(${thekeBg})` }}
              >
                <div className="over-card">
                  <div className="card-title">
                    <span>title</span>
                  </div>
                  <div className="card-btns">
                    <button className="live">Live</button>
                    <button className="github">Github</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="corner-shape middle-bc">
                <svg width="260" height="43">
                  <polygon
                    fill="#00000"
                    points="255.1,42.4 0,42.6 0,0 254.6,26.9 "
                  ></polygon>
                </svg>
              </div>
              <div
                className="card set-right card-bottom"
                style={{ backgroundImage: `url(${thekeBg})` }}
              >
                <div className="over-card">
                  <div className="card-title">
                    <span>title</span>
                  </div>
                  <div className="card-btns">
                    <button className="live">Live</button>
                    <button className="github">Github</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="corner-shape to-bottom">
                <svg width="260" height="43">
                  <polygon
                    fill="#00000"
                    points="255.1,42.4 0,42.6 0,0 254.6,26.9 "
                  ></polygon>
                </svg>
              </div>
              <div
                className="card set-left card-bottom"
                style={{ backgroundImage: `url(${thekeBg})` }}
              >
                <div className="over-card">
                  <div className="card-title">
                    <span>title</span>
                  </div>
                  <div className="card-btns">
                    <button className="live">Live</button>
                    <button className="github">Github</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
