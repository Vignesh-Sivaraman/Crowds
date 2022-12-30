import { useContext, useEffect, useRef, useState } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from "../../components/Conversation/Conversation";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";
import {
  ChatContainer,
  ChatLeft,
  ChatList,
  ChatMain,
  ChatRight,
} from "./Chat.styles";
import { io } from "socket.io-client";

import { env } from "../../config/config";

const Chat = () => {
  const { currentUser } = useContext(UserContext);
  const [currentChat, setCurrentChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // const OnlineUsers = useRef([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  // getting userchat
  const getuserChats = async (req, res) => {
    try {
      let res = await crowdServer.post(
        "/chat/getchat",
        { userId: currentUser.details.idusers.toString() },
        {
          headers: {
            authorization: currentUser.token,
          },
        }
      );
      setChats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserChats();
  }, []);

  // connecting to socket server
  useEffect(() => {
    if (currentUser.details.idusers) {
      console.log("I am running");
      socket.current = io("ws://localhost:3005");
      socket.current.emit("new-user-add", currentUser.details.idusers);
      socket.current.on("get-users", (users) => {
        // OnlineUsers.current = users;
        setOnlineUsers(users);
        console.log(onlineUsers);
      });
    }
  }, []);

  // setting send messagefrom socket server
  useEffect(() => {
    if (sendMessage !== null) {
      console.log("message delivered");
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  //receive msg from socket server

  useEffect(() => {
    console.log("receiving message");
    socket.current.on("receive-message", (data) => {
      setReceivedMessage(data);
    });
  }, []);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find(
      (member) => member.toString() !== currentUser.details.idusers.toString()
    );
    const online = onlineUsers.find(
      (user) => user.userId.toString() === chatMember.toString()
    );
    return online ? true : false;
  };

  return (
    chats && (
      <ChatMain>
        {/* Left Side */}
        <ChatLeft>
          <ChatContainer>
            <h2>Chats</h2>
            <ChatList>
              {chats.map((data, i) => (
                <div onClick={() => setCurrentChat(data)} key={i + 1}>
                  <Conversation
                    friendsdata={data}
                    key={i + 1}
                    online={checkOnlineStatus(data)}
                  />
                </div>
              ))}
            </ChatList>
          </ChatContainer>
        </ChatLeft>

        {/* Right Side */}
        <ChatRight>
          <ChatBox
            chat={currentChat}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
          />
        </ChatRight>
      </ChatMain>
    )
  );
};

export default Chat;
