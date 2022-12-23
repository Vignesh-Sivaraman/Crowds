import {
  SuggestionsCardButtons,
  SuggestionsCardUser,
  SuggestionsCardUserInfo,
} from "./SuggestionsCard.styles";

const SuggestionsCard = ({ usersData }) => {
  return (
    <SuggestionsCardUser>
      <SuggestionsCardUserInfo>
        <img src={usersData.URL} alt={usersData.userName} />
        <span>{usersData.userName}</span>
      </SuggestionsCardUserInfo>
      <SuggestionsCardButtons>
        <button>follow</button>
        <button>dismiss</button>
      </SuggestionsCardButtons>
    </SuggestionsCardUser>
  );
};

export default SuggestionsCard;
