import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
// import Register from "../../pages/user/Register";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.user);

  return user && user.firstName ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default UserRoute;
