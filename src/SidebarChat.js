import React from "react";
import "./SidebarChat.css";

import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div class="sidebarchat__info">
        <h2>Room Name</h2>
        <p>This is the last msg.</p>
      </div>
    </div>
  );
}

export default SidebarChat;
