import { useState } from "react";

const User = ({ name, location, contact, componentType }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);
  console.log("User rendered");
  return (
    <div className="userCard">
      <h2>
        Name: {name} - Component type is {componentType}
      </h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
      <h4>Subscriber count: {count1}</h4>
      <h4>Viewer count: {count2}</h4>
    </div>
  );
};

export default User;
