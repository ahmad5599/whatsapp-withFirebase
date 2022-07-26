import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* <Avatar src="https://cdn140.picsart.com/298405491215211.png" /> */}
        <div className="sidebar__headerRight">
          {/* <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton> */}
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          {/* <SearchOutlinedIcon /> */}
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <div className="sidebar__chatsRows">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
