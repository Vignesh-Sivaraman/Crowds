import {
  CommentCardMain,
  CommentCardInfo,
  CommentCardDate,
} from "./CommentCard.styles";

const CommentCard = ({ comment }) => {
  return (
    <CommentCardMain>
      <img src={comment.profilePicture} alt="" />
      <CommentCardInfo>
        <span>{comment.name}</span>
        <p>{comment.desc}</p>
      </CommentCardInfo>
      <CommentCardDate>1 hour ago</CommentCardDate>
    </CommentCardMain>
  );
};

export default CommentCard;
