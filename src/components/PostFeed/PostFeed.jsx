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
} from "./PostFeed.styles";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../Comments/Comments";
import { useState } from "react";

const PostFeed = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <PostFeedMain>
      <PostFeedContainer>
        <PostFeedUser>
          <PostFeedUserInfo>
            <img src={post.profilePic} alt={post.userName} />
            <PostFeedDetails>
              <PostFeedLink to={`/profile/${post.userId}`}>
                <PostFeedName>{post.userName}</PostFeedName>
              </PostFeedLink>
              <PostFeedDate>1 min ago</PostFeedDate>
            </PostFeedDetails>
          </PostFeedUserInfo>
          <MoreHorizIcon />
        </PostFeedUser>
        <PostFeedContent>
          <p>{post.postDesc}</p>
          <img src={post.postImg} alt="" />
        </PostFeedContent>
        <PostFeedInfo>
          <PostFeedItem>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </PostFeedItem>
          <PostFeedItem onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </PostFeedItem>
          <PostFeedItem>
            <ShareOutlinedIcon />
            Share
          </PostFeedItem>
        </PostFeedInfo>
        {commentOpen && <Comments postId={post.idposts} />}
      </PostFeedContainer>
    </PostFeedMain>
  );
};

export default PostFeed;
