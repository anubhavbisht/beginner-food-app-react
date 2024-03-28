import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("Error::", err);
  return (
    <div className="error-container">
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <p className="error-message">{err.data}</p>
      <p className="error-message">Status Code: {err.status}</p>
    </div>
  );
};

export default Error;
