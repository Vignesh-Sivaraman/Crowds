import {
  PostFeedMain,
  PostFeedContainer,
  PostFeedUser,
  PostFeedUserInfo,
  PostFeedDetails,
  PostFeedLink,
  PostFeedName,
  PostFeedDate,
  PostFeedContent,
  PostFeedInfo,
  PostFeedItem,
  PostImage,
} from "./PostFeed.styles";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../Comments/Comments";
import { useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";
import moment from "moment";

const PostFeed = ({ post }) => {
  const { currentUser } = useContext(UserContext);
  const [commentOpen, setCommentOpen] = useState(false);

  const { isLoading, error, data } = useQuery(
    ["likes" + post.idposts],
    async () => {
      let res = await crowdServer.post(
        "/likes/getlike",
        { postId: post.idposts },
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
    (likestatus) => {
      if (likestatus)
        return crowdServer.post(
          "/likes/deletelike",
          {
            likeUserId: currentUser.details.idusers,
            likePostId: post.idposts,
          },
          {
            headers: {
              authorization: currentUser.token,
            },
          }
        );
      return crowdServer.post(
        "/likes/addlike",
        {
          likeUserId: currentUser.details.idusers,
          likePostId: post.idposts,
        },
        {
          headers: {
            authorization: currentUser.token,
          },
        }
      );
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes" + post.idposts]);
      },
    }
  );

  const likeManipulate = () => {
    mutation.mutate(data.includes(currentUser.details.idusers));
  };
  const noImage =
    "https://img.freepik.com/free-vector/abstract-gears-background-with-text-space_1017-20102.jpg?w=826&t=st=1672129517~exp=1672130117~hmac=45b27c50aa83b706729b205f219f81fc833f1db196c28f6c64a1abb19a1e8c77";
  return (
    data && (
      <PostFeedMain>
        <PostFeedContainer>
          <PostFeedUser>
            <PostFeedUserInfo>
              <img src={post.profilePic} alt={post.userName} />
              <PostFeedDetails>
                <PostFeedLink to={`/home/profile/${post.postUserId}`}>
                  <PostFeedName>{post.userName}</PostFeedName>
                </PostFeedLink>
                <PostFeedDate>{moment(post.createdAt).fromNow()}</PostFeedDate>
              </PostFeedDetails>
            </PostFeedUserInfo>
            <MoreHorizIcon />
          </PostFeedUser>
          <PostFeedContent>
            <p>{post.postDesc}</p>
            <PostImage src={post.postImg ? post.postImg : noImage} />
          </PostFeedContent>
          <PostFeedInfo>
            <PostFeedItem>
              {isLoading ? (
                "loading"
              ) : data.includes(currentUser.details.idusers) ? (
                <FavoriteOutlinedIcon
                  style={{ color: "red" }}
                  onClick={likeManipulate}
                />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={likeManipulate} />
              )}
              {data.length} Likes
            </PostFeedItem>
            <PostFeedItem onClick={() => setCommentOpen(!commentOpen)}>
              <TextsmsOutlinedIcon />
              See Comments
            </PostFeedItem>
            <PostFeedItem>
              <ShareOutlinedIcon />
              Share
            </PostFeedItem>
          </PostFeedInfo>
          {commentOpen && <Comments postId={post.idposts} />}
        </PostFeedContainer>
      </PostFeedMain>
    )
  );
};

export default PostFeed;
