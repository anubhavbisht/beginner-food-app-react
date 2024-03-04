import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// functional component for about page
// const About = () => {
//   console.log("About rendered");
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a react project</h2>
//       {/* <User
//         name="Anubhav Bisht"
//         location="Ghaziabad"
//         contact="@anubhavbisht98"
//         componentType="functional"
//       /> */}
//       <UserClass
//         name="Anu Bisht"
//         location="Panchkula"
//         contact="@anubhav_bisht"
//         componentType="class"
//       />
//     </div>
//   );
// };

// class based component for about page
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor of About");
  }

  componentDidMount() {
    console.log("About component has been mounted");
  }

  componentWillUnmount() {
    console.log("About component has been unmounted");
  }

  render() {
    console.log("Inside render function of class component of About page");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a react project</h2>
        <UserClass
          nameOfUser="Anu Bisht"
          locationOfUser="Panchkula"
          contactOfUser="@anubhav_bisht"
          componentType="class"
        />
      </div>
    );
  }
}
export default About;
