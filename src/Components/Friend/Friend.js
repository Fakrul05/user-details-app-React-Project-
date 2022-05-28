import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, email, id } = props.friend;

  return (
    <div className="card">
      <div className="title">
        <h5 className="fw-bold">Name: {name}</h5>
      </div>
      <div className="content mt-2">
        <p>Email: {email}</p>
        <Link to={`/details/${id}`} className="btn details-btn">
          Show details
        </Link>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Friend;
