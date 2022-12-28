import { useFormik } from "formik";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import CommentCard from "../CommentCard/CommentCard";
import { CommentsMain, CommentsWrite } from "./Comments.styles";
import { crowdServer } from "../../config/axios.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(UserContext);

  const { isLoading, error, data } = useQuery(
    ["comments" + postId],
    async () => {
      console.log("getting");
      let res = await crowdServer.post(
        "/comments/getcomment",
        { commentPostId: postId },
        {
          headers: {
            authorization: currentUser.token,
          },
        }
      );
      return res.data;
    }
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return crowdServer.post("/comments/addcomment", newComment, {
        headers: {
          authorization: currentUser.token,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments" + postId]);
      },
    }
  );

  let formik = useFormik({
    initialValues: {
      commentDesc: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        values.commentPostId = postId;
        values.commentUserId = currentUser.details.idusers;
        mutation.mutate(values);
        resetForm();
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    data && (
      <CommentsMain>
        <form onSubmit={formik.handleSubmit}>
          <CommentsWrite>
            <img src={currentUser.details.profilePic} alt="" />
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
        {data.length !== 0 ? (
          <span>
            {data.length === 1
              ? `${data.length} comment`
              : `${data.length} comments`}{" "}
          </span>
        ) : (
          ""
        )}
        {error
          ? "Something Went Wrong"
          : isLoading
          ? "loading"
          : data.length !== 0
          ? data.map((comment, i) => (
              <CommentCard comment={comment} key={i + 1} />
            ))
          : "No comments"}
      </CommentsMain>
    )
  );
};

export default Comments;
