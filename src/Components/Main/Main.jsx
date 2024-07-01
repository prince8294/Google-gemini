import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img className="usericon" src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main_container">
        <div className="greet">
          <p>
            <span>HEllo, Dev.</span>
          </p>
          <p>How can i Help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p> Possimus natus quas quis aspernatur saepe.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p> minus voluptatum nemo ipsum atque nisi non.</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p> Eius obcaecati aut blanditiis voluptate in hic?</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
     
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
     </div>
      </div>
  );
};

export default Main;
