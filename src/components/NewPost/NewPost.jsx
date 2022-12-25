import Image from "../../assets/images/image.png";
import { useContext } from "react";
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
            <img src={currentUser.profilePic} alt="" />
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
                  placeholder={`Add Image URL (if any)`}
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
