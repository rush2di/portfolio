import React, { createRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

const Hero = ({ stopGsap }) => {
  const ref = React.createRef();
  return (
    <div className="main-section">
      <div className="hero">
        <div className="hello-container">
          <div className="hello-center">
            <Controller>
              <Scene
                triggerHook={"onLeave"}
                offset={-30}
                triggerElement={".bg-color"}
              >
                <Timeline>
                  <Tween
                    playState={stopGsap}
                    position={0}
                    from={{
                      css: {
                        transition: "all 0.6s cubic-bezier(0.53,-0.09, 0.58, 1)"
                      }
                    }}
                    to={{
                      x: 850,
                      opacity: "0.8"
                    }}
                  >
                    <div className="hello-txt">
                      <h1>
                        <span>He</span>
                        <br />
                        <span>llo</span>
                        <span className="dot">.</span>
                      </h1>
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
            </Controller>
          </div>
          <Controller>
            <Scene
              triggerHook={"onLeave"}
              offset={-30}
              triggerElement={".bg-color"}
            >
              <Timeline>
                <Tween to={{ opacity: 0, y: 30 }}>
                  <div className="scroll">
                    <i className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="18"
                        viewBox="0 0 17 10"
                      >
                        <path d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"></path>
                      </svg>
                    </i>
                  </div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
          <Controller>
            <Scene
              triggerHook={"onLeave"}
              offset={-30}
              triggerElement={".bg-color"}
            >
              <Timeline>
                <Tween
                  playState={stopGsap}
                  position={0}
                  from={{
                    css: {
                      transition: "all 0.5s cubic-bezier(0.53,-0.09, 0.58, 1)"
                    }
                  }}
                  to={{
                    x: 720,
                    opacity: 1
                  }}
                >
                  <div className="bg-color"></div>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
          <div className="intro-txt">
            <div className="intro-wrapper">
              <div className="txt-container">
                <Controller>
                  <Scene
                    triggerHook={"onLeave"}
                    offset={-30}
                    triggerElement={".bg-color"}
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
                        <p>
                          <b>
                            I'am Rochdi Belhirch a designer and a
                            frontend-developer
                          </b>
                          <br />
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ullam eveniet dolore impedit.
                          </span>
                        </p>
                      </Tween>
                    </Timeline>
                  </Scene>
                </Controller>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
