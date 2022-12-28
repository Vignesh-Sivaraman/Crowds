import { useEffect } from "react";
import LatestActivities from "../../components/LatestActivities/LatestActivities";
import SuggestionsCard from "../../components/SuggestionsCard/SuggestionsCard";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ActivitiesMain>
      <Activitiesbox>
        {userData.map((usersData, i) => {
          return <LatestActivities usersData={usersData} key={i + 1} />;
        })}
      </Activitiesbox>
      <Activitiesbox>
        {userData.map((usersData, i) => {
          return <SuggestionsCard usersData={usersData} key={i + 1} />;
        })}
      </Activitiesbox>
    </ActivitiesMain>
  );
};

export default Activities;
