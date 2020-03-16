import React from "react";

const UserCard = props => {
  const { first_name, last_name } = props.user;
  return (
    <div className="list-item__box">
      <span className="fa fa-user fa-3x"></span> &nbsp;&nbsp;
      <span>
        {last_name} {first_name}
      </span>
    </div>
  );
};

export default UserCard;
