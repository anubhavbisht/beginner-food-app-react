import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Inside constructor of userClass");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anubhavbisht");
    if (data) {
      const json = await data.json();
      this.setState({
        userInfo: json,
      });
    }
    console.log("Userclass component has been mounted");
  }

  componentWillUnmount() {
    console.log("Userclass component has been unmounted");
  }

  componentDidUpdate() {
    console.log("Userclass component has been updated");
  }

  render() {
    const { nameOfUser, locationOfUser, contactOfUser, componentType } =
      this.props;
    const { count1, userInfo } = this.state;
    const { name, location, avatar_url } = userInfo;
    console.log("UserClass rendered");
    return (
      <div className="userCard">
        <img src={avatar_url} />
        <h2>
          Name: {name || nameOfUser}- Component type is {componentType}
        </h2>
        <h3>Location: {location || locationOfUser}</h3>
        <h4>Contact: {contactOfUser}</h4>
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
