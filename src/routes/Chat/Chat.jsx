import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
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

const Chat = () => {
  const { currentUser } = useContext(UserContext);

  const { isLoading, error, data } = useQuery(["chatfriends"], async () => {
    let res = await crowdServer.post(
      "/users/getfriends",
      { followerId: currentUser.details.idusers },
      {
        headers: {
          authorization: currentUser.token,
        },
      }
    );
    return res.data;
  });
  console.log(data);
  return (
    data && (
      <ChatMain>
        {/* Left Side */}
        <ChatLeft>
          <ChatContainer>
            <h2>Chats</h2>
            <ChatList>
              {data.map((data, i) => (
                <div key={i + 1}>
                  <Conversation friendsdata={data} key={i + 1} />
                </div>
              ))}
            </ChatList>
          </ChatContainer>
        </ChatLeft>

        {/* Right Side */}
        <ChatRight>
          <div style={{ width: "20rem", alignSelf: "flex-end" }}></div>
          <ChatBox
            chat={currentChat}
            currentUser={user._id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
          />
        </ChatRight>
      </ChatMain>
    )
  );
};

export default Chat;
