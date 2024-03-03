import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
    console.log("Inside constructor of userClass");
  }
  componentDidMount() {
    console.log("Userclass component has been mounted");
  }
  render() {
    const { name, location, contact, componentType } = this.props;
    const { count1 } = this.state;
    console.log("UserClass rendered");
    return (
      <div className="userCard">
        <h2>
          Name: {name}- Component type is {componentType}
        </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h4>Subscriber count: {count1}</h4>
        <button
          onClick={() => {
            this.setState({
              count1: count1 + 1,
            });
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default UserClass;
