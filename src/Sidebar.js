import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar,IconButton } from '@material-ui/core';
import  MoreVertIcon from '@material-ui/icons/MoreVert';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://i.ndtvimg.com/i/2016-12/vivek-ramaswamy-650-400_650x400_61481621830.jpg"/>
              <div className="sidebar__headerRight">
                  <IconButton>
                    <DonutLargeIcon />
                  </IconButton>
                  <IconButton>
                    <ChatIcon />
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
              </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                   <SearchOutlined />
                   <input placeholder="Search or start new chat"
                    type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat name="Person1"/>
                <SidebarChat name="Person2" />
                <SidebarChat name="Person3" />
                <SidebarChat name="Person4"/>
                <SidebarChat name="Person5" />
                <SidebarChat name="Person6" />

            </div>
        </div>
    )
}
