import React from "react";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/JavaScript.png";
import reacticon from "../assets/react.png";
import reduxicon from "../assets/redux.png";
import firebaseicon from "../assets/firebase.png";
import giticon from "../assets/Git.png";
import sassicon from "../assets/Sass.png";
import bootstrap from "../assets/Bootstrap.png";
import gulp from "../assets/Gulp.png";
import npm from "../assets/npm.png";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

const Skills = ({ stopGsap }) => {
  return (
    <div>
      <Controller>
        <Scene duration={1000} offset={150} triggerHook={"onEnter"}>
          <Timeline>
            <Tween
              position="0"
              from={{
                css: {
                  backgroundPositionY: 100,
                  transition: "all 0.2s ease-out"
                }
              }}
              to={{
                css: {
                  height: "35vh",
                  backgroundPositionY: 0,
                  transition: "all 0.2s ease-out"
                }
              }}
            >
              <div className="bg-one"></div>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
      <div className="ft-grids">
        <div className="centered">
          <div className="title xl">
            <Controller>
              <Scene
                triggerHook={"onCenter"}
                offset={-30}
                triggerElement={".title"}
                reverse={false}
              >
                <Timeline>
                  <Tween
                    playState={stopGsap}
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
                        transition:
                          "all 0.5s cubic-bezier(0.76, 0.08, 0.16, 0.68)"
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
                      <span>Sk</span>
                      <br />
                      <span>ills.</span>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>
          </div>
          <Controller>
            <Scene offset={250} reverse={false} triggerHook={"onEnter"}>
              <Timeline>
                <Tween from={{ opacity: 0, y: -20 }} to={{ opacity: 1, y: 0 }}>
                  <div className="text-container">
                    <div className="txt-title">
                      <p>
                        <span>Design</span> and frontend development
                        <span className="point"> .</span>
                      </p>
                    </div>
                  </div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
          <div>
            <Controller>
              <Scene offset={200} triggerHook={"onEnter"} reverse={false}>
                <Timeline>
                  <Tween
                    from={{ opacity: 0, y: -20 }}
                    to={{ height: 300, opacity: 1, y: 0 }}
                  >
                    <div className="paragraph">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Illum magnam quidem quibusdam voluptatum ullam
                        architecto dolore? Sunt ullam suscipit eligendi earum
                        non deserunt neque impedit labore culpa. Reiciendis,
                        consequuntur exercitationem ipsa facere, aliquam illo
                        reprehenderit eaque qui, debitis soluta laborum nobis
                        quas voluptas aperiam similique.
                      </p>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>
          </div>
        </div>
        <div className="sec-grids">
          <Controller>
            <Scene duration={1000} offset={100} triggerHook={"onEnter"}>
              <Timeline>
                <Tween
                  from={{ css: { transition: "all .4s ease-out" } }}
                  to={{ y: -450 }}
                >
                  <div className="icons-container closed">
                    <div className="tech-icons">
                      <div>
                        <img src={html5} alt="html5" /> <span>html5</span>
                      </div>
                      <div>
                        <img src={css3} alt="css3" /> <span>css3</span>
                      </div>
                      <div>
                        <img src={js} alt="js" /> <span>javascript</span>
                      </div>
                      <div>
                        <img src={reacticon} alt="react" /> <span>react</span>
                      </div>
                      <div>
                        <img src={reduxicon} alt="redux" /> <span>redux</span>
                      </div>
                      <div>
                        <img src={firebaseicon} alt="firebase" />{" "}
                        <span>firebase</span>
                      </div>
                      <div>
                        <img
                          src={bootstrap}
                          style={{ marginLeft: "2rem" }}
                          alt="bootstrap"
                        />{" "}
                        <span>bootstrap</span>
                      </div>
                      <div>
                        <img src={sassicon} alt="sass" /> <span>sass</span>
                      </div>
                      <div>
                        <img
                          src={giticon}
                          alt="git"
                          style={{ marginLeft: "-2rem" }}
                        />{" "}
                        <span>git</span>
                      </div>
                      <div>
                        <img
                          src={gulp}
                          alt="gulp"
                          style={{ margin: "0 0.5rem 0 0" }}
                        />{" "}
                        <span>gulp</span>
                      </div>
                      <div>
                        <img src={npm} alt="npm" /> <span>npm</span>
                      </div>
                    </div>
                  </div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </div>
      </div>
    </div>
  );
};

export default Skills;
