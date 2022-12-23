import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import CommentCard from "../CommentCard/CommentCard";
import { CommentsMain, CommentsWrite } from "./Comments.styles";

const Comments = () => {
  const { currentUser } = useContext(UserContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <CommentsMain>
      <CommentsWrite>
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </CommentsWrite>
      {comments.map((comment, i) => (
        <CommentCard comment={comment} key={i + 1} />
      ))}
    </CommentsMain>
  );
};

export default Comments;
