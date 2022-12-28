import { Fragment } from "react";
import {
  ConversationFollowImage,
  ConversationMain,
  ConversationName,
  ConversationOnlineDot,
} from "./Conversation.styles";

const Conversation = ({ friendsdata }) => {
  let online = true;

  return (
    friendsdata && (
      <Fragment>
        <ConversationMain>
          <div>
            {online && <ConversationOnlineDot></ConversationOnlineDot>}
            <ConversationFollowImage
              src={friendsdata.profilePic}
              alt="Profile"
            />
            <ConversationName>
              <span style={{ fontSize: "1.1rem" }}>{friendsdata.userName}</span>
              <span style={{ color: online ? "#51e200" : "" }}>
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
