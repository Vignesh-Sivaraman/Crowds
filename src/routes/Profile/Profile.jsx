import {
  ProfileMain,
  ProfileImages,
  ProfileCover,
  ProfilePic,
  ProfileContainer,
  ProfileUserInfo,
  ProfileUserCenter,
  ProfileInfo,
  ProfileUserItem,
} from "./Profile.styles";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { crowdServer } from "../../config/axios";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import Updateuser from "../../components/Updateuser/Updateuser";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let params = useParams();

  const userId = parseInt(params.Id);

  const { currentUser } = useContext(UserContext);

  const { isLoading, error, data } = useQuery(["user"], async () => {
    let res = await crowdServer.post(
      "/users/getuser",
      {
        userId,
      },
      {
        headers: {
          authorization: currentUser.token,
        },
      }
    );
    return res.data;
  });

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relations"],
    async (req, res) => {
      let userData = await crowdServer.post(
        "/users/getrelation",
        { followedId: params.Id },
        {
          headers: {
            authorization: currentUser.token,
          },
        }
      );
      return userData.data;
    }
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return crowdServer.post(
          "/users/deleterelation",
          {
            followerId: currentUser.details.idusers,
            followedId: userId,
          },
          {
            headers: {
              authorization: currentUser.token,
            },
          }
        );

      return crowdServer.post(
        "/users/addrelation",
        {
          followerId: currentUser.details.idusers,
          followedId: userId,
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
        queryClient.invalidateQueries(["relations"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.details.idusers));
  };

  return (
    data &&
    relationshipData &&
    (isLoading ? (
      "loading"
    ) : (
      <ProfileMain>
        <ProfileImages>
          <ProfileCover src={data.coverPic} alt="cover" />
          <ProfilePic src={data.profilePic} alt="ProfilePic" />
        </ProfileImages>
        <ProfileContainer>
          <ProfileUserInfo>
            <ProfileUserCenter>
              <ProfileInfo>
                <ProfileUserItem>
                  <PersonIcon />
                  <span>{data.userName}</span>
                </ProfileUserItem>
                <ProfileUserItem>
                  <PlaceIcon />
                  <span>{data.city}</span>
                </ProfileUserItem>
              </ProfileInfo>
              {currentUser.details.idusers === userId ? (
                <button
                  style={{ backgroundColor: "orange", color: "black" }}
                  onClick={() => setOpenUpdate(true)}
                >
                  update
                </button>
              ) : (
                <button onClick={handleFollow}>
                  {relationshipData.includes(currentUser.details.idusers)
                    ? "following"
                    : "follow"}
                </button>
              )}
            </ProfileUserCenter>
          </ProfileUserInfo>
          {openUpdate ? <Updateuser setOpenUpdate={setOpenUpdate} /> : ""}
        </ProfileContainer>
      </ProfileMain>
    ))
  );
};

export default Profile;
