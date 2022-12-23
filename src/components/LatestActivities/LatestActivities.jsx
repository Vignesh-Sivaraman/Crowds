import {
  SuggestionsCardUser,
  SuggestionsCardUserInfo,
} from "../SuggestionsCard/SuggestionsCard.styles";
const LatestActivities = (usersData) => {
  return (
    <SuggestionsCardUser>
      <SuggestionsCardUserInfo>
        <img src={usersData.URL} alt={usersData.userName} />
        <p>
          <span>{usersData.userName}</span> {usersData.status}
        </p>
      </SuggestionsCardUserInfo>
      <span>1 min ago</span>
    </SuggestionsCardUser>
  );
};

export default LatestActivities;
