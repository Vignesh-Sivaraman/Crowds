import { useFormik } from "formik";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import CommentCard from "../CommentCard/CommentCard";
import { CommentsMain, CommentsWrite } from "./Comments.styles";
import { crowdServer } from "../../config/axios.js";
const Comments = ({ postId }) => {
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

  let formik = useFormik({
    initialValues: {
      commentDesc: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        values.commentPostId = postId;
        values.commentUserId = currentUser.details.idusers;
        // mutation.mutate(values);
        let comment = await crowdServer.post("/comments/addcomment", values, {
          headers: {
            authorization: currentUser.token,
          },
        });
        resetForm();
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <CommentsMain>
      <form onSubmit={formik.handleSubmit}>
        <CommentsWrite>
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            name="commentDesc"
            placeholder="write a comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.commentDesc}
            required
          />
          <button type="submit">Send</button>
        </CommentsWrite>
      </form>
      {comments.map((comment, i) => (
        <CommentCard comment={comment} key={i + 1} />
      ))}
    </CommentsMain>
  );
};

export default Comments;
