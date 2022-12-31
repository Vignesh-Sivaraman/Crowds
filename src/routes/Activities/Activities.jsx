import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import LatestActivities from "../../components/LatestActivities/LatestActivities";
import SuggestionsCard from "../../components/SuggestionsCard/SuggestionsCard";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";

import { ActivitiesMain, Activitiesbox } from "./Activities.styles";

const userData = [
  {
    URL: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    userName: "Jane Doe",
  },
  {
    URL: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    userName: "Jane Doe",
  },
  {
    URL: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    userName: "Jane Doe",
  },
  {
    URL: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    userName: "Jane Doe",
  },
  {
    URL: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    userName: "Jane Doe",
  },
];

const Activities = () => {
  const { currentUser } = useContext(UserContext);
  let [suggestionData, setSuggestionData] = useState([]);

  // get suggestion data
  const { isLoading, error, data } = useQuery(["suggestions"], async () => {
    let result = await crowdServer.post(
      "/users/getsuggestions",
      { followerId: currentUser.details.idusers },
      {
        headers: {
          authorization: currentUser.token,
        },
      }
    );
    setSuggestionData(result.data);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ActivitiesMain>
      {suggestionData && (
        <Activitiesbox>
          {suggestionData.map((usersData, i) => {
            return <SuggestionsCard usersData={usersData} key={i + 1} />;
          })}
        </Activitiesbox>
      )}
    </ActivitiesMain>
  );
};

export default Activities;
