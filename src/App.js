import React,{useEffect,useState} from "react"
import './App.css';
import Pusher from "pusher-js"
import Chat from './Chat';
import Sidebar from './Sidebar';
import axios from "./axios";
function App() {
  const [messages,setMessages]=useState([])
   useEffect(()=>{
        // axios.get("/messages/sync")
        
        // .then((response)=>{
        //   setMessages(response.data)
         
        // })

        fetch("http://localhost:9000/messages/sync",{
          method:'get'
        }).then(res=>res.json())
        .then(res=>setMessages(res))
   },[])
  useEffect(() => {
    const pusher = new Pusher('19f336857a437260e742', {
      cluster: 'eu'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
     
    return  ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  
  console.log(messages)
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar/>
     <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
