import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("Error::", err);
  return (
    <div className="bg-red-100 border border-red-500 rounded-md p-4 mb-6">
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <p className="text-red-500 font-bold">{err.data}</p>
      <p className="text-red-500 font-bold">Status Code: {err.status}</p>
    </div>
  );
};

export default Error;
