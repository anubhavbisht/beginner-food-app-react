import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../index.css";

const AppLayout = () => {
  console.log('App rendered....')
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
