import React from "react";
import { useSelector } from "react-redux";

const Certificate = ({ lesson }) => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      This certifies that {user.firstName}
      {user.middleName && ` ${user.middleName}`}
      {user.lastName && ` ${user.lastName}`} has completed online training for the topic of {lesson}
    </div>
  );
};

export default Certificate;
