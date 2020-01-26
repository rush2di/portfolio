import React from "react";
import Formy from "./form";

const Footer = () => {
  return (
    <div className="footer">
      <div className="xl ml">
        <div className="wave-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100">
            <path d="M168.10656745 61.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875z M208.61041812 24.07551437l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M168.10656745 61.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875zM1.1065696 62.97637452L41.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M41.61042026 25.07550907l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M1.1065696 62.97637452L41.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M57.1065696 62.97637452L97.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M97.61042026 25.07550907l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M57.1065696 62.97637452L97.3895984 24.07550578l12.50385067 12.9481164-40.28302882 38.90086875z M112.10656745 62.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875z M152.61041812 25.07551437l40.28302882 38.90086875-12.50385067 12.9481164-40.28302882-38.90086874z M112.10656745 62.97636922l40.28302882-38.90086874 12.50385067 12.9481164-40.28302882 38.90086875z" />
          </svg>
        </div>
        <span>Ab</span>
        <br />
        <span>Out.</span>
      </div>
      <div className="contactme">
        <div className="item-1">
          {/* <div className="about-section"> */}
          {/* <div className="min-title"> */}
          <h3>My story</h3>
          {/* </div> */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            eos. Delectus qui enim, sapiente obcaecati vel debitis aliquam
            impedit, mollitia reprehenderit, nemo illum ullam fugiat.
          </p>
          {/* </div> */}
          {/* <div className="about-section"> */}
          {/* <div className="min-title"> */}
          <h3>Connect with me</h3>
          {/* </div> */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
            eos. Delectus qui enim, sapiente obcaecati vel debitis aliquam
            impedit, mollitia reprehenderit, nemo illum ullam fugiat.
          </p>
          {/* </div> */}
          <Formy />
        </div>
      </div>
    </div>
  );
};

export default Footer;
