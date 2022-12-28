import { PostFeedsMain } from "./PostFeeds.styles";
import PostFeed from "../PostFeed/PostFeed";
import NewPost from "../NewPost/NewPost";
import { Fragment, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";

const PostFeeds = () => {
  const { currentUser } = useContext(UserContext);

  const { isLoading, error, data } = useQuery(["posts"], async () => {
    let res = await crowdServer.post(
      "/posts/getposts",
      { userId: currentUser.details.idusers },
      {
        headers: {
          authorization: currentUser.token,
        },
      }
    );
    return res.data;
  });

  return (
    <Fragment>
      <PostFeedsMain>
        <NewPost />
        {isLoading
          ? "loading"
          : data.map((post, i) => <PostFeed post={post} key={post.idposts} />)}
      </PostFeedsMain>
    </Fragment>
  );
};

export default PostFeeds;
