import React from "react";
import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="container">
      <h4 className="text-center my-4 mb-5 fw-bold">
        Total Friends: {friends.length}
      </h4>

      <div
        className="row justify-content-center align-items-center mb-5"
        style={{ gap: 35 + "px" }}
      >
        {friends.map((friend) => (
          <Friend friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Home;
