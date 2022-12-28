import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useContext } from "react";
import { crowdServer } from "../../config/axios";
import { UserContext } from "../../context/userContext";
import {
  UpdateUserForm,
  UpdateUserMain,
  UpdateUserInputBox,
  UpdateUserLabel,
  UpdateUserButton,
} from "./UpdateUser.styles";

const Updateuser = ({ setOpenUpdate }) => {
  const queryClient = useQueryClient();
  const { currentUser } = useContext(UserContext);

  const mutation = useMutation(
    (updatedValues) => {
      return crowdServer.post("/users/updateuser", updatedValues, {
        headers: {
          authorization: currentUser.token,
        },
      });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );
  let formik = useFormik({
    initialValues: {
      name: "",
      city: "",
      profilePic: "",
      coverPic: "",
    },

    onSubmit: async (values) => {
      values.profilePic = values.profilePic
        ? values.profilePic
        : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1672128917~exp=1672129517~hmac=f1bc3a371d71d6d10558d891ba7aa398634859ddd76caac6dea4d0d477ad348b";
      values.coverPic = values.coverPic
        ? values.coverPic
        : "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
      try {
        mutation.mutate(values);
        setOpenUpdate(false);
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <UpdateUserMain>
      {" "}
      <UpdateUserForm onSubmit={formik.handleSubmit}>
        <UpdateUserLabel>
          <span>Name</span>
        </UpdateUserLabel>
        <UpdateUserInputBox>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
          />
        </UpdateUserInputBox>

        <UpdateUserLabel>
          <span>City</span>
        </UpdateUserLabel>
        <UpdateUserInputBox>
          <input
            type="text"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            required
          />
        </UpdateUserInputBox>
        <UpdateUserLabel>
          <span>profilePic(Url):</span>
        </UpdateUserLabel>
        <UpdateUserInputBox>
          <input
            type="text"
            name="profilePic"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profilePic}
            required
          />
        </UpdateUserInputBox>
        <UpdateUserLabel>
          <span>CoverPic(url):</span>
        </UpdateUserLabel>
        <UpdateUserInputBox>
          <input
            type="text"
            name="coverPic"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.coverPic}
            required
          />
        </UpdateUserInputBox>
        <UpdateUserButton type="submit">Update</UpdateUserButton>
      </UpdateUserForm>
    </UpdateUserMain>
  );
};

export default Updateuser;
