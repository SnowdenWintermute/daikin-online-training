import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setFullName } from "../../store/actions/user";
import { toast } from "react-toastify";
import "./register.css";
import { useHistory } from "react-router";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const firstName = useSelector((state) => state.user.firstName || "");
  const middleName = useSelector((state) => state.user.middleName || "");
  const lastName = useSelector((state) => state.user.lastName || "");
  const [newName, setNewName] = useState({
    firstName,
    middleName,
    lastName,
  });

  const handleChange = (e, whichName) => {
    console.log(e, whichName);
    setNewName({ ...newName, [whichName]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(setFullName(newName));
    toast.success(
      `Name set to ${newName.firstName + " " + newName.middleName + " " + newName.lastName}`
    );
    history.push("/");
  };

  return (
    <div className="registration-page">
      <div className="registration-box">
        <h3>Enter Name</h3>
        <span>This will be the name that appears on test completion certificates</span>
        <TextField
          label="First"
          value={newName.firstName}
          onChange={(e) => handleChange(e, "firstName")}
        />
        <TextField
          label="Middle"
          value={newName.middleName}
          onChange={(e) => handleChange(e, "middleName")}
        />
        <TextField
          label="Last"
          value={newName.lastName}
          onChange={(e) => handleChange(e, "lastName")}
        />
        <div style={{ height: 20 }} />
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
