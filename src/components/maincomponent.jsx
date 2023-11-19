// CombinedSidebar.js
import React, { useState } from "react";
import Sidebar from "./sidebarAcordeon";
import SidebarAbout from "./sidebarAbout";
import "./styles/maincomponent.css";
import CompañiaCard from "./compañia";

const CombinedSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSidebarClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="combined-sidebar-container">
      <div className="combined-sidebar-left">
        <Sidebar />
      </div>
      <div className="combined-middle">
        <CompañiaCard></CompañiaCard>
      </div>
      <div className="combined-sidebar-right">
        <SidebarAbout />
      </div>
    </div>
  );
};

export default CombinedSidebar;
