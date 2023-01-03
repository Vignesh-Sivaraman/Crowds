import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";
import {
  SuggestionsCardButtons,
  SuggestionsCardUser,
  SuggestionsCardUserInfo,
} from "./SuggestionsCard.styles";

const SuggestionsCard = ({ usersData }) => {
  const { currentUser } = useContext(UserContext);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      await crowdServer.post(
        "/users/addrelation",
        {
          followerId: currentUser.details.idusers,
          followedId: usersData.idusers,
        },
        {
          headers: {
            authorization: currentUser.token,
          },
        }
      );

      await crowdServer.post(
        "/chat/createchat",
        {
          senderId: currentUser.details.idusers.toString(),
          receiverId: usersData.idusers.toString(),
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
        queryClient.invalidateQueries(["suggestions"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate();
  };

  return (
    <SuggestionsCardUser>
      <SuggestionsCardUserInfo>
        <img src={usersData.profilePic} alt={usersData.userName} />
        <span>{usersData.userName}</span>
      </SuggestionsCardUserInfo>
      <SuggestionsCardButtons>
        <button onClick={handleFollow}>follow</button>
      </SuggestionsCardButtons>
    </SuggestionsCardUser>
  );
};

export default SuggestionsCard;
