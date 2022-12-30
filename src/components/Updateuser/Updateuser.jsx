import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
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
      name: currentUser.details.userName,
      city: currentUser.details.city,
      profilePic: currentUser.details.profilePic,
      coverPic: currentUser.details.coverPic,
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        values.userId = currentUser.details.idusers;
        mutation.mutate(values);
        setOpenUpdate(false);
        resetForm();
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <UpdateUserMain>
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
          />
        </UpdateUserInputBox>
        <UpdateUserButton type="submit">Update</UpdateUserButton>
      </UpdateUserForm>
    </UpdateUserMain>
  );
};

export default Updateuser;
