import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img 
          onClick={() => setExtended(prev => !prev)} 
          className="menu" 
          src={assets.menu_icon} 
          alt="Menu Icon" 
        />
        <div className="new_chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent_title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="Message Icon" />
              <p>What is react ...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom_item recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom_item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom_item recent-entry">
          <img src={assets.setting_icon} alt="Setting Icon" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
