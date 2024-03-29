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
      <div className="p-4 border border-black">
        <img className="w-24 h-24" src={avatar_url} />
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
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default UserClass;
