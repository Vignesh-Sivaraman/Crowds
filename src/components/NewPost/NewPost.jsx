import Image from "../../assets/images/image.png";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext.js";
import { useFormik } from "formik";
import {
  NewPostMain,
  NewPostContainer,
  NewPostTop,
  NewPostBottom,
  NewPostLeft,
  NewPostItem,
  NewPostRight,
} from "./NewPost.styles";
import { crowdServer } from "../../config/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewPost = () => {
  useEffect(() => {
    console.log("scrolled home");
    window.scrollTo(0, 0);
  }, []);
  const { currentUser } = useContext(UserContext);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      newPost.userId = currentUser.details.idusers;
      return crowdServer.post("/posts/addposts", newPost, {
        headers: {
          authorization: currentUser.token,
        },
      });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  let formik = useFormik({
    initialValues: {
      postDesc: "",
      postImg: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        values.postImg =
          values.postImg === ""
            ? "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            : values.postImg;
        mutation.mutate(values);
        resetForm();
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <NewPostMain>
      <NewPostContainer>
        <form onSubmit={formik.handleSubmit}>
          <NewPostTop>
            <img src={currentUser.details.profilePic} alt="" />
            <input
              type="text"
              name="postDesc"
              placeholder={`What's on your mind ${currentUser.details.userName}?`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postDesc}
              required
            />
          </NewPostTop>
          <hr />
          <NewPostBottom>
            <NewPostLeft>
              <NewPostItem>
                <img src={Image} alt="addimage" />
                <input
                  type="text"
                  name="postImg"
                  placeholder={`Add Image URL (If any)`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.postImg}
                />
              </NewPostItem>
            </NewPostLeft>
            <NewPostRight>
              <button type="submit">Share</button>
            </NewPostRight>
          </NewPostBottom>
        </form>
      </NewPostContainer>
    </NewPostMain>
  );
};

export default NewPost;
