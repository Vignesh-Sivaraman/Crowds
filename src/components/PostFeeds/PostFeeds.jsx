import { PostFeedsMain } from "./PostFeeds.styles";
import PostFeed from "../PostFeed/PostFeed";
import NewPost from "../NewPost/NewPost";
import { Fragment, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";

const PostFeeds = () => {
  const { currentUser } = useContext(UserContext);
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

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
          : data.map((post, i) => <PostFeed post={post} key={i + 1} />)}
      </PostFeedsMain>
    </Fragment>
  );
};

export default PostFeeds;
