import { useFormik } from "formik";
import moment from "moment";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";
import {
  ChatBoxBody,
  ChatBoxEmptymsg,
  ChatBoxHeader,
  ChatBoxFollower,
  ChatBoxFollowerImage,
  ChatBoxFollowerName,
  ChatBoxmessage,
  ChatBoxmessageOwn,
  ChatBoxSender,
  ChatBoxMain,
  ChatBoxSendButton,
} from "./ChatBox.styles";

const ChatBox = ({ chat, setSendMessage, receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  const { currentUser } = useContext(UserContext);

  // fetching data for header

  const getfriendsData = async (req, res) => {
    const userId = chat?.members?.find(
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
    if (chat !== null) getfriendsData();
  }, [chat]);

  // fetch msg

  const fetchMessage = async (req, res) => {
    let result = await crowdServer.post(
      "/message/getmessage",
      { chatId: chat._id },
      {
        headers: {
          authorization: currentUser.token,
        },
      }
    );
    setMessages(result.data);
  };

  useEffect(() => {
    if (chat !== null) fetchMessage();
  }, [chat]);

  // sending message

  let formik = useFormik({
    initialValues: {
      text: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.text.trim().length === 0) {
        errors.text = "Please enter a valid text ";
      }
      return errors;
    },

    onSubmit: async (values, { resetForm }) => {
      values.senderId = currentUser.details.idusers;
      values.chatId = chat._id;
      const receiverId = chat.members.find(
        (id) => id !== currentUser.details.idusers.toString()
      );
      setSendMessage({ ...values, receiverId });
      try {
        let result = await crowdServer.post("/message/addmessage", values, {
          headers: {
            authorization: currentUser.token,
          },
        });
        setMessages([...messages, result.data]);
        resetForm();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  });

  //getting msg from socket server

  useEffect(() => {
    console.log(receivedMessage);
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  // scroll to last

  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <ChatBoxMain>
      {chat !== null ? (
        userData && (
          <Fragment>
            <ChatBoxHeader>
              <ChatBoxFollower>
                <div>
                  <ChatBoxFollowerImage
                    src={userData.profilePic}
                    alt="Profile"
                  />
                  <ChatBoxFollowerName>
                    <span>{userData.userName}</span>
                  </ChatBoxFollowerName>
                </div>
              </ChatBoxFollower>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </ChatBoxHeader>
            <ChatBoxBody>
              {messages &&
                messages.map((message) =>
                  message.senderId ===
                  currentUser.details.idusers.toString() ? (
                    <ChatBoxmessageOwn ref={scroll}>
                      <span>{message.text}</span>
                      <span>{moment(message.createdAt).fromNow()}</span>
                    </ChatBoxmessageOwn>
                  ) : (
                    <ChatBoxmessage ref={scroll}>
                      <span>{message.text}</span>
                      <span>{moment(message.createdAt).fromNow()}</span>
                    </ChatBoxmessage>
                  )
                )}
            </ChatBoxBody>
            <ChatBoxSender onSubmit={formik.handleSubmit}>
              <span style={{ color: "red" }}>{formik.errors.text}</span>
              <input
                type="text"
                name="text"
                placeholder={`Type here`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
                required
              />
              <ChatBoxSendButton type="submit">Send</ChatBoxSendButton>
            </ChatBoxSender>
          </Fragment>
        )
      ) : (
        <ChatBoxEmptymsg>
          Tap on a chat to start conversation...
        </ChatBoxEmptymsg>
      )}
    </ChatBoxMain>
  );
};

export default ChatBox;
