import React from "react";

const UserCard = (props) => {
  return (
    <div className="user-card">
      <img className="user-img" src={props.data.picture.medium} />
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>Age : {props.data.registered.age}</p>
      <p>
        {" "}
        {props.data.location.city} , {props.data.location.state}{" "}
      </p>
      <p></p>
    </div>
  );
};

export default UserCard;
