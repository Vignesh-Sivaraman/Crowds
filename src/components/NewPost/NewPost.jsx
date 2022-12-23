import Image from "../../assets/images/image.png";
import Map from "../../assets/images/map.png";
import Friend from "../../assets/images/tag.png";
import { useContext } from "react";
import { UserContext } from "../../context/userContext.js";
import {
  NewPostMain,
  NewPostContainer,
  NewPostTop,
  NewPostBottom,
  NewPostLeft,
  NewPostItem,
  NewPostRight,
} from "./NewPost.styles";

const NewPost = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <NewPostMain>
      <NewPostContainer>
        <NewPostTop>
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </NewPostTop>
        <hr />
        <NewPostBottom>
          <NewPostLeft>
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <NewPostItem>
                <img src={Image} alt="addimage" />
                <span>Add Image</span>
              </NewPostItem>
            </label>
            <NewPostItem>
              <img src={Map} alt="map" />
              <span>Add Place</span>
            </NewPostItem>
            <NewPostItem>
              <img src={Friend} alt="friend" />
              <span>Tag Friends</span>
            </NewPostItem>
          </NewPostLeft>
          <NewPostRight>
            <button>Share</button>
          </NewPostRight>
        </NewPostBottom>
      </NewPostContainer>
    </NewPostMain>
  );
};

export default NewPost;
