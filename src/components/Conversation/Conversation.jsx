import { Fragment, useContext, useEffect, useState } from "react";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";
import ChatBox from "../ChatBox/ChatBox";
import {
  ConversationFollowImage,
  ConversationMain,
  ConversationName,
  ConversationOnlineDot,
} from "./Conversation.styles";

const Conversation = ({ friendsdata, online }) => {
  const { currentUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  // const [currentChat, setCurrentChat] = useState(null);

  const getfriendsData = async (req, res) => {
    const userId = friendsdata.members.find(
      (id) => id !== currentUser.details.idusers.toString()
    );
    try {
      let res = await crowdServer.post(
        "/users/getuser",
        { userId },
        {
          headers: {
            authorization: currentUser.token,
          },
        }
      );
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getfriendsData();
  }, []);

  return (
    userData && (
      <Fragment>
        <ConversationMain>
          <div>
            {online && <ConversationOnlineDot></ConversationOnlineDot>}
            <ConversationFollowImage src={userData.profilePic} alt="Profile" />
            <ConversationName>
              <span style={{ fontSize: "1.1rem" }}>{userData.userName}</span>
              <span style={{ color: online ? "#54B435" : "" }}>
                {online ? "Online" : "Offline"}
              </span>
            </ConversationName>
          </div>
        </ConversationMain>
        <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
      </Fragment>
    )
  );
};

export default Conversation;
