import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile,  MoreVert } from "@material-ui/icons";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import React ,{useState} from "react";
import MicIcon from "@material-ui/icons/Mic"
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon"
import "./Chat.css";

export default function Chat({messages}) {
   const [input,setInput]=useState('')
  const sendMessage=async (e)=>{
    e.preventDefault();
    var hours=new Date().getHours();
  var time=hours+ ":"+ new Date().getMinutes();
  if(hours > 12.00){
    console.log(time-12.00+"pm")
  }
   await fetch("http://localhost:9000/messages/new",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:input,
        name:"Kuppu",
        timestamp:time,
        // timestamp:new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true }),
        received:true,
      })
    })
    setInput('');

  }
 
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map(message=>(
           <p className={`chat__message ${message.received && "chat__receiver"}`}>
           <span className="chat__name">{message.name}</span>
           {message.message}
           <span className="chat__timestamp">{message.timestamp}</span>
          
         </p>
        ))}
       
  
      </div>
       <div className="chat__footer">
         <InsertEmotionIcon/>
         <form>
             <input type="text"
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             placeholder="Type a message"
             />
             <button
              onClick={sendMessage}
              type="submit">
                 send a message
             </button>
         </form>
         <MicIcon />
       </div>
    </div>
  );
}
