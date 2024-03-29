const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 flex justify-center items-center">
      <div className="loader border-8 border-gray-300 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default LoadingPage;
