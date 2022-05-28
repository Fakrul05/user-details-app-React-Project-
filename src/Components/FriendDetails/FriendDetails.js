import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState({});

  const { name, phone, email } = friend;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div className="card">
      <div className="title">
        <h5 className="fw-bold">Name: {name}</h5>
      </div>
      <div className="content mt-2">
        <p>Phone Number: {phone}</p>
        <p>Email: {email}</p>
      </div>

      <Link to={"/"} className="btn details-btn">
        Back To Home
      </Link>
      <div className="circle"></div>
    </div>
  );
};

export default FriendDetails;
