import React, { useEffect } from "react";
import { useHistory } from "react-router";
const LoadingToRedirect = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/edit-name");
  });
  return <div></div>;
};

export default LoadingToRedirect;
