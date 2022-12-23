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
import LanguageIcon from "@mui/icons-material/Language";
import PostFeeds from "../../components/PostFeeds/PostFeeds";

const Profile = () => {
  return (
    <ProfileMain>
      <ProfileImages>
        <ProfileCover
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cover"
        />
        <ProfilePic
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="ProfilePic"
        />
      </ProfileImages>
      <ProfileContainer>
        <ProfileUserInfo>
          <ProfileUserCenter>
            <span>Jane Doe</span>
            <ProfileInfo>
              <ProfileUserItem>
                <PlaceIcon />
                <span>USA</span>
              </ProfileUserItem>
              <ProfileUserItem>
                <LanguageIcon />
                <span>lama.dev</span>
              </ProfileUserItem>
            </ProfileInfo>
            <button>follow</button>
          </ProfileUserCenter>
        </ProfileUserInfo>
        <PostFeeds />
      </ProfileContainer>
    </ProfileMain>
  );
};

export default Profile;
