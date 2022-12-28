import {
  CommentCardMain,
  CommentCardInfo,
  CommentCardDate,
} from "./CommentCard.styles";

import moment from "moment";
import { Fragment } from "react";

const CommentCard = ({ comment }) => {
  return (
    <Fragment>
      <CommentCardMain>
        <img src={comment.profilePic} alt="" />
        <CommentCardInfo>
          <span>{comment.userName}</span>
          <p>{comment.commentDesc}</p>
        </CommentCardInfo>
        <CommentCardDate>{moment(comment.createdAt).fromNow()}</CommentCardDate>
      </CommentCardMain>
    </Fragment>
  );
};

export default CommentCard;
